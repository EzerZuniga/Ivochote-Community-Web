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
  { href: "/noticias", label: "Noticias" },
  {
    href: "/autoridades",
    label: "Autoridades",
    children: [
      { href: "/autoridades", label: "Todas las Autoridades" },
      { href: "/autoridades/gary-leo-huaman-rodriguez", label: "Alcalde" },
      { href: "/autoridades/peri-mentiani-yovemi", label: "Reg. de Identidad" },
      {
        href: "/autoridades/samuel-espinoza-rubio",
        label: "Reg. de Fiscalización",
      },
      {
        href: "/autoridades/flor-de-maria-gutierrez-conde",
        label: "Reg. de Programas Sociales",
      },
      { href: "/autoridades/jessica-papel-puma", label: "Reg. de Educación" },
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
      {
        href: "/atencion/mesa-partes-virtual",
        label: "Mesa de Partes Virtual",
      },
      {
        href: "/atencion/libro-de-reclamaciones",
        label: "Libro de Reclamaciones",
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
      {
        href: "/turismo/pongo-de-mainique",
        label: "Pongo de Mainique",
      },
      {
        href: "/turismo/aguas-termales-yotonike",
        label: "Aguas Termales de Yotonike",
      },
      {
        href: "/turismo/rio-yoyato",
        label: "Río Yoyato",
      },
      {
        href: "/turismo/petroglifos-fango-tinangaroni",
        label: "Petroglifos de Fango",
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
    { href: "/transparencia", label: "Transparencia" },
  ],
  Comunidad: [
    { href: "/noticias", label: "Noticias" },
    { href: "/eventos", label: "Eventos" },
    { href: "/turismo", label: "Turismo" },
  ],
};
