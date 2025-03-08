import RTVE from '.';

export default interface Collection {
  itemDestacado: CollectionItem | null;
  collectionItems: CollectionItem[];
  id: string;
  htmlUrl: string | null;
  name: string;
  title: string;
  urlTitle: string | null;
  anteTitle: string | null;
  description: string | null;
  generatePf: boolean;
  context: string | null;
  template: 'comp_nV' | 'comp_xV' | 'comp_nC' | 'comp_xC';
  designCode: string;
  type: 'collection';
  modificationDate: Date;
  hidePublicationDate: boolean;
  previews: {
    horizontal: null | string;
    vertical: null | string;
    square: null | string;
  };
  seo: SEO;
  number: number;
  size: number;
  totalItems: number;
  totalPages: number;
  numElements: number;
}

type ContentTypeEnum = 'program' | 'video' | 'audio';

interface LastMultimedia {
  id: string;
  subType: SubType;
  type: SubType;
  contentType: ContentTypeEnum;
  htmlUrl: string;
  title: string;
  description: string | null;
  shortDescription: null | string;
  alt: string;
  duration: number;
  ageRangeUid: RTVE['AgeRange']['AgeRangeUid'] | null;
  ageRange: RTVE['AgeRange']['AgeRange'] | null;
  publicationDate: string;
  expirationDate: string | null;
  modificationDate: string;
  dateOfEmission: string | null;
  episode: number | null;
  seasonTitle: string | null;
  temporadaId: number | null;
  promoText: string | null;
  promoDesc: string | null;
  previews: {
    horizontal: null | string;
    horizontal2: null | string;
    square: null | string;
    square2: null | string;
    vertical: null | string;
    vertical2: null | string;
  };
  presetHD: boolean;
  requireLogged?: boolean;
  hasDRM?: boolean;
  consumption?: 'EMPAQUETADO' | 'ondemand' | 'podcast';
  file1?: string | null;
  file2?: string | null;
  file3?: string | null;
  file4?: string | null;
  qualities?: {
    bitRate: number;
    bitRateUnit: null;
    duration: number;
    filePath: string;
    filesize: number;
    identifier: number;
    language: string;
    numOfChannels: number;
    preset: 'HIGH' | 'Original';
    type: string;
  }[];
  paidCountries?: PaidCountry[] | null;
}

interface SubType {
  id: number | null;
  name:
    | 'Documental'
    | 'Completo'
    | 'Película'
    | 'Fragmento'
    | 'Entrevista'
    | 'Tráiler'
    | 'Avance'
    | 'Música'
    | 'Reportaje'
    | null;
}

type PaidCountry =
  | 'AL'
  | 'DE'
  | 'AD'
  | 'AR'
  | 'AM'
  | 'AT'
  | 'AZ'
  | 'BE'
  | 'BZ'
  | 'BY'
  | 'BO'
  | 'BA'
  | 'BR'
  | 'BG'
  | 'CA'
  | 'CL'
  | 'CY'
  | 'VA'
  | 'CO'
  | 'CR'
  | 'HR'
  | 'CU'
  | 'DK'
  | 'EC'
  | 'SV'
  | 'SK'
  | 'SI'
  | 'US'
  | 'EE'
  | 'FI'
  | 'FR'
  | 'GB'
  | 'GR'
  | 'GT'
  | 'HT'
  | 'HN'
  | 'HU'
  | 'IE'
  | 'IS'
  | 'IT'
  | 'KZ'
  | 'XK'
  | 'LV'
  | 'LI'
  | 'LT'
  | 'LU'
  | 'MK'
  | 'MT'
  | 'MX'
  | 'MD'
  | 'MC'
  | 'ME'
  | 'NI'
  | 'NO'
  | 'NL'
  | 'PA'
  | 'PY'
  | 'PE'
  | 'PL'
  | 'PT'
  | 'PR'
  | 'CZ'
  | 'DO'
  | 'RO'
  | 'RU'
  | 'SM'
  | 'RS'
  | 'SE'
  | 'CH'
  | 'TR'
  | 'UA'
  | 'UY'
  | 'VE'
  | 'AU'
  | 'KR'
  | 'PH'
  | 'HK'
  | 'IN'
  | 'JP';

interface SEO {
  imageSEO: null | string;
  metaTitle: null | string;
  metaDescription: null | string;
  metaKeywords: null | string;
  technicalSeo: null | string;
  permalink: string;
}

interface CollectionItem {
  uri?: string;
  id?: string;
  webRtve?: string | null;
  htmlUrl?: string | null;
  titulo?: string;
  inicio?: string;
  live?: boolean;
  porcentaje?: number;
  tipo?: string;
  permalink?: string;
  descripcion?: null | string;
  logo?: string;
  logo_desktop?: string;
  imagen?: string;
  thumb?: string;
  thumb_square?: string;
  thumb_vertical?: string;
  thumbnailer?: boolean;
  thumbPrio?: boolean;
  idAsset?: string;
  classDirecto?: string;
  etiqueta?: string | null;
  idPrograma?: null | string;
  url?: string | null;
  agrLiveDefault?: {
    uri: string;
    id: string;
    titulo: string;
    htmlUrl: string;
  } | null;
  duracion?: number;
  sgce?: null | string;
  idGolumi?: string;
  canal?: string;
  before?: Before;
  now?: Before;
  next?: Before;
  channelStatsID?: null;
  hasDRM?: boolean;
  idLicencia?: null;
  requireLogged?: boolean;
  type?: ContentTypeEnum;
  ageRangeUid?: RTVE['AgeRange']['AgeRangeUid'] | null;
  ageRange?: RTVE['AgeRange']['AgeRange'] | null;
  name?: string;
  description?: string;
  promoText?: string | null;
  promoDesc?: string | null;
  channel?: RTVE['Channel'];
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
  programType?: string | null;
  programTypeId?: number | null;
  isComplete?: boolean;
  noFragments?: boolean;
  generos?: RTVE['Genre'][] | null;
  seasons?: RTVE['Season'][] | null;
  numSeasons?: number;
  paidCountries?: PaidCountry[] | null;
  contentType: ContentTypeEnum;
  lastMultimedia?: LastMultimedia;
  antetitulo?: string;
  assetVod?: string | null;
  dias?: number[];
  metaTitle?: string | null;
  metaDescription?: string | null;
  keywords?: null;
  canonical?: null;
  vertical?: SubType;
  hasPfNews?: boolean;
}

interface Before {
  titulo: string;
  inicio: string;
  fin: string;
  duracion: number;
  sgce: string;
}
