export interface NavChild {
  href: string;
  label: string;
}

export interface NavItem {
  href: string;
  label: string;
  children?: NavChild[];
}

export const MAIN_NAVIGATION: NavItem[] = [
  { href: "/", label: "Inicio" },
  {
    href: "/noticias",
    label: "Noticias",
    children: [
      { href: "/noticias", label: "Todas las Noticias" },
      {
        href: "/noticias/inauguracion-portal-web-ivochote",
        label: "Inauguración Portal Web",
      },
      {
        href: "/noticias/mantenimiento-vias-acceso",
        label: "Mantenimiento de Vías",
      },
      {
        href: "/noticias/campana-salud-comunitaria",
        label: "Campaña de Salud",
      },
    ],
  },
  {
    href: "/autoridades",
    label: "Autoridades",
    children: [
      { href: "/autoridades", label: "Todas las Autoridades" },
      { href: "/autoridades/alcalde", label: "Alcalde" },
      { href: "/autoridades/teniente-alcalde", label: "Teniente Alcalde" },
      { href: "/autoridades/regidor-obras", label: "Regidor de Obras" },
      { href: "/autoridades/regidor-educacion", label: "Regidor de Educación" },
      {
        href: "/autoridades/regidor-desarrollo-social",
        label: "Regidor de Desarrollo Social",
      },
    ],
  },
  {
    href: "/servicios",
    label: "Servicios",
    children: [
      { href: "/servicios", label: "Todos los Servicios" },
      { href: "/servicios/registro-civil", label: "Registro Civil" },
      {
        href: "/servicios/licencias-autorizaciones",
        label: "Licencias y Autorizaciones",
      },
      { href: "/servicios/programas-sociales", label: "Programas Sociales" },
      { href: "/servicios/defensa-civil", label: "Defensa Civil" },
      { href: "/servicios/limpieza-publica", label: "Limpieza Pública" },
      {
        href: "/servicios/biblioteca-municipal",
        label: "Biblioteca Municipal",
      },
    ],
  },
  {
    href: "/turismo",
    label: "Turismo",
    children: [
      { href: "/turismo", label: "Todos los Destinos" },
      { href: "/turismo/rio-urubamba-ivochote", label: "Río Urubamba" },
      {
        href: "/turismo/bosques-tropicales-convencion",
        label: "Bosques Tropicales",
      },
      {
        href: "/turismo/plantaciones-cafe-cacao",
        label: "Plantaciones de Café y Cacao",
      },
      {
        href: "/turismo/comunidades-nativas-machiguenga",
        label: "Comunidades Nativas",
      },
    ],
  },
  {
    href: "/eventos",
    label: "Eventos",
    children: [
      { href: "/eventos", label: "Todos los Eventos" },
      {
        href: "/eventos/aniversario-ivochote",
        label: "Aniversario de Ivochote",
      },
      { href: "/eventos/feria-cafe-cacao", label: "Feria del Café y Cacao" },
      {
        href: "/eventos/limpieza-rio-urubamba",
        label: "Limpieza del Río Urubamba",
      },
      { href: "/eventos/virgen-del-carmen", label: "Virgen del Carmen" },
    ],
  },
  { href: "/contacto", label: "Contacto" },
];

export const FOOTER_NAVIGATION = {
  Gobierno: [
    { href: "/autoridades", label: "Autoridades" },
    { href: "/servicios", label: "Servicios Municipales" },
  ],
  Comunidad: [
    { href: "/noticias", label: "Noticias" },
    { href: "/eventos", label: "Eventos" },
    { href: "/turismo", label: "Turismo" },
  ],
};
