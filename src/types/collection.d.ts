export interface RTVECollection {
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
  itemDestacado: null;
  collectionItems: CollectionItem[];
  id: string;
  htmlUrl: string;
  name: string;
  title: string;
  urlTitle: string;
  anteTitle: string;
  description: string;
  generatePf: boolean;
  context: string;
  template: string;
  designCode: string;
  type: string;
  modificationDate: Date;
  hidePublicationDate: boolean;
  previews: ItemPreviews;
  seo: SEO;
  number: number;
  size: number;
  totalItems: number;
  totalPages: number;
  numElements: number;
}

interface CollectionItem {
  uri?: string;
  id: string;
  htmlUrl: string;
  titulo?: string;
  antetitulo?: string;
  inicio?: string;
  live?: boolean;
  porcentaje?: number;
  tipo?: string;
  contentType: Type;
  descripcion?: null | string;
  logo?: string;
  logo_desktop?: string;
  imagen?: string;
  thumb?: string;
  thumb_square?: string;
  thumb_vertical?: string;
  idAsset?: string;
  assetVod?: null;
  classDirecto?: string;
  etiqueta?: null;
  idPrograma?: string;
  url?: null;
  agrLiveDefault?: AgrLiveDefault;
  duracion?: number;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: null;
  canonical?: null;
  permalink?: null;
  hasDRM?: boolean;
  idLicencia?: null;
  vertical?: SubType | null;
  hasPfNews?: boolean;
  requireLogged?: boolean;
  type?: Type;
  webRtve?: null;
  ageRangeUid?: AgeRangeUid | null;
  ageRange?: AgeRange | null;
  name?: string;
  description?: string;
  promoText?: null | string;
  promoDesc?: null | string;
  channel?: Channel;
  imageSEO?: string;
  imgBackground?: string;
  imgBackground2?: string;
  imgPoster?: string;
  imgPoster2?: string;
  imgPortada?: string;
  imgPortada2?: string;
  imgCol?: string;
  imgCol2?: string;
  imgCol3?: string;
  imgBanner?: string;
  imgBanner2?: string;
  imgPinta?: string;
  imagePodcast?: string;
  mainTopic?: string;
  programType?: string;
  programTypeId?: number;
  isComplete?: boolean;
  noFragments?: boolean;
  generos?: Genero[];
  seasons?: Season[] | null;
  numSeasons?: number;
  lastMultimedia?: LastMultimedia;
  paidCountries?: string[] | null;
}

enum AgeRange {
  RecomendadoParaMayoresDe12Años = 'Recomendado para mayores de 12 años',
  RecomendadoParaMayoresDe13Años = 'Recomendado para mayores de 13 años',
  RecomendadoParaMayoresDe16Años = 'Recomendado para mayores de 16 años',
  RecomendadoParaMayoresDe18Años = 'Recomendado para mayores de 18 años',
  RecomendadoParaMayoresDe7Años = 'Recomendado para mayores de 7 años',
  RecomendadoParaTodosLosPúblicos = 'Recomendado para todos los públicos',
}

enum AgeRangeUid {
  IfRedad0 = 'IF_REDAD0',
  IfRedad2 = 'IF_REDAD2',
  IfRedad3 = 'IF_REDAD3',
  IfRedad4 = 'IF_REDAD4',
  IfRedad5 = 'IF_REDAD5',
  IfRedad6 = 'IF_REDAD6',
}

interface AgrLiveDefault {
  uri: string;
  id: string;
  titulo: string;
  htmlUrl: string;
}

interface Channel {
  title: Title;
  id: number;
}

enum Title {
  La1 = 'La 1',
  La2 = 'La 2',
  Playz = 'PLAYZ',
  RTVEPlayTelevision = 'RTVE Play Television',
}

enum Type {
  Directo = 'directo',
  Program = 'program',
  Video = 'video',
}

interface Genero {
  generoInf: string;
  generoInfUid: string;
  generoId?: string;
  subGeneroInf?: null | string;
  subGeneroInfUid?: null | string;
  subGeneroId?: null | string;
}

interface LastMultimedia {
  id: string;
  subType: SubType;
  type: SubType;
  contentType: Type;
  htmlUrl: string;
  title: string;
  description: string;
  shortDescription: string;
  alt: string;
  duration: number;
  ageRangeUid: AgeRangeUid | null;
  ageRange: AgeRange | null;
  publicationDate: string;
  expirationDate: null | string;
  modificationDate: string;
  dateOfEmission: string;
  episode: number | null;
  seasonTitle: null | string;
  temporadaId: number | null;
  promoText: null | string;
  promoDesc: null | string;
  previews: LastMultimediaPreviews;
  presetHD: boolean;
  requireLogged: boolean;
  hasDRM: boolean;
  paidCountries?: null;
}

interface LastMultimediaPreviews {
  horizontal: null | string;
  horizontal2: null | string;
  square: null;
  square2: null | string;
  vertical: null | string;
  vertical2: null | string;
}

interface SubType {
  id: number | null;
  name: Name | null;
}

enum Name {
  Completo = 'Completo',
  Documental = 'Documental',
  Eurovisión = 'Eurovisión',
  Película = 'Película',
}

interface Season {
  id: number;
  shorttitle: Shorttitle;
  longTitle: string;
  numEpisodes: string;
  orden: number;
}

enum Shorttitle {
  T1 = 'T1',
  T2 = 'T2',
  T3 = 'T3',
  T4 = 'T4',
}

interface ItemPreviews {
  horizontal: null;
  vertical: null;
  square: null;
}

interface SEO {
  imageSEO: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  technicalSeo: null;
  permalink: string;
}
