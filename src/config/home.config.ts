interface HomeIconConfig {
  vb: string;
  icon: string;
}

interface HomeShortcutCard {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export const HOME_CITIZEN_SERVICE_ORDER = [
  "registro-civil",
  "licencias-autorizaciones",
  "programas-sociales",
  "defensa-civil",
  "limpieza-publica",
  "biblioteca-municipal",
];

export const HOME_CITIZEN_SERVICE_ICON_MAP: Record<string, HomeIconConfig> = {
  "registro-civil": {
    vb: "0 0 64 64",
    icon: `<rect x="4" y="10" width="56" height="44" rx="4" fill="none"/><rect x="12" y="4" width="40" height="12" rx="3" fill="none"/><circle cx="24" cy="32" r="7"/><path d="M13 50c0-6.075 4.925-11 11-11s11 4.925 11 11"/><line x1="40" y1="28" x2="52" y2="28"/><line x1="40" y1="35" x2="52" y2="35"/><line x1="40" y1="42" x2="48" y2="42"/>`,
  },
  "licencias-autorizaciones": {
    vb: "0 0 64 64",
    icon: `<path d="M32 4L8 18v14c0 16 10 26 24 28 14-2 24-12 24-28V18L32 4z" fill="none"/><polyline points="20,32 28,40 44,24" fill="none"/>`,
  },
  "programas-sociales": {
    vb: "0 0 64 64",
    icon: `<circle cx="32" cy="16" r="8"/><path d="M16 56v-6c0-6.627 7.163-12 16-12s16 5.373 16 12v6"/><circle cx="12" cy="22" r="5.5"/><path d="M4 56v-4c0-4.418 3.582-8 8-8"/><circle cx="52" cy="22" r="5.5"/><path d="M60 56v-4c0-4.418-3.582-8-8-8"/>`,
  },
  "defensa-civil": {
    vb: "0 0 64 64",
    icon: `<path d="M32 6L4 56h56L32 6z" fill="none"/><line x1="32" y1="24" x2="32" y2="38"/><circle cx="32" cy="46" r="2.5" fill="currentColor" stroke="none"/>`,
  },
  "limpieza-publica": {
    vb: "0 0 64 64",
    icon: `<path d="M20 8h24v6H20z" fill="none"/><path d="M16 14h32l-4 42H20L16 14z" fill="none"/><line x1="26" y1="22" x2="24" y2="48"/><line x1="32" y1="22" x2="32" y2="48"/><line x1="38" y1="22" x2="40" y2="48"/><path d="M12 14h40"/>`,
  },
  "biblioteca-municipal": {
    vb: "0 0 64 64",
    icon: `<path d="M32 12C26 8 18 6 8 6v40c10 0 18 2 24 6" fill="none"/><path d="M32 12c6-4 14-6 24-6v40c-10 0-18 2-24 6" fill="none"/><line x1="32" y1="12" x2="32" y2="52"/><line x1="14" y1="18" x2="26" y2="18"/><line x1="14" y1="26" x2="26" y2="26"/><line x1="14" y1="34" x2="24" y2="34"/><line x1="38" y1="18" x2="50" y2="18"/><line x1="38" y1="26" x2="50" y2="26"/>`,
  },
};

export const HOME_CITIZEN_EXTRA_SHORTCUTS = [
  {
    title: "Mesa de Partes Virtual",
    href: "/atencion/mesa-partes-virtual",
    vb: "0 0 64 64",
    icon: `<rect x="8" y="12" width="36" height="48" rx="3" fill="none"/><path d="M18 12V7a5 5 0 0110 0v5"/><rect x="20" y="4" width="6" height="6" rx="1" fill="none"/><line x1="16" y1="24" x2="36" y2="24"/><line x1="16" y1="32" x2="36" y2="32"/><line x1="16" y1="40" x2="30" y2="40"/><path d="M44 20l12 10-12 10" fill="none"/><line x1="44" y1="30" x2="56" y2="30"/>`,
  },
  {
    title: "Libro de Reclamaciones",
    href: "/atencion/libro-de-reclamaciones",
    vb: "0 0 64 64",
    icon: `<path d="M12 4h32a4 4 0 014 4v48a4 4 0 01-4 4H12a4 4 0 01-4-4V8a4 4 0 014-4z" fill="none"/><path d="M8 8h6v48H8" fill="none"/><line x1="22" y1="18" x2="40" y2="18"/><line x1="22" y1="26" x2="40" y2="26"/><line x1="22" y1="34" x2="36" y2="34"/><path d="M38 42l10 2-2 10-10-2z" fill="none"/><line x1="38" y1="42" x2="48" y2="44"/>`,
  },
];

export const HOME_CTA_QUICK_LINKS: HomeShortcutCard[] = [
  {
    title: "Documentos oficiales",
    description: "Acuerdos, ordenanzas y resoluciones municipales publicadas.",
    href: "/transparencia/documentos-oficiales",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>`,
  },
  {
    title: "Presupuesto participativo",
    description: "Consulta la ejecución presupuestal y el gasto municipal.",
    href: "/transparencia/presupuesto-participativo",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>`,
  },
  {
    title: "Mesa de partes virtual",
    description: "Envía documentos y realiza trámites sin salir de casa.",
    href: "/atencion/mesa-partes-virtual",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>`,
  },
];
