export interface ReniecPersonData {
  dni?: string;
  nombres?: string;
  apellidoPaterno?: string;
  apellidoMaterno?: string;
  nombreCompleto?: string;
}

export interface ReniecValidationResponse {
  success?: boolean;
  message?: string;
  data?: ReniecPersonData;
  status?: number;
  ok?: boolean;
}

const DNI_REGEX = /^\d{8}$/;
const RENIEC_PROXY_PATH = "/.netlify/functions/reniec-dni";

export function normalizeDni(value: string): string {
  return value.replace(/\D/g, "").slice(0, 8);
}

export async function validateDniByReniec(
  dni: string,
): Promise<ReniecValidationResponse> {
  const normalizedDni = normalizeDni(dni);
  if (!DNI_REGEX.test(normalizedDni)) {
    return {
      success: false,
      message: "El DNI debe tener 8 dígitos numéricos.",
      status: 400,
      ok: false,
    };
  }

  const response = await fetch(
    `${RENIEC_PROXY_PATH}?dni=${encodeURIComponent(normalizedDni)}`,
    {
      method: "GET",
      headers: { Accept: "application/json" },
    },
  );

  let payload: ReniecValidationResponse = {};
  try {
    payload = (await response.json()) as ReniecValidationResponse;
  } catch {
    payload = {};
  }

  if (!response.ok && !payload.message) {
    return {
      success: false,
      message: "No fue posible validar el DNI en este momento.",
      status: response.status,
      ok: response.ok,
    };
  }

  return {
    ...payload,
    status: response.status,
    ok: response.ok,
  };
}
