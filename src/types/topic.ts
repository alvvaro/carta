export default interface RTVETopic {
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
  language: Language;
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
  mainTopic: MainTopic;
  topicsName: any[];
  breadCrumbRef: string;
  imageSEO: string;
  thumbnail: string;
  previews: Previews;
  expirationDate: null;
  dateOfEmission: string;
  publicationDateTimestamp: number;
  productionDate: null;
  contentType: TType;
  consumption: Consumption;
  type: TypeClass;
  subType: null;
  assetType: TType;
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
  sgce: null | string;
  dg: null;
  sip: null;
  commentOptions: null;
  cuePointsRef: string;
  configPlayerRef: string;
  transcriptionRef: string;
  temporadaId: null;
  temporadasRef: string;
  temporada: null;
  temporadaShortTitle: null;
  temporadaOrden: null;
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
  subtitleRef: null | string;
  aspectRatio: AspectRatio;
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
  country: Country;
  hasDRM: boolean;
  requireLogged: boolean;
}

enum AspectRatio {
  F16X9 = 'f16x9',
}

enum TType {
  Video = 'video',
}

enum Consumption {
  Ondemand = 'ondemand',
}

enum Country {
  Es = 'ES',
}

interface Genero {
  generoInf: GeneroInf;
  generoInfUid: GeneroInfUid;
  generoId: string;
}

enum GeneroInf {
  Humor = 'Humor',
}

enum GeneroInfUid {
  GenHumor = 'GEN_HUMOR',
}

enum Language {
  Es = 'es',
}

enum MainTopic {
  TelevisiónProgramasDeTVEEntretenimientoLaRevuelta = 'Televisión/Programas de TVE/Entretenimiento/La Revuelta',
}

interface Previews {
  horizontal: null | string;
  horizontal2: null;
  vertical: null | string;
  vertical2: null;
  square: null;
  square2: null;
}

interface ProgramInfo {
  id: string;
  title: Title;
  htmlUrl: string;
  channelPermalink: ChannelPermalink;
  ageRangeUid: AgeRangeUid;
  ageRange: AgeRange;
  programType: ProgramType;
  programTypeId: string;
  outOfEmission: boolean;
}

enum AgeRange {
  RecomendadoParaMayoresDe12Años = 'Recomendado para mayores de 12 años',
}

enum AgeRangeUid {
  IfRedad5 = 'IF_REDAD5',
}

enum ChannelPermalink {
  La1 = 'la1',
}

enum ProgramType {
  Entrevistas = 'Entrevistas',
}

enum Title {
  LaRevuelta = 'La Revuelta',
}

interface PubState {
  code: Code;
  description: Description;
}

enum Code {
  Enpub = 'ENPUB',
}

enum Description {
  EnPublicación = 'En publicación',
}

interface Quality {
  identifier: number;
  filePath: string;
  preset: Preset;
  filesize: number | null;
  type: TypeEnum;
  duration: number;
  bitRate: number;
  bitRateUnit: BitRateUnit;
  language: Language;
  previewPath: string;
  height: number;
  width: number;
}

enum BitRateUnit {
  Kbps = 'Kbps',
}

enum Preset {
  HDFull = 'HD_FULL',
  HDReady = 'HD_READY',
  High = 'HIGH',
  Hq = 'HQ',
}

enum TypeEnum {
  ApplicationMp4 = 'application/mp4',
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

interface TypeClass {
  id: number;
  name: Name;
}

enum Name {
  Fragmento = 'Fragmento',
}
