interface RTVELives {
  page: Page;
}

interface Page {
  items: Item[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

interface Item {
  uri: string;
  id: string;
  htmlUrl: string;
  titulo?: string;
  antetitulo?: string;
  inicio: null | string;
  live: boolean;
  porcentaje: number | null;
  tipo: Tipo;
  contentType: ContentType;
  descripcion: null | string;
  logo: string;
  logo_desktop: string;
  imagen: string;
  thumb: string;
  thumb_square: string;
  thumb_vertical: string;
  idAsset: string;
  assetVod?: null;
  classDirecto: string;
  etiqueta: null;
  idPrograma: null | string;
  url: null;
  agrLiveDefault: AgrLiveDefault | null;
  duracion: number | null;
  orden: number;
  metaTitle?: string;
  metaDescription?: null | string;
  keywords?: null;
  canonical?: null;
  permalink: null | string;
  hasDRM: boolean;
  idLicencia: null;
  vertical?: Vertical | null;
  hasPfNews?: boolean;
  requireLogged: boolean;
  type: Type;
  thumbnailer?: boolean;
  thumbPrio?: boolean;
  sgce?: null | string;
  idGolumi?: string;
  canal?: string;
  before?: Before | null;
  now?: Before | null;
  next?: Before | null;
  channelStatsID?: null;
}

interface AgrLiveDefault {
  uri: string;
  id: string;
  titulo: Titulo;
  htmlUrl: string;
}

enum Titulo {
  AhoraEnEmisión = 'Ahora en emisión',
  CanalesTemáticos = 'Canales temáticos',
  Deportes = 'Deportes',
}

interface Before {
  titulo: string;
  inicio: string;
  fin: string;
  duracion: number;
  sgce: null | string;
}

enum ContentType {
  Directo = 'directo',
}

enum Tipo {
  Broadcast = 'broadcast',
  Peticion = 'peticion',
}

enum Type {
  Video = 'video',
}

// interface Vertical {}
