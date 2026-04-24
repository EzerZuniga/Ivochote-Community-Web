const JSON_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
};

function jsonResponse(statusCode, payload) {
  return {
    statusCode,
    headers: JSON_HEADERS,
    body: JSON.stringify(payload),
  };
}

function cleanText(value) {
  if (typeof value !== "string") return "";
  return value.trim();
}

function getTokenHeaderValue(token, prefix) {
  const normalizedPrefix = cleanText(prefix);
  if (!normalizedPrefix) return token;
  return `${normalizedPrefix} ${token}`.trim();
}

function normalizePersonData(rawData) {
  const nombres =
    cleanText(rawData?.nombres) ||
    cleanText(rawData?.name) ||
    cleanText(rawData?.firstName);

  const apellidoPaterno =
    cleanText(rawData?.apellidoPaterno) ||
    cleanText(rawData?.apellido_paterno) ||
    cleanText(rawData?.paterno) ||
    cleanText(rawData?.lastName);

  const apellidoMaterno =
    cleanText(rawData?.apellidoMaterno) ||
    cleanText(rawData?.apellido_materno) ||
    cleanText(rawData?.materno) ||
    cleanText(rawData?.secondLastName);

  const nombreCompleto =
    cleanText(rawData?.nombreCompleto) ||
    cleanText(rawData?.nombre_completo) ||
    [nombres, apellidoPaterno, apellidoMaterno].filter(Boolean).join(" ").trim();

  return { nombres, apellidoPaterno, apellidoMaterno, nombreCompleto };
}

export async function handler(event) {
  if (event.httpMethod !== "GET") {
    return jsonResponse(405, {
      success: false,
      message: "Método no permitido.",
    });
  }

  const dni = cleanText(event.queryStringParameters?.dni);
  if (!/^\d{8}$/.test(dni)) {
    return jsonResponse(400, {
      success: false,
      message: "El DNI debe contener exactamente 8 dígitos.",
    });
  }

  const apiToken = cleanText(process.env.RENIEC_API_TOKEN);
  if (!apiToken) {
    return jsonResponse(503, {
      success: false,
      message: "La validación RENIEC no está configurada en el servidor.",
    });
  }

  const apiUrl =
    cleanText(process.env.RENIEC_API_URL) ||
    "https://api.apis.net.pe/v2/reniec/dni";
  const dniParam = cleanText(process.env.RENIEC_API_DNI_PARAM) || "numero";
  const authHeader = cleanText(process.env.RENIEC_API_AUTH_HEADER) || "Authorization";
  const tokenPrefix = cleanText(process.env.RENIEC_API_TOKEN_PREFIX) || "Bearer";

  const upstreamUrl = new URL(apiUrl);
  upstreamUrl.searchParams.set(dniParam, dni);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 9000);

  try {
    const headers = { Accept: "application/json" };
    headers[authHeader] = getTokenHeaderValue(apiToken, tokenPrefix);

    const upstreamResponse = await fetch(upstreamUrl, {
      method: "GET",
      headers,
      signal: controller.signal,
    });

    const rawBody = await upstreamResponse.json().catch(() => ({}));

    if (upstreamResponse.status === 404) {
      return jsonResponse(404, {
        success: false,
        message: "No se encontró información para el DNI ingresado.",
      });
    }

    if (!upstreamResponse.ok) {
      const providerMessage =
        cleanText(rawBody?.message) ||
        cleanText(rawBody?.error) ||
        "Servicio RENIEC no disponible en este momento.";

      return jsonResponse(502, {
        success: false,
        message: providerMessage,
      });
    }

    const person = normalizePersonData(rawBody);
    if (!person.nombres && !person.nombreCompleto) {
      return jsonResponse(502, {
        success: false,
        message: "RENIEC respondió sin datos de identidad utilizables.",
      });
    }

    return jsonResponse(200, {
      success: true,
      data: {
        dni,
        nombres: person.nombres,
        apellidoPaterno: person.apellidoPaterno,
        apellidoMaterno: person.apellidoMaterno,
        nombreCompleto: person.nombreCompleto,
      },
    });
  } catch (error) {
    const isAbort = error instanceof Error && error.name === "AbortError";
    return jsonResponse(isAbort ? 504 : 502, {
      success: false,
      message: isAbort
        ? "Tiempo de espera agotado al consultar RENIEC."
        : "No fue posible validar el DNI en este momento.",
    });
  } finally {
    clearTimeout(timeoutId);
  }
}
