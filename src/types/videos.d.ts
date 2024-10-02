export default interface RTVEVideos {
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
  htmlUrl: string;
  htmlShortUrl: string;
  id: string;
  language: string;
  anteTitle: null;
  anteTitleUrl: null;
  longTitle: string;
  shortTitle: string;
  mainCategoryRef: string;
  popularity: string;
  popHistoric: string;
  numVisits: string;
  publicationDate: string;
  modificationDate: string;
  pubState: PubState;
  mainTopic: string;
  topicsName: any[];
  breadCrumbRef: string;
  imageSEO: string;
  thumbnail: string;
  previews: Previews;
  expirationDate: null;
  dateOfEmission: string;
  publicationDateTimestamp: number;
  productionDate: null;
  contentType: string;
  consumption: string;
  type: Type;
  subType: null;
  assetType: string;
  statistics: Statistics;
  alt: null;
  foot: null;
  shortDescription: string;
  description: string;
  otherTopicsRefs: string;
  qualities: Quality[];
  qualitiesRef: string;
  duration: number;
  programInfo: ProgramInfo;
  sgce: string;
  dg: null;
  sip: null;
  commentOptions: null;
  cuePointsRef: string;
  configPlayerRef: string;
  transcriptionRef: string;
  temporadaId: number;
  temporadasRef: string;
  temporada: string;
  temporadaShortTitle: string;
  temporadaOrden: number;
  programRef: string;
  relacionadosRef: string;
  relManualesRef: string;
  publicidadRef: null;
  comentariosRef: string;
  relatedByLangRef: string;
  sign: Sign;
  estadisticasRef: string;
  ageRangeUid: null;
  ageRange: null;
  contentInitDate: null;
  contentEndDate: null;
  disabledAlacarta: boolean;
  notDownloadable: boolean;
  noRegistrationRequired: boolean;
  promoTitle: null;
  promoDesc: null;
  episode: number;
  subtitleRef: string;
  aspectRatio: string;
  title: string;
  idWiki: null;
  idImdb: null;
  director: null;
  producedBy: null;
  showMan: null;
  casting: null;
  generos: Genero[];
  technicalTeam: null;
  audioDescription: null;
  audioOriginal: null;
  allowedInCountry: boolean;
  paidContent: boolean;
  geolocalizado: boolean;
  paidCountries: null;
  escort: null;
  hasCuePoints: boolean;
  country: string;
  hasDRM: boolean;
  requireLogged: boolean;
}

interface Genero {
  generoInf: string;
  generoInfUid: string;
  generoId: string;
  subGeneroInf: string;
  subGeneroInfUid: string;
  subGeneroId: string;
}

interface Previews {
  horizontal: string;
  horizontal2: null;
  vertical: string;
  vertical2: null;
  square: null;
  square2: null;
}

interface ProgramInfo {
  id: string;
  title: string;
  htmlUrl: string;
  channelPermalink: string;
  ageRangeUid: string;
  ageRange: string;
  programType: string;
  programTypeId: string;
  outOfEmission: boolean;
}

interface PubState {
  code: string;
  description: string;
}

interface Quality {
  identifier: number;
  filePath: string;
  preset: string;
  filesize: number;
  type: string;
  duration: number;
  bitRate: number;
  bitRateUnit: string;
  language: string;
  previewPath: string;
  height: number;
  width: number;
}

interface Sign {
  ctvId: null;
  name: null;
  firma: null;
  photo: null;
  twitter: null;
  facebook: null;
  otras: null;
  publicationDate: null;
  numPublications: null;
  instagram: null;
}

interface Statistics {
  numComentarios: number;
  numCompartidas: number;
}

interface Type {
  id: number;
  name: string;
}
