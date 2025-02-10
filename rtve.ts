export interface APIVideos7043605_Temporadas {
  page: APIAgrProgramas2210_ProgramasPage;
}

export interface APIAgrProgramas2210_ProgramasPage {
  items: PurpleItem[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface PurpleItem {
  uri: string;
  htmlUrl: string;
  htmlShortUrl: string;
  id: string;
  ctvId: number | null;
  oldCtvId: null;
  uid: string;
  name: string;
  permalink: string;
  language: Lang;
  longTitle: string;
  shortTitle: string;
  description: string;
  audioDescription: boolean;
  longDescription: string;
  contact: null;
  emission: null | string;
  publicationDate: string;
  expirationDate: null;
  pubState: PubState;
  orden: number;
  imageSEO: string;
  logo: string;
  logo2: string;
  thumbnail: string;
  imgBackground: string;
  imgBackground2: string;
  imgPoster: string;
  imgPoster2: string;
  imgPortada: string;
  imgPortada2: string;
  imgCol: string;
  imgCol2: string;
  imgCol3: string;
  imgBanner: string;
  imgBanner2: string;
  imgPinta: string;
  imagePodcast: string;
  outOfEmission: boolean;
  channel: ItemChannel;
  fanBoxID: null;
  ageRangeUid: AgeRangeUid | null;
  ageRange: AgeRange | null;
  recommendAgesForChilds: null[];
  seccionesRef: string;
  temporadasRef: string;
  temporadaShortTitle: null;
  temporada: null;
  agrupadoresRef: string;
  videosRef: string;
  audiosRef: string;
  multimediasRef: string;
  relacionadosRef: string;
  otherChannelsRef: string;
  childrenInfoRef: string;
  filtro: null;
  webRtve: null | string;
  webOficial: string;
  promoText: string | null;
  promoDesc: null | string;
  relatedByLangRef: string;
  modificationDate: string;
  publicationDateTimestamp: number;
  contentType: 'programa';
  sgce: null | string;
  sgce2: null | string;
  kantar: null | string;
  generos: Genero002[];
  seasons: ItemSeasonClass[] | null;
  numSeasons: number;
  productionDate: null | string;
  rrss: Rrss | null;
  rrssApps: RrssApp[];
  mainTopic: string;
  mainTopicUid: string;
  title: string;
  disabledAlacarta: boolean;
  programType: ProgramType | null;
  programTypeId?: number | null;
  isComplete: boolean;
  inAZList: boolean;
  director: null | string;
  producedBy: null | string;
  showMan: null | string;
  casting: null | string;
  technicalTeam: null | string;
  idWiki: null | string;
  idImdb: string;
  showFragments: boolean;
  notDownloadable: boolean;
  paidCountries: null;
  escort: Escort;
  paidContent?: boolean;
  country?: 'ES';
  programTypeID?: number;
}

export type AgeRange =
  | 'Recomendado para todos los públicos'
  | 'Recomendado para mayores de 7 años'
  | 'Recomendado para mayores de 16 años'
  | 'Recomendado para mayores de 18 años'
  | 'Recomendado para mayores de 12 años'
  | 'Recomendado para mayores de 13 años'
  | 'Especialmente recomendado para la infancia';

export type AgeRangeUid =
  | 'IF_REDAD0'
  | 'IF_REDAD2'
  | 'IF_REDAD6'
  | 'IF_REDAD4'
  | 'IF_REDAD5'
  | 'IF_REDAD3'
  | 'IF_REDAD1';

export interface ItemChannel {
  uri: string;
  htmlUrl: string;
  htmlShortUrl: HTMLShortURL;
  id: string;
  medioRef: string;
  uid: Uid;
  title: AnteTitleEnum;
  permalink: Permalink;
}

export type HTMLShortURL =
  | '/alacarta/undefined/rtve-play-television/'
  | '/alacarta/tve/la2/'
  | '/alacarta/undefined/archivo-rtve/'
  | '/alacarta/tve/la1/'
  | '/alacarta/undefined/playz/'
  | '/alacarta/tve/24-horas/'
  | '/alacarta/rne/radio-3-extra/'
  | '/alacarta/undefined/rne-audio/'
  | '/alacarta/rne/radio-nacional/'
  | '/alacarta/rne/radio-5/'
  | '/alacarta/rne/radio-exterior/'
  | '/alacarta/rne/radio-4/'
  | '/alacarta/tve/la-2-cataluna/'
  | '/alacarta/rne/radio-clasica/'
  | '/alacarta/rne/radio-3/';

export type Permalink =
  | 'rtve-play-television'
  | 'la2'
  | 'archivo-rtve'
  | 'la1'
  | 'playz'
  | '24-horas'
  | 'radio-3-extra'
  | 'rne-audio'
  | 'radio-nacional'
  | 'radio-5'
  | 'radio-exterior'
  | 'radio-4'
  | 'la-2-cataluna'
  | 'radio-clasica'
  | 'radio-3';

export type AnteTitleEnum =
  | 'RTVE Play Television'
  | 'La 2'
  | 'Archivo RTVE'
  | 'La 1'
  | 'PLAYZ'
  | 'Canal 24H'
  | 'Radio 3 Extra'
  | 'RNE Audio'
  | 'Radio Nacional'
  | 'Radio 5'
  | 'Radio Exterior'
  | 'Ràdio 4'
  | 'La 2 Cataluña'
  | 'Radio Clásica'
  | 'Radio 3'
  | 'Teledeporte'
  | 'Play Video'
  | 'Clan TVE';

export type Uid =
  | 'CAD_PLAY'
  | 'CTV_LA2'
  | 'CAD_ARCHIV'
  | 'CTV_LA1'
  | 'CAD_PLAYZ'
  | 'CTV_C24H'
  | 'CRN_R3EXTR'
  | 'CAD_PLAYR'
  | 'CRN_RADIO1'
  | 'CRN_RADIO5'
  | 'CRN_RADIOE'
  | 'CRN_RADIO4'
  | 'CTV_LA2C'
  | 'CRN_RADIOC'
  | 'CRN_RADIO3';

export interface Escort {
  intention: Intention | null;
  format: null | string;
  content: null | string;
}

export type Intention =
  | 'Intención / Entretenimiento / Mero Entretenimiento'
  | 'Intención / Enriquecer / Enriquecimiento General'
  | 'Intención / Informar / Infoentretenimiento'
  | 'Intención / Informar / Información General'
  | 'Intención / Entretenimiento'
  | 'Intención / Enriquecer'
  | 'Intención / Enriquecer / Educación'
  | 'Intención / Entretenimiento / Entretenimiento Informativo'
  | 'Intención / Informar / Consejo'
  | 'Intención / Enriquecer / Enriquecimiento Inspirador'
  | 'Intención / Informar';

export interface Genero002 {
  generoInf?: GeneroInf;
  generoInfUid?: GeneroInfUid;
  generoId: string;
}

export type GeneroInf =
  | 'Cocina'
  | 'Viajes'
  | 'Playz joven'
  | 'Humor'
  | 'Policíaca y suspense'
  | 'Moda'
  | 'Igualdad'
  | 'Archivo TVE'
  | 'Servicio Público'
  | 'Cultura'
  | 'Información y actualidad'
  | 'Biografías'
  | 'Cataluña'
  | 'Deportes'
  | 'Infantil'
  | 'Música'
  | 'Historia'
  | 'Comedia'
  | 'Drama'
  | 'Ciencia y futuro'
  | 'Series'
  | 'Romántica'
  | 'Acción y aventuras'
  | 'Tecnología'
  | 'Arte'
  | 'Rugby'
  | 'Ciclismo'
  | 'Deportes de invierno'
  | 'Balonmano'
  | 'Fútbol'
  | 'Tenis'
  | 'Baloncesto'
  | 'Atletismo'
  | 'Natación'
  | 'Hípica'
  | 'Motor'
  | 'Vela'
  | 'Olimpismo'
  | 'Gimnasia'
  | 'Bádminton'
  | 'Artes marciales'
  | 'Voleibol'
  | 'Terror'
  | 'TV Movies'
  | 'Western'
  | 'Literatura'
  | 'Clásica'
  | 'Educación'
  | 'Moda, famosos y tendencias'
  | 'Masterchef'
  | 'Naturaleza y Medio ambiente'
  | 'Eurovisión'
  | 'Hip hop/Funk'
  | 'Cine'
  | 'Series Literarias'
  | 'Documentales'
  | 'Series Históricas'
  | 'Arquitectura'
  | 'Danza'
  | 'Fotografía'
  | 'Sobremesa'
  | 'Músicas del mundo'
  | 'Rock/Pop'
  | 'Electrónica/Experimental'
  | 'Jazz/Blues'
  | 'Religiosos';

export type GeneroInfUid =
  | 'GEN_COCIN'
  | 'GEN_VIAJE'
  | 'GE_PLAYZ'
  | 'GEN_HUMOR'
  | 'GE_POYDSUS'
  | 'GE_MOFAT'
  | 'GEN_IGUAL'
  | 'GE_ARTVECC'
  | 'GEN_SERPU'
  | 'GEN_CULTU'
  | 'GE_INFOR'
  | 'GEN_BIOGR'
  | 'GEN_CATAL'
  | 'GE_DEPOR'
  | 'GE_INFAN'
  | 'GEN_MUSIC'
  | 'GEN_HISTO'
  | 'GE_COMED'
  | 'GE_DRAMA'
  | 'GE_CIENFU'
  | 'GE_SERIES'
  | 'GEN_ROMAN'
  | 'GE_ACYAVET'
  | 'GEN_TECNO'
  | 'GEN_ARTEC'
  | 'GEN_RUGBY'
  | 'GEN_CICLI'
  | 'GEN_INVIER'
  | 'GEN_BALOM'
  | 'GEN_FUTBOL'
  | 'GEN_TENIS'
  | 'GEN_BALON'
  | 'GEN_ATLET'
  | 'GEN_NATAC'
  | 'GEN_HIPIC'
  | 'GEN_MOTOR'
  | 'GEN_VELAC'
  | 'GEN_OLIPM'
  | 'GEN_GIMNA'
  | 'GEN_BADMI'
  | 'GEN_ARTMC'
  | 'GEN_VOLEI'
  | 'GE_TERROR'
  | 'GE_TVMOVI'
  | 'GEN_WESTE'
  | 'GEN_LITER'
  | 'GEN_CLASIC'
  | 'GEN_EDUCA'
  | 'GEN_MCHEF'
  | 'GEN_MEDAM'
  | 'GEN_EUROV'
  | 'GEN_HIPHOP'
  | 'GEN_CINEC'
  | 'GE_SERLIT'
  | 'GEN_DOCUM'
  | 'GE_SERHIS'
  | 'GEN_ARQUI'
  | 'GEN_DANZA'
  | 'GEN_FOTOG'
  | 'GE_SOMESA'
  | 'GEN_MUMUD'
  | 'GEN_ROCKP'
  | 'GEN_ELEEX'
  | 'GEN_JAZZB'
  | 'GEN_RELIG';

export type Lang = 'es' | 'ca' | 'en' | 'gl' | 'eu';

export type ProgramType =
  | 'Magacín semanal'
  | 'Serie Documental'
  | 'Entretenimiento'
  | 'Informativos Noticias'
  | 'Magacines'
  | 'Entrevistas'
  | 'Reportajes Factual'
  | 'Especial Evento'
  | 'Documental Original'
  | 'Infantiles'
  | 'Magacines diarios'
  | 'Late Night'
  | 'Documental'
  | 'Series de Archivo'
  | 'Talent'
  | 'Concursos'
  | 'Informativo diario'
  | 'Conciertos'
  | 'Series Diarias'
  | 'Series'
  | 'Series Prime Time'
  | 'Series Internacionales'
  | 'Series Ficción Originales'
  | 'Recetas'
  | 'Contenedor Películas';

export interface PubState {
  code: Code;
  description: Description;
}

export type Code = 'ENPUB' | 'OP_CPERMIT';

export type Description = 'En publicación' | 'Permitir';

export type Rrss =
  | 'T:telediario_tve#F:RTVENoticias#I:rtvenoticias'
  | 'T:agrosfera_tve#F:agrosfera_tve'
  | 'T:InformeSemanal#F:InformeSemanal#I:Informesemanal'
  | 'T:Lanoche_24h'
  | 'F:eltiempoentve';

export interface RrssApp {
  Twitter: string;
  Facebook: null | string;
  Instagram: null | string;
  Youtube: null;
}

export interface ItemSeasonClass {
  shorttitle: string;
  longTitle: string;
  id: number;
  orden: number;
  numEpisodes: number;
}

export interface APIProgramas178476_Relacionados {
  page: APIAgrProgramas2270_ProgramasPage;
}

export interface APIAgrProgramas2270_ProgramasPage {
  items: FluffyItem[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface FluffyItem {
  uri: string;
  htmlUrl: string;
  htmlShortUrl: string;
  id: string;
  ctvId: number | null;
  oldCtvId: null;
  uid: string;
  name: string;
  permalink: string;
  language: Lang;
  longTitle: string;
  shortTitle: string;
  description: string;
  audioDescription: boolean;
  longDescription: string;
  contact: null;
  emission: null | string;
  publicationDate: string;
  expirationDate: null;
  pubState: PubState;
  orden: number;
  imageSEO: string;
  logo: string;
  logo2: string;
  thumbnail: string;
  imgBackground: string;
  imgBackground2: string;
  imgPoster: string;
  imgPoster2: string;
  imgPortada: string;
  imgPortada2: string;
  imgCol: string;
  imgCol2: string;
  imgCol3: string;
  imgBanner: string;
  imgBanner2: string;
  imgPinta: string;
  imagePodcast: string;
  outOfEmission: boolean;
  channel: ItemChannel;
  fanBoxID: null;
  ageRangeUid: AgeRangeUid | null;
  ageRange: AgeRange | null;
  recommendAgesForChilds: null[];
  seccionesRef: string;
  temporadasRef: string;
  temporadaShortTitle: null;
  temporada: null;
  agrupadoresRef: string;
  videosRef: string;
  audiosRef: string;
  multimediasRef: string;
  relacionadosRef: string;
  otherChannelsRef: string;
  childrenInfoRef: string;
  filtro: null;
  webRtve: null | string;
  webOficial: string;
  promoText: string | null;
  promoDesc: null | string;
  relatedByLangRef: string;
  modificationDate: string;
  publicationDateTimestamp: number;
  contentType: 'programa';
  sgce: null | string;
  sgce2: null | string;
  kantar: null | string;
  generos: Genero001[];
  seasons: ItemSeasonClass[] | null;
  numSeasons: number;
  productionDate: null | string;
  rrss: null | string;
  rrssApps: RrssApp[];
  mainTopic: string;
  mainTopicUid: string;
  title: string;
  disabledAlacarta: boolean;
  programType: ProgramType | null;
  programTypeId: number | null;
  isComplete: boolean;
  inAZList: boolean;
  director: null | string;
  producedBy: null | string;
  showMan: null | string;
  casting: null | string;
  technicalTeam: null | string;
  idWiki: null | string;
  idImdb: string;
  showFragments: boolean;
  notDownloadable: boolean;
  paidCountries: null;
  escort: Escort;
  paidContent?: boolean;
  country?: 'ES';
}

export interface Genero001 {
  generoInf?: GeneroInf;
  generoInfUid?: GeneroInfUid;
  generoId?: string;
  subGeneroInf?: GeneroInf | null;
  subGeneroInfUid?: GeneroInfUid | null;
  subGeneroId?: null | string;
}

export interface APIProgramasInazlistTruePlayTrueSize2000OrderNameASCSmallTrue {
  id: string;
  text: string;
  titleText: string;
  outOfEmission: boolean;
  promoText: null | string;
  channelId: string;
  description: string;
  ageRangeUid: AgeRangeUid | null;
}

export interface APICollection1098 {
  page: APICollection1098_Page;
}

export interface APICollection1098_Page {
  items: TentacledItem[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface TentacledItem {
  itemDestacado: null;
  collectionItems: PurpleCollectionItem[];
  id: string;
  htmlUrl: string;
  name: string;
  title: string;
  urlTitle: string;
  anteTitle: string;
  description: string;
  generatePf: boolean;
  context: Context;
  template: Template;
  designCode: string;
  type: TipoEnum;
  modificationDate: Date;
  hidePublicationDate: boolean;
  previews: PurplePreviews;
  seo: SEO;
  number: number;
  size: number;
  totalItems: number;
  totalPages: number;
  numElements: number;
}

export interface PurpleCollectionItem {
  id: string;
  webRtve: WebRtve | null;
  htmlUrl: string;
  ageRangeUid: AgeRangeUid | null;
  ageRange: AgeRange | null;
  name: string;
  description: string;
  promoText: null | string;
  promoDesc: null | string;
  channel: CollectionItemChannel;
  imageSEO: string;
  imgBackground: string;
  imgBackground2: string;
  imgPoster: string;
  imgPoster2: string;
  imgPortada: string;
  imgPortada2: string;
  imgCol: string;
  imgCol2: string;
  imgCol3: string;
  imgBanner: string;
  imgBanner2: string;
  imgPinta: string;
  imagePodcast: string;
  mainTopic: string;
  programType: ProgramType | null;
  programTypeId: number | null;
  isComplete: boolean;
  noFragments: boolean;
  generos: Genero001[] | null;
  seasons: CollectionItemSeason[] | null;
  numSeasons: number;
  contentType: ContentTypeEnum;
  lastMultimedia?: PurpleLastMultimedia;
  paidCountries?: PaidCountry[] | null;
}

export interface CollectionItemChannel {
  title: AnteTitleEnum;
  id: number;
}

export type ContentTypeEnum = 'video' | 'program';

export interface PurpleLastMultimedia {
  id: string;
  subType: TypeClass;
  type: TypeClass;
  contentType: ContentTypeEnum;
  htmlUrl: string;
  title: string;
  description: null | string;
  shortDescription: null | string;
  alt: string;
  duration: number;
  ageRangeUid: AgeRangeUid | null;
  ageRange: AgeRange | null;
  publicationDate: string;
  expirationDate: null | string;
  modificationDate: string;
  dateOfEmission: null | string;
  episode: number | null;
  seasonTitle: null | string;
  temporadaId: number | null;
  promoText: null | string;
  promoDesc: null | string;
  previews: LastMultimediaPreviews;
  presetHD: boolean;
  requireLogged: boolean;
  hasDRM: boolean;
  paidCountries?: PaidCountry[] | null;
}

export type PaidCountry =
  | 'AL'
  | 'AM'
  | 'AR'
  | 'AT'
  | 'AZ'
  | 'BA'
  | 'BE'
  | 'BG'
  | 'BO'
  | 'BR'
  | 'BY'
  | 'BZ'
  | 'CA'
  | 'CH'
  | 'CL'
  | 'CO'
  | 'CR'
  | 'CU'
  | 'CY'
  | 'CZ'
  | 'DE'
  | 'DK'
  | 'DO'
  | 'EC'
  | 'EE'
  | 'FI'
  | 'FR'
  | 'GB'
  | 'GR'
  | 'GT'
  | 'HN'
  | 'HT'
  | 'HU'
  | 'IE'
  | 'IS'
  | 'KZ'
  | 'LI'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'MD'
  | 'ME'
  | 'MK'
  | 'MX'
  | 'NI'
  | 'NL'
  | 'NO'
  | 'PA'
  | 'PE'
  | 'PL'
  | 'PR'
  | 'PT'
  | 'PY'
  | 'RO'
  | 'RS'
  | 'RU'
  | 'SE'
  | 'SI'
  | 'SK'
  | 'SV'
  | 'TR'
  | 'UA'
  | 'US'
  | 'UY'
  | 'VE'
  | 'XK'
  | 'AU'
  | 'KR'
  | 'PH'
  | 'HK'
  | 'IN'
  | 'JP'
  | 'AD'
  | 'VA'
  | 'HR'
  | 'IT'
  | 'MT'
  | 'MC'
  | 'SM';

export interface LastMultimediaPreviews {
  horizontal: null | string;
  horizontal2: null | string;
  square: null | string;
  square2: null | string;
  vertical: null | string;
  vertical2: null | string;
}

export interface TypeClass {
  id: number | null;
  name: TypeName | null;
}

export type TypeName =
  | 'Película'
  | 'Documental'
  | 'Completo'
  | 'Fragmento'
  | 'Entrevista'
  | 'Tráiler'
  | 'Avance'
  | 'Reportaje'
  | 'Deportes';

export interface CollectionItemSeason {
  id: number;
  shorttitle: string;
  longTitle: string;
  numEpisodes: string;
  orden: number;
}

export type WebRtve =
  | '/television/informe-semanal/'
  | '/playz/playztrends/'
  | '/playz/heroes/'
  | '/playz/bajo-la-red/';

export type Context = 'Play' | 'Play Radio';

export interface PurplePreviews {
  horizontal: null | string;
  vertical: null | string;
  square: null | string;
}

export interface SEO {
  imageSEO: null | string;
  metaTitle: null | string;
  metaDescription: null | string;
  metaKeywords: null | string;
  technicalSeo: null | string;
  permalink: string;
}

export type Template = 'comp_nV' | 'comp_xV' | 'comp_xC' | 'comp_nC';

export type TipoEnum = 'collection' | 'portadaPlay';

export interface APICollection1139 {
  page: APICollection1139_Page;
}

export interface APICollection1139_Page {
  items: StickyItem[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface StickyItem {
  itemDestacado: null;
  collectionItems: FluffyCollectionItem[];
  id: string;
  htmlUrl: string;
  name: string;
  title: string;
  urlTitle: string;
  anteTitle: string;
  description: string;
  generatePf: boolean;
  context: Context;
  template: Template;
  designCode: string;
  type: TipoEnum;
  modificationDate: Date;
  hidePublicationDate: boolean;
  previews: PurplePreviews;
  seo: SEO;
  number: number;
  size: number;
  totalItems: number;
  totalPages: number;
  numElements: number;
}

export interface FluffyCollectionItem {
  id: string;
  webRtve: null | string;
  htmlUrl: string;
  ageRangeUid: AgeRangeUid | null;
  ageRange: AgeRange | null;
  name: string;
  description: string;
  promoText: null | string;
  promoDesc: null | string;
  channel: CollectionItemChannel;
  imageSEO: string;
  imgBackground: string;
  imgBackground2: string;
  imgPoster: string;
  imgPoster2: string;
  imgPortada: string;
  imgPortada2: string;
  imgCol: string;
  imgCol2: string;
  imgCol3: string;
  imgBanner: string;
  imgBanner2: string;
  imgPinta: string;
  imagePodcast: string;
  mainTopic: string;
  programType: ProgramType | null;
  programTypeId: number | null;
  isComplete: boolean;
  noFragments: boolean;
  generos: Genero001[] | null;
  seasons: CollectionItemSeason[] | null;
  numSeasons: number;
  paidCountries?: PaidCountry[] | null;
  contentType: ContentTypeEnum;
  lastMultimedia?: PurpleLastMultimedia;
}

export interface APICollection891 {
  page: APICollection1140_Page;
}

export interface APICollection1140_Page {
  items: IndigoItem[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface IndigoItem {
  itemDestacado: CollectionItem | null;
  collectionItems: CollectionItem[];
  id: string;
  htmlUrl: null | string;
  name: string;
  title: string;
  urlTitle: null | string;
  anteTitle: null | string;
  description: null | string;
  generatePf: boolean;
  context: Context | null;
  template: Template;
  designCode: string;
  type: TipoEnum;
  modificationDate: Date;
  hidePublicationDate: boolean;
  previews: PurplePreviews;
  seo: SEO;
  number: number;
  size: number;
  totalItems: number;
  totalPages: number;
  numElements: number;
}

export interface CollectionItem {
  id: string;
  webRtve: null | string;
  htmlUrl: string;
  ageRangeUid: AgeRangeUid | null;
  ageRange: AgeRange | null;
  name: string;
  description: string;
  promoText: null | string;
  promoDesc: null | string;
  channel: CollectionItemChannel;
  imageSEO: string;
  imgBackground: string;
  imgBackground2: string;
  imgPoster: string;
  imgPoster2: string;
  imgPortada: string;
  imgPortada2: string;
  imgCol: string;
  imgCol2: string;
  imgCol3: string;
  imgBanner: string;
  imgBanner2: string;
  imgPinta: string;
  imagePodcast: string;
  mainTopic: string;
  programType: ProgramType | null;
  programTypeId: number | null;
  isComplete: boolean;
  noFragments: boolean;
  generos: TentacledGenero[] | null;
  seasons: CollectionItemSeason[] | null;
  numSeasons: number;
  paidCountries: PaidCountry[] | null;
  contentType: ContentTypeEnum;
  lastMultimedia?: FluffyLastMultimedia;
}

export interface TentacledGenero {
  generoInfUid: GeneroInfUid;
  generoInf: GeneroInf;
}

export interface FluffyLastMultimedia {
  id: string;
  subType: TypeClass;
  type: TypeClass;
  contentType: ContentTypeEnum;
  htmlUrl: string;
  title: string;
  description: string;
  shortDescription: string;
  alt: string;
  duration: number;
  ageRangeUid: AgeRangeUid;
  ageRange: AgeRange;
  publicationDate: string;
  expirationDate: null;
  modificationDate: string;
  dateOfEmission: string;
  episode: number;
  seasonTitle: string;
  temporadaId: number;
  promoText: null;
  promoDesc: null;
  previews: LastMultimediaPreviews;
  presetHD: boolean;
  requireLogged: boolean;
  hasDRM: boolean;
}

export interface APICollection12 {
  page: APICollection12_Page;
}

export interface APICollection12_Page {
  items: IndecentItem[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface IndecentItem {
  itemDestacado: null;
  collectionItems: FluffyCollectionItem[];
  id: string;
  htmlUrl: null;
  name: string;
  title: string;
  urlTitle: null;
  anteTitle: string;
  description: string;
  generatePf: boolean;
  context: null;
  template: Template;
  designCode: string;
  type: TipoEnum;
  modificationDate: Date;
  hidePublicationDate: boolean;
  previews: PurplePreviews;
  seo: SEO;
  number: number;
  size: number;
  totalItems: number;
  totalPages: number;
  numElements: number;
}

export interface APICollection1533 {
  page: APICollection1533_Page;
}

export interface APICollection1533_Page {
  items: HilariousItem[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface HilariousItem {
  itemDestacado: null;
  collectionItems: TentacledCollectionItem[];
  id: string;
  htmlUrl: string;
  name: string;
  title: string;
  urlTitle: string;
  anteTitle: string;
  description: string;
  generatePf: boolean;
  context: Context;
  template: string;
  designCode: string;
  type: TipoEnum;
  modificationDate: Date;
  hidePublicationDate: boolean;
  previews: PurplePreviews;
  seo: SEO;
  number: number;
  size: number;
  totalItems: number;
  totalPages: number;
  numElements: number;
}

export interface TentacledCollectionItem {
  id?: string;
  webRtve?: null;
  htmlUrl?: string;
  ageRangeUid?: AgeRangeUid;
  ageRange?: AgeRange;
  name?: PurpleName;
  description?: string;
  promoText?: null;
  promoDesc?: null;
  channel?: CollectionItemChannel;
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
  mainTopic?: Collectionstring;
  programType?: ProgramType;
  programTypeId?: number;
  isComplete?: boolean;
  noFragments?: boolean;
  generos?: Genero001[];
  seasons?: null;
  numSeasons?: number;
  contentType: ContentTypeEnum;
  lastMultimedia: PurpleLastMultimedia;
}

export type Collectionstring =
  | 'Televisión/Programas de TVE/Cine/Somos cine'
  | 'Televisión/Programas de TVE/Cine/Cine de siempre'
  | 'Televisión/Programas de TVE/Cine/Cine internacional'
  | 'Televisión/Programas de TVE/Cine/Historia de nuestro cine';

export type PurpleName =
  | 'Somos cine'
  | 'Cine de siempre'
  | 'Cine internacional'
  | 'Historia de nuestro cine';

export interface APICollection848 {
  page: APICollection1546_Page;
}

export interface APICollection1546_Page {
  items: AmbitiousItem[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface AmbitiousItem {
  itemDestacado: null;
  collectionItems: StickyCollectionItem[];
  id: string;
  htmlUrl: string;
  name: string;
  title: string;
  urlTitle: string;
  anteTitle: null | string;
  description: null | string;
  generatePf: boolean;
  context: Context;
  template: Template;
  designCode: string;
  type: TipoEnum;
  modificationDate: Date;
  hidePublicationDate: boolean;
  previews: PurplePreviews;
  seo: SEO;
  number: number;
  size: number;
  totalItems: number;
  totalPages: number;
  numElements: number;
}

export interface StickyCollectionItem {
  id: string;
  webRtve: null;
  htmlUrl: string;
  ageRangeUid: AgeRangeUid;
  ageRange: AgeRange;
  name: PurpleName;
  description: string;
  promoText: null;
  promoDesc: null;
  channel: CollectionItemChannel;
  imageSEO: string;
  imgBackground: string;
  imgBackground2: string;
  imgPoster: string;
  imgPoster2: string;
  imgPortada: string;
  imgPortada2: string;
  imgCol: string;
  imgCol2: string;
  imgCol3: string;
  imgBanner: string;
  imgBanner2: string;
  imgPinta: string;
  imagePodcast: string;
  mainTopic: Collectionstring;
  programType: ProgramType;
  programTypeId: number;
  isComplete: boolean;
  noFragments: boolean;
  generos: Genero001[];
  seasons: null;
  numSeasons: number;
  contentType: ContentTypeEnum;
  lastMultimedia: PurpleLastMultimedia;
}

export interface APICollection17 {
  page: APICollection1098_Page;
}

export interface APICollection1890 {
  page: APICollection1890_Page;
}

export interface APICollection1890_Page {
  items: CunningItem[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface CunningItem {
  itemDestacado: null;
  collectionItems: FluffyCollectionItem[];
  id: string;
  htmlUrl: string;
  name: string;
  title: string;
  urlTitle: string;
  anteTitle: null;
  description: string;
  generatePf: boolean;
  context: Context;
  template: Template;
  designCode: string;
  type: TipoEnum;
  modificationDate: Date;
  hidePublicationDate: boolean;
  previews: PurplePreviews;
  seo: SEO;
  number: number;
  size: number;
  totalItems: number;
  totalPages: number;
  numElements: number;
}

export interface APICollection2198 {
  page: APICollection204_Page;
}

export interface APICollection204_Page {
  items: MagentaItem[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface MagentaItem {
  itemDestacado: null;
  collectionItems: StickyCollectionItem[];
  id: string;
  htmlUrl: string;
  name: string;
  title: string;
  urlTitle: string;
  anteTitle: string;
  description: string;
  generatePf: boolean;
  context: Context;
  template: Template;
  designCode: string;
  type: TipoEnum;
  modificationDate: Date;
  hidePublicationDate: boolean;
  previews: PurplePreviews;
  seo: SEO;
  number: number;
  size: number;
  totalItems: number;
  totalPages: number;
  numElements: number;
}

export interface APICollection2052 {
  page: APICollection2052_Page;
}

export interface APICollection2052_Page {
  items: FriskyItem[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface FriskyItem {
  itemDestacado: null;
  collectionItems: IndigoCollectionItem[];
  id: string;
  htmlUrl: string;
  name: string;
  title: string;
  urlTitle: string;
  anteTitle: string;
  description: string;
  generatePf: boolean;
  context: Context;
  template: Template;
  designCode: string;
  type: TipoEnum;
  modificationDate: Date;
  hidePublicationDate: boolean;
  previews: PurplePreviews;
  seo: SEO;
  number: number;
  size: number;
  totalItems: number;
  totalPages: number;
  numElements: number;
}

export interface IndigoCollectionItem {
  id: string;
  webRtve: null;
  htmlUrl: string;
  ageRangeUid: AgeRangeUid | null;
  ageRange: AgeRange | null;
  name: string;
  description: string;
  promoText: string | null;
  promoDesc: null | string;
  channel: CollectionItemChannel;
  imageSEO: string;
  imgBackground: string;
  imgBackground2: string;
  imgPoster: string;
  imgPoster2: string;
  imgPortada: string;
  imgPortada2: string;
  imgCol: string;
  imgCol2: string;
  imgCol3: string;
  imgBanner: string;
  imgBanner2: string;
  imgPinta: string;
  imagePodcast: string;
  mainTopic: string;
  programType: ProgramType;
  programTypeId: number;
  isComplete: boolean;
  noFragments: boolean;
  generos: Genero001[];
  seasons: null;
  numSeasons: number;
  contentType: ContentTypeEnum;
  lastMultimedia?: PurpleLastMultimedia;
  paidCountries?: null;
}

export interface APICollection262 {
  page: APICollection262_Page;
}

export interface APICollection262_Page {
  items: MischievousItem[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface MischievousItem {
  itemDestacado: null;
  collectionItems: ItemDestacado[];
  id: string;
  htmlUrl: string;
  name: string;
  title: string;
  urlTitle: string;
  anteTitle: AnteTitleEnum;
  description: string;
  generatePf: boolean;
  context: Context;
  template: Template;
  designCode: string;
  type: TipoEnum;
  modificationDate: Date;
  hidePublicationDate: boolean;
  previews: PurplePreviews;
  seo: SEO;
  number: number;
  size: number;
  totalItems: number;
  totalPages: number;
  numElements: number;
}

export interface ItemDestacado {
  id: string;
  webRtve: null | string;
  htmlUrl: string;
  ageRangeUid: AgeRangeUid | null;
  ageRange: AgeRange | null;
  name: string;
  description: string;
  promoText: null | string;
  promoDesc: null | string;
  channel: CollectionItemChannel;
  imageSEO: string;
  imgBackground: string;
  imgBackground2: string;
  imgPoster: string;
  imgPoster2: string;
  imgPortada: string;
  imgPortada2: string;
  imgCol: string;
  imgCol2: string;
  imgCol3: string;
  imgBanner: string;
  imgBanner2: string;
  imgPinta: string;
  imagePodcast: string;
  mainTopic: string;
  programType: ProgramType | null;
  programTypeId: number | null;
  isComplete: boolean;
  noFragments: boolean;
  generos: Genero001[];
  seasons: null;
  numSeasons: number;
  contentType: ItemDestacadoAssetType;
  lastMultimedia: TentacledLastMultimedia;
}

export type ItemDestacadoAssetType = 'audio' | 'program';

export interface TentacledLastMultimedia {
  id: string;
  subType: TypeClass;
  type: TypeClass;
  contentType: ItemDestacadoAssetType;
  htmlUrl: string;
  title: string;
  description: string;
  shortDescription: null | string;
  alt: string;
  duration: number;
  ageRangeUid: null;
  ageRange: null;
  publicationDate: string;
  expirationDate: null | string;
  modificationDate: string;
  dateOfEmission: string;
  episode: null;
  seasonTitle: null;
  temporadaId: null;
  promoText: null;
  promoDesc: null;
  previews: LastMultimediaPreviews;
  presetHD: boolean;
}

export interface APICollection270 {
  page: APICollection270_Page;
}

export interface APICollection270_Page {
  items: BraggadociousItem[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface BraggadociousItem {
  itemDestacado: null;
  collectionItems: IndecentCollectionItem[];
  id: string;
  htmlUrl: string;
  name: string;
  title: string;
  urlTitle: string;
  anteTitle: AnteTitleEnum;
  description: string;
  generatePf: boolean;
  context: Context;
  template: Template;
  designCode: string;
  type: TipoEnum;
  modificationDate: Date;
  hidePublicationDate: boolean;
  previews: PurplePreviews;
  seo: SEO;
  number: number;
  size: number;
  totalItems: number;
  totalPages: number;
  numElements: number;
}

export interface IndecentCollectionItem {
  id: string;
  webRtve: null | string;
  htmlUrl: string;
  ageRangeUid: null;
  ageRange: null;
  name: string;
  description: string;
  promoText: null;
  promoDesc: null | string;
  channel: CollectionItemChannel;
  imageSEO: string;
  imgBackground: string;
  imgBackground2: string;
  imgPoster: string;
  imgPoster2: string;
  imgPortada: string;
  imgPortada2: string;
  imgCol: string;
  imgCol2: string;
  imgCol3: string;
  imgBanner: string;
  imgBanner2: string;
  imgPinta: string;
  imagePodcast: string;
  mainTopic: string;
  programType: ProgramType | null;
  programTypeId: number | null;
  isComplete: boolean;
  noFragments: boolean;
  generos: Genero001[];
  seasons: null;
  numSeasons: number;
  paidCountries?: null;
  contentType: ItemDestacadoAssetType;
  lastMultimedia?: TentacledLastMultimedia;
}

export interface APICollection3329 {
  page: APICollection3329_Page;
}

export interface APICollection3329_Page {
  items: Item1[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item1 {
  itemDestacado: null;
  collectionItems: HilariousCollectionItem[];
  id: string;
  htmlUrl: null;
  name: string;
  title: string;
  urlTitle: null;
  anteTitle: null;
  description: null;
  generatePf: boolean;
  context: null;
  template: string;
  designCode: string;
  type: TipoEnum;
  modificationDate: Date;
  hidePublicationDate: boolean;
  previews: PurplePreviews;
  seo: SEO;
  number: number;
  size: number;
  totalItems: number;
  totalPages: number;
  numElements: number;
}

export interface HilariousCollectionItem {
  id: string;
  webRtve: null;
  htmlUrl: string;
  ageRangeUid: AgeRangeUid;
  ageRange: AgeRange;
  name: string;
  description: string;
  promoText: string;
  promoDesc: null;
  channel: CollectionItemChannel;
  imageSEO: string;
  imgBackground: string;
  imgBackground2: string;
  imgPoster: string;
  imgPoster2: string;
  imgPortada: string;
  imgPortada2: string;
  imgCol: string;
  imgCol2: string;
  imgCol3: string;
  imgBanner: string;
  imgBanner2: string;
  imgPinta: string;
  imagePodcast: string;
  mainTopic: string;
  programType: ProgramType;
  programTypeId: number;
  isComplete: boolean;
  noFragments: boolean;
  generos: Genero002[];
  seasons: null;
  numSeasons: number;
  contentType: ContentTypeEnum;
  lastMultimedia: PurpleLastMultimedia;
}

export interface APICollection3449 {
  page: APICollection3449_Page;
}

export interface APICollection3449_Page {
  items: Item2[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item2 {
  itemDestacado: null;
  collectionItems: AmbitiousCollectionItem[];
  id: string;
  htmlUrl: null;
  name: string;
  title: string;
  urlTitle: null;
  anteTitle: null;
  description: null;
  generatePf: boolean;
  context: null;
  template: string;
  designCode: string;
  type: TipoEnum;
  modificationDate: Date;
  hidePublicationDate: boolean;
  previews: PurplePreviews;
  seo: SEO;
  number: number;
  size: number;
  totalItems: number;
  totalPages: number;
  numElements: number;
}

export interface AmbitiousCollectionItem {
  id: string;
  webRtve: null;
  htmlUrl: string;
  ageRangeUid: AgeRangeUid;
  ageRange: AgeRange;
  name: string;
  description: string;
  promoText: null;
  promoDesc: null;
  channel: CollectionItemChannel;
  imageSEO: string;
  imgBackground: string;
  imgBackground2: string;
  imgPoster: string;
  imgPoster2: string;
  imgPortada: string;
  imgPortada2: string;
  imgCol: string;
  imgCol2: string;
  imgCol3: string;
  imgBanner: string;
  imgBanner2: string;
  imgPinta: string;
  imagePodcast: string;
  mainTopic: string;
  programType: ProgramType;
  programTypeId: number;
  isComplete: boolean;
  noFragments: boolean;
  generos: Genero002[];
  seasons: null;
  numSeasons: number;
  contentType: ContentTypeEnum;
  lastMultimedia: PurpleLastMultimedia;
}

export interface APICollection3475 {
  page: APICollection3475_Page;
}

export interface APICollection3475_Page {
  items: Item3[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item3 {
  itemDestacado: null;
  collectionItems: CunningCollectionItem[];
  id: string;
  htmlUrl: string;
  name: string;
  title: string;
  urlTitle: string;
  anteTitle: null;
  description: string;
  generatePf: boolean;
  context: Context;
  template: Template;
  designCode: string;
  type: TipoEnum;
  modificationDate: Date;
  hidePublicationDate: boolean;
  previews: PurplePreviews;
  seo: SEO;
  number: number;
  size: number;
  totalItems: number;
  totalPages: number;
  numElements: number;
}

export interface CunningCollectionItem {
  id: string;
  webRtve: null;
  htmlUrl: string;
  ageRangeUid: AgeRangeUid;
  ageRange: AgeRange;
  name: string;
  description: string;
  promoText: null;
  promoDesc: null;
  channel: CollectionItemChannel;
  imageSEO: string;
  imgBackground: string;
  imgBackground2: string;
  imgPoster: string;
  imgPoster2: string;
  imgPortada: string;
  imgPortada2: string;
  imgCol: string;
  imgCol2: string;
  imgCol3: string;
  imgBanner: string;
  imgBanner2: string;
  imgPinta: string;
  imagePodcast: string;
  mainTopic: string;
  programType: ProgramType;
  programTypeId: number;
  isComplete: boolean;
  noFragments: boolean;
  generos: Genero001[];
  seasons: null;
  numSeasons: number;
  contentType: ContentTypeEnum;
  lastMultimedia: PurpleLastMultimedia;
}

export interface APICollection3490 {
  page: APICollection3490_Page;
}

export interface APICollection3490_Page {
  items: Item1[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface APICollection3525 {
  page: APICollection3525_Page;
}

export interface APICollection3525_Page {
  items: Item4[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item4 {
  itemDestacado: null;
  collectionItems: MagentaCollectionItem[];
  id: string;
  htmlUrl: string;
  name: string;
  title: string;
  urlTitle: string;
  anteTitle: null;
  description: null;
  generatePf: boolean;
  context: Context;
  template: string;
  designCode: string;
  type: TipoEnum;
  modificationDate: Date;
  hidePublicationDate: boolean;
  previews: PurplePreviews;
  seo: SEO;
  number: number;
  size: number;
  totalItems: number;
  totalPages: number;
  numElements: number;
}

export interface MagentaCollectionItem {
  id?: string;
  webRtve?: null | string;
  htmlUrl?: string;
  ageRangeUid?: AgeRangeUid;
  ageRange?: AgeRange;
  name?: string;
  description?: string;
  promoText?: null | string;
  promoDesc?: null;
  channel?: CollectionItemChannel;
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
  programType?: ProgramType;
  programTypeId?: number;
  isComplete?: boolean;
  noFragments?: boolean;
  generos?: Genero001[] | null;
  seasons?: null;
  numSeasons?: number;
  contentType: ContentTypeEnum;
  lastMultimedia: PurpleLastMultimedia;
}

export interface APICollection3530 {
  page: APICollection3530_Page;
}

export interface APICollection3530_Page {
  items: Item5[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item5 {
  itemDestacado: null;
  collectionItems: FriskyCollectionItem[];
  id: string;
  htmlUrl: null;
  name: string;
  title: string;
  urlTitle: null;
  anteTitle: null;
  description: null;
  generatePf: boolean;
  context: null;
  template: string;
  designCode: string;
  type: TipoEnum;
  modificationDate: Date;
  hidePublicationDate: boolean;
  previews: PurplePreviews;
  seo: SEO;
  number: number;
  size: number;
  totalItems: number;
  totalPages: number;
  numElements: number;
}

export interface FriskyCollectionItem {
  id: string;
  webRtve: null;
  htmlUrl: string;
  ageRangeUid: AgeRangeUid;
  ageRange: AgeRange;
  name: string;
  description: string;
  promoText: string;
  promoDesc: null;
  channel: CollectionItemChannel;
  imageSEO: string;
  imgBackground: string;
  imgBackground2: string;
  imgPoster: string;
  imgPoster2: string;
  imgPortada: string;
  imgPortada2: string;
  imgCol: string;
  imgCol2: string;
  imgCol3: string;
  imgBanner: string;
  imgBanner2: string;
  imgPinta: string;
  imagePodcast: string;
  mainTopic: string;
  programType: ProgramType;
  programTypeId: number;
  isComplete: boolean;
  noFragments: boolean;
  generos: Genero001[];
  seasons: null;
  numSeasons: number;
  contentType: ContentTypeEnum;
  lastMultimedia: PurpleLastMultimedia;
}

export interface APICollection3535 {
  page: APICollection3535_Page;
}

export interface APICollection3535_Page {
  items: Item6[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item6 {
  itemDestacado: null;
  collectionItems: PurpleCollectionItem[];
  id: string;
  htmlUrl: string;
  name: string;
  title: string;
  urlTitle: string;
  anteTitle: null;
  description: null;
  generatePf: boolean;
  context: Context;
  template: Template;
  designCode: string;
  type: TipoEnum;
  modificationDate: Date;
  hidePublicationDate: boolean;
  previews: PurplePreviews;
  seo: SEO;
  number: number;
  size: number;
  totalItems: number;
  totalPages: number;
  numElements: number;
}

export interface APICollection3539 {
  page: APICollection3539_Page;
}

export interface APICollection3539_Page {
  items: Item7[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item7 {
  itemDestacado: null;
  collectionItems: MagentaCollectionItem[];
  id: string;
  htmlUrl: string;
  name: string;
  title: TemporadaEnum;
  urlTitle: string;
  anteTitle: string;
  description: string;
  generatePf: boolean;
  context: Context;
  template: string;
  designCode: string;
  type: TipoEnum;
  modificationDate: Date;
  hidePublicationDate: boolean;
  previews: PurplePreviews;
  seo: SEO;
  number: number;
  size: number;
  totalItems: number;
  totalPages: number;
  numElements: number;
}

export type TemporadaEnum =
  | 'Premios Goya 2025'
  | 'Benidorm Fest 2025'
  | 'Europa 2025'
  | 'Europa 2024';

export interface APICollection3541 {
  page: APICollection1890_Page;
}

export interface APICollection469 {
  page: APICollection1139_Page;
}

export interface APICollection478 {
  page: APICollection478_Page;
}

export interface APICollection478_Page {
  items: Item8[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item8 {
  itemDestacado: null;
  collectionItems: MischievousCollectionItem[];
  id: string;
  htmlUrl: string;
  name: string;
  title: string;
  urlTitle: string;
  anteTitle: AnteTitleEnum;
  description: string;
  generatePf: boolean;
  context: Context;
  template: string;
  designCode: string;
  type: TipoEnum;
  modificationDate: Date;
  hidePublicationDate: boolean;
  previews: PurplePreviews;
  seo: SEO;
  number: number;
  size: number;
  totalItems: number;
  totalPages: number;
  numElements: number;
}

export interface MischievousCollectionItem {
  id: string;
  webRtve: null | string;
  htmlUrl: string;
  ageRangeUid: null;
  ageRange: null;
  name: string;
  description: string;
  promoText: null;
  promoDesc: null | string;
  channel: CollectionItemChannel;
  imageSEO: string;
  imgBackground: string;
  imgBackground2: string;
  imgPoster: string;
  imgPoster2: string;
  imgPortada: string;
  imgPortada2: string;
  imgCol: string;
  imgCol2: string;
  imgCol3: string;
  imgBanner: string;
  imgBanner2: string;
  imgPinta: string;
  imagePodcast: string;
  mainTopic: string;
  programType: ProgramType | null;
  programTypeId: number | null;
  isComplete: boolean;
  noFragments: boolean;
  generos: Genero001[] | null;
  seasons: null;
  numSeasons: number;
  contentType: ContentTypeEnum;
  lastMultimedia: PurpleLastMultimedia;
}

export interface APICollection523 {
  page: APICollection1139_Page;
}

export interface APICollection525 {
  page: APICollection1139_Page;
}

export interface APICollection7 {
  page: APICollection1098_Page;
}

export interface APICollection703 {
  page: APICollection12_Page;
}

export interface APICollection732 {
  page: APICollection732_Page;
}

export interface APICollection732_Page {
  items: Item9[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item9 {
  itemDestacado: null;
  collectionItems: BraggadociousCollectionItem[];
  id: string;
  htmlUrl: string;
  name: string;
  title: string;
  urlTitle: string;
  anteTitle: null;
  description: string;
  generatePf: boolean;
  context: Context;
  template: Template;
  designCode: string;
  type: TipoEnum;
  modificationDate: Date;
  hidePublicationDate: boolean;
  previews: PurplePreviews;
  seo: SEO;
  number: number;
  size: number;
  totalItems: number;
  totalPages: number;
  numElements: number;
}

export interface BraggadociousCollectionItem {
  id: string;
  webRtve: null;
  htmlUrl: string;
  ageRangeUid: AgeRangeUid;
  ageRange: AgeRange;
  name: string;
  description: string;
  promoText: null | string;
  promoDesc: null;
  channel: CollectionItemChannel;
  imageSEO: string;
  imgBackground: string;
  imgBackground2: string;
  imgPoster: string;
  imgPoster2: string;
  imgPortada: string;
  imgPortada2: string;
  imgCol: string;
  imgCol2: string;
  imgCol3: string;
  imgBanner: string;
  imgBanner2: string;
  imgPinta: string;
  imagePodcast: string;
  mainTopic: string;
  programType: ProgramType;
  programTypeId: number;
  isComplete: boolean;
  noFragments: boolean;
  generos: Genero001[];
  seasons: CollectionItemSeason[] | null;
  numSeasons: number;
  contentType: ContentTypeEnum;
  lastMultimedia?: PurpleLastMultimedia;
  paidCountries?: PaidCountry[] | null;
}

export interface APICollection761 {
  page: APICollection761_Page;
}

export interface APICollection761_Page {
  items: Item10[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item10 {
  itemDestacado: null;
  collectionItems: CollectionItem1[];
  id: string;
  htmlUrl: string;
  name: string;
  title: string;
  urlTitle: string;
  anteTitle: string;
  description: string;
  generatePf: boolean;
  context: Context;
  template: Template;
  designCode: string;
  type: TipoEnum;
  modificationDate: Date;
  hidePublicationDate: boolean;
  previews: PurplePreviews;
  seo: SEO;
  number: number;
  size: number;
  totalItems: number;
  totalPages: number;
  numElements: number;
}

export interface CollectionItem1 {
  id: string;
  webRtve: null;
  htmlUrl: string;
  ageRangeUid: AgeRangeUid | null;
  ageRange: AgeRange | null;
  name: string;
  description: string;
  promoText: null | string;
  promoDesc: null | string;
  channel: CollectionItemChannel;
  imageSEO: string;
  imgBackground: string;
  imgBackground2: string;
  imgPoster: string;
  imgPoster2: string;
  imgPortada: string;
  imgPortada2: string;
  imgCol: string;
  imgCol2: string;
  imgCol3: string;
  imgBanner: string;
  imgBanner2: string;
  imgPinta: string;
  imagePodcast: string;
  mainTopic: string;
  programType: ProgramType | null;
  programTypeId: number | null;
  isComplete: boolean;
  noFragments: boolean;
  generos: Genero001[];
  seasons: CollectionItemSeason[] | null;
  numSeasons: number;
  paidCountries?: PaidCountry[] | null;
  contentType: ContentTypeEnum;
  lastMultimedia?: PurpleLastMultimedia;
}

export interface APICollection821 {
  page: APICollection821_Page;
}

export interface APICollection821_Page {
  items: Item11[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item11 {
  itemDestacado: null;
  collectionItems: PurpleCollectionItem[];
  id: string;
  htmlUrl: string;
  name: string;
  title: string;
  urlTitle: string;
  anteTitle: null;
  description: string;
  generatePf: boolean;
  context: Context;
  template: Template;
  designCode: string;
  type: TipoEnum;
  modificationDate: Date;
  hidePublicationDate: boolean;
  previews: PurplePreviews;
  seo: SEO;
  number: number;
  size: number;
  totalItems: number;
  totalPages: number;
  numElements: number;
}

export interface APICollection912 {
  page: APICollection262_Page;
}

export interface APICollection931 {
  page: APICollection931_Page;
}

export interface APICollection931_Page {
  items: Item12[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item12 {
  itemDestacado: ItemDestacado;
  collectionItems: ItemDestacado[];
  id: string;
  htmlUrl: null;
  name: string;
  title: string;
  urlTitle: null;
  anteTitle: AnteTitleEnum;
  description: null;
  generatePf: boolean;
  context: null;
  template: Template;
  designCode: string;
  type: TipoEnum;
  modificationDate: Date;
  hidePublicationDate: boolean;
  previews: PurplePreviews;
  seo: SEO;
  number: number;
  size: number;
  totalItems: number;
  totalPages: number;
  numElements: number;
}

export interface APILivesPaginaPortada {
  page: APILivesAgrDirectos1_Page;
}

export interface APILivesAgrDirectos1_Page {
  items: Item13[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item13 {
  uri: string;
  id: string;
  title: string;
  htmlUrl: string;
  classColeccion: string;
  tipo: PurpleTipo;
  platform: number | null;
  metaTitle: null | string;
  metaDescription: null | string;
  metaKeywords: null;
  canonical: null;
  permalink: string;
  orden?: number;
}

export type PurpleTipo = 'general' | 'especial';

export interface APILivesBroadcasts37150 {
  page: APILivesAgrDirectos10187_DirectosPage;
}

export interface APILivesAgrDirectos10187_DirectosPage {
  items: Item14[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item14 {
  uri: string;
  id: string;
  htmlUrl: string;
  titulo?: string;
  inicio: null | string;
  live: boolean;
  porcentaje: number | null;
  tipo: FluffyTipo;
  contentType: 'directo';
  permalink: string;
  descripcion: string;
  logo: string;
  logo_desktop: string;
  imagen: string;
  thumb: string;
  thumb_square: string;
  thumb_vertical: string;
  thumbnailer: boolean;
  thumbPrio: boolean;
  idAsset: string;
  classDirecto: string;
  etiqueta: null | string;
  idPrograma: null;
  url: null;
  agrLiveDefault: AgrLiveDefault | null;
  duracion: number | null;
  sgce: null | string;
  idGolumi: string;
  canal: string;
  before: Before | null;
  now: Before | null;
  next: Before | null;
  channelStatsID: null;
  hasDRM: boolean;
  idLicencia: null;
  orden?: number;
  requireLogged: boolean;
  type: ContentTypeEnum;
}

export interface AgrLiveDefault {
  uri: string;
  id: string;
  titulo: Titulo;
  htmlUrl: string;
}

export type Titulo =
  | 'Canales temáticos'
  | 'Ahora en emisión'
  | 'RNE streamings'
  | 'Deportes';

export interface Before {
  titulo: string;
  inicio: string;
  fin: string;
  duracion: number;
  sgce: null | string;
}

export type FluffyTipo = 'broadcast' | 'peticion' | 'periodic-peticion';

export interface APILivesBroadcasts558 {
  page: APILivesAgrDirectos1_DirectosPage;
}

export interface APILivesAgrDirectos1_DirectosPage {
  items: Item15[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item15 {
  uri: string;
  id: string;
  htmlUrl: string;
  titulo?: string;
  inicio: null | string;
  live: boolean;
  porcentaje: number | null;
  tipo: FluffyTipo;
  contentType: 'directo';
  permalink: null | string;
  descripcion: null | string;
  logo: string;
  logo_desktop: string;
  imagen: string;
  thumb: string;
  thumb_square: string;
  thumb_vertical: string;
  thumbnailer?: boolean;
  thumbPrio?: boolean;
  idAsset: null | string;
  classDirecto: string;
  etiqueta: null;
  idPrograma: null | string;
  url: null;
  agrLiveDefault: AgrLiveDefault | null;
  duracion: number | null;
  sgce?: null | string;
  idGolumi?: string;
  canal?: string;
  before?: Before | null;
  now?: Before | null;
  next?: Before | null;
  channelStatsID?: null;
  hasDRM: boolean;
  idLicencia: null;
  orden?: number;
  requireLogged: boolean;
  type: ContentTypeEnum | null;
  antetitulo?: null | string;
  assetVod?: null;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: null;
  canonical?: null;
  vertical?: null;
  hasPfNews?: boolean;
  dias?: number[];
  status?: Status;
}

export interface Status {
  id: string;
  description: string;
}

export interface APILivesBroadcasts4 {
  page: APILivesBroadcasts1_Page;
}

export interface APILivesBroadcasts1_Page {
  items: Item16[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item16 {
  uri: string;
  id: string;
  htmlUrl: string;
  titulo: string;
  inicio: string;
  live: boolean;
  porcentaje: number;
  tipo: FluffyTipo;
  contentType: 'directo';
  permalink: string;
  descripcion: string;
  logo: string;
  logo_desktop: string;
  imagen: string;
  thumb: string;
  thumb_square: string;
  thumb_vertical: string;
  thumbnailer: boolean;
  thumbPrio: boolean;
  idAsset: string;
  classDirecto: string;
  etiqueta: null;
  idPrograma: null;
  url: null;
  agrLiveDefault: null;
  duracion: number;
  sgce: string;
  idGolumi: string;
  canal: string;
  before: Before;
  now: Before;
  next: Before;
  channelStatsID: null;
  hasDRM: boolean;
  idLicencia: null;
  requireLogged: boolean;
  type: ContentTypeEnum;
}

export interface APILivesPeticiones42183 {
  page: APILivesBroadcasts22088_Page;
}

export interface APILivesBroadcasts22088_Page {
  items: Item17[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item17 {
  uri: string;
  id: string;
  htmlUrl: string;
  titulo: string;
  inicio: string;
  live: boolean;
  porcentaje: number;
  tipo: FluffyTipo;
  contentType: 'directo';
  permalink: null | string;
  descripcion: null | string;
  logo: string;
  logo_desktop: string;
  imagen: string;
  thumb: string;
  thumb_square: string;
  thumb_vertical: string;
  thumbnailer?: boolean;
  thumbPrio?: boolean;
  idAsset: string;
  classDirecto: string;
  etiqueta: null | string;
  idPrograma: null | string;
  url: null;
  agrLiveDefault: AgrLiveDefault;
  duracion: number;
  sgce?: null;
  idGolumi?: string;
  canal?: string;
  before?: Before;
  now?: Before;
  next?: Before;
  channelStatsID?: null;
  hasDRM: boolean;
  idLicencia: null;
  requireLogged: boolean;
  type: ContentTypeEnum;
  antetitulo?: string;
  assetVod?: null;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: null;
  canonical?: null;
  vertical?: TypeClass | null;
  hasPfNews?: boolean;
}

export interface ProgramasAudios018 {
  page: ProgramasAudiosPage018;
}

export interface ProgramasAudiosPage018 {
  items: Item018[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item018 {
  uri: string;
  htmlUrl: string;
  htmlShortUrl: string;
  id: string;
  language: Lang;
  anteTitle: string;
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
  topicsName: string[];
  breadCrumbRef: string;
  imageSEO: string;
  thumbnail: null | string;
  previews: LastMultimediaPreviews;
  expirationDate: null;
  dateOfEmission: string;
  publicationDateTimestamp: number;
  productionDate: null;
  contentType: ItemDestacadoAssetType;
  consumption: Consumption002;
  type: TypeClass;
  assetType: ItemDestacadoAssetType;
  statistics: Statistics;
  alt: null | string;
  foot: null;
  shortDescription: string;
  description: string;
  otherTopicsRefs: string;
  qualities: Quality[];
  qualitiesRef: string;
  duration: number;
  programInfo: ProgramInfo;
  sgce: null;
  dg: null;
  sip: null;
  commentOptions: null;
  cuePointsRef: string;
  configPlayerRef: string;
  transcriptionRef: string;
  temporadasRef: string;
  temporada: null;
  temporadaShortTitle: null;
  programRef: string;
  relacionadosRef: string;
  relManualesRef: string;
  publicidadRef: null;
  comentariosRef: string;
  relatedByLangRef: string;
  sign: { [key: string]: string | null };
  estadisticasRef: string;
  ageRangeUid: null;
  ageRange: null;
  contentInitDate: null;
  contentEndDate: null;
  disabledAlacarta: boolean;
  noRegistrationRequired: boolean;
  promoTitle: null;
  promoDesc: null;
  title: string;
  generos: Genero002[];
}

export type Consumption002 = 'podcast' | 'ondemand';

export interface ProgramInfo {
  id: string;
  title: string;
  htmlUrl: string;
  channelPermalink: Permalink;
  ageRangeUid: AgeRangeUid | null;
  ageRange: AgeRange | null;
  programType: ProgramType | null;
  programTypeId: null | string;
  outOfEmission: boolean;
}

export interface Quality {
  bitRate: number;
  bitRateUnit: 'Kbps' | null;
  duration: number;
  filePath: string;
  filesize: number | null;
  identifier: number;
  language: Lang;
  numOfChannels?: number;
  preset: 'HIGH' | 'HD_FULL' | 'HD_READY' | 'HQ' | 'MED' | 'Original';
  type: 'audio/mpeg' | 'application/mp4';
  previewPath?: string;
  height?: number;
  width?: number;
}

export interface Statistics {
  numComentarios: number;
  numCompartidas: number;
}

export interface Programas019 {
  page: ProgramasPage019;
}

export interface ProgramasPage019 {
  items: Item019[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item019 {
  uri: string;
  htmlUrl: string;
  htmlShortUrl: string;
  id: string;
  ctvId: number | null;
  oldCtvId: null;
  uid: string;
  name: string;
  permalink: string;
  language: Lang;
  longTitle: string;
  shortTitle: string;
  description: string;
  audioDescription: boolean;
  longDescription: string;
  contact: null;
  emission: null | string;
  publicationDate: string;
  expirationDate: null;
  pubState: PubState;
  orden: number;
  imageSEO: string;
  logo: string;
  logo2: string;
  thumbnail: string;
  imgBackground: string;
  imgBackground2: string;
  imgPoster: string;
  imgPoster2: string;
  imgPortada: string;
  imgPortada2: string;
  imgCol: string;
  imgCol2: string;
  imgCol3: string;
  imgBanner: string;
  imgBanner2: string;
  imgPinta: string;
  imagePodcast: string;
  outOfEmission: boolean;
  channel: ItemChannel;
  fanBoxID: null;
  ageRangeUid: AgeRangeUid | null;
  ageRange: AgeRange | null;
  recommendAgesForChilds: null[];
  seccionesRef: string;
  temporadasRef: string;
  temporadaShortTitle: null;
  temporada: null;
  agrupadoresRef: string;
  videosRef: string;
  audiosRef: string;
  multimediasRef: string;
  relacionadosRef: string;
  otherChannelsRef: string;
  childrenInfoRef: string;
  filtro: null;
  webRtve: null;
  webOficial: string;
  promoText: string | null;
  promoDesc: null | string;
  relatedByLangRef: string;
  modificationDate: string;
  publicationDateTimestamp: number;
  contentType: 'programa';
  sgce: string;
  sgce2: null;
  kantar: null | string;
  generos: Genero001[];
  seasons: null;
  numSeasons: number;
  productionDate: string | null;
  rrss: null | string;
  rrssApps: RrssApp[];
  mainTopic: string;
  mainTopicUid: string;
  title: string;
  disabledAlacarta: boolean;
  programType: ProgramType | null;
  programTypeId?: number | null;
  isComplete: boolean;
  inAZList: boolean;
  director: null | string;
  producedBy: null | string;
  showMan: null | string;
  casting: null | string;
  technicalTeam: null | string;
  idWiki: null | string;
  idImdb: string;
  showFragments: boolean;
  notDownloadable: boolean;
  paidCountries: null;
  escort: Escort;
  paidContent: boolean;
  country: 'ES';
  programTypeID?: number;
}

export interface ProgramasAudios020 {
  page: ProgramasAudiosPage020;
}

export interface ProgramasAudiosPage020 {
  items: Item020[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item020 {
  uri: string;
  htmlUrl: string;
  htmlShortUrl: string;
  id: string;
  language: Lang;
  anteTitle: string | null;
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
  mainTopicUid?: string;
  topicsName: string[];
  breadCrumbRef: string;
  imageSEO: string;
  thumbnail: string;
  previews: LastMultimediaPreviews;
  expirationDate: null | string;
  dateOfEmission: string;
  publicationDateTimestamp: number;
  productionDate: null | string;
  contentType: ItemDestacadoAssetType;
  consumption: Consumption002;
  type: TypeClass;
  assetType: ItemDestacadoAssetType;
  statistics: Statistics;
  alt: null | string;
  foot: null;
  shortDescription: null | string;
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
  temporadasRef: string;
  temporada: null;
  temporadaShortTitle: null;
  programRef: string;
  relacionadosRef: string;
  relManualesRef: string;
  publicidadRef: null;
  comentariosRef: string;
  relatedByLangRef: string;
  sign: { [key: string]: string | null };
  estadisticasRef: string;
  ageRangeUid: AgeRangeUid | null;
  ageRange: null | string;
  contentInitDate: null;
  contentEndDate: null;
  disabledAlacarta: boolean;
  noRegistrationRequired: boolean;
  promoTitle: null | string;
  promoDesc: null;
  title: string;
  generos: Genero001[];
}

export interface ProgramasMultimedias021 {
  page: ProgramasMultimediasPage021;
}

export interface ProgramasMultimediasPage021 {
  items: Item021[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item021 {
  uri: string;
  htmlUrl: string;
  htmlShortUrl: string;
  id: string;
  language: Lang;
  anteTitle: string | null;
  anteTitleUrl: null;
  longTitle: string;
  shortTitle: null | string;
  mainCategoryRef: string;
  popularity: string;
  popHistoric: string;
  numVisits: string;
  publicationDate: string;
  modificationDate: string;
  pubState: PubState;
  mainTopic: string;
  topicsName: string[];
  breadCrumbRef: string;
  imageSEO: string;
  thumbnail: null | string;
  previews: LastMultimediaPreviews;
  expirationDate: null;
  dateOfEmission: string;
  publicationDateTimestamp: number;
  productionDate: null;
  contentType: TType002;
  consumption: Consumption002;
  type: TypeClass;
  subType?: TypeClass | null;
  assetType: TType002;
  statistics: Statistics;
  alt: null | string;
  foot: null;
  shortDescription: null | string;
  description: null | string;
  otherTopicsRefs: string;
  qualities: Quality[];
  qualitiesRef: string;
  duration: number;
  programInfo: ProgramInfo;
  sgce: null | string;
  dg: null | string;
  sip: null;
  commentOptions: null;
  cuePointsRef: string;
  configPlayerRef: string;
  transcriptionRef: string;
  temporadaId?: null;
  temporadasRef: string;
  temporada: null;
  temporadaShortTitle: null;
  temporadaOrden?: null;
  programRef: string;
  relacionadosRef: string;
  relManualesRef: string;
  publicidadRef: null;
  comentariosRef: string;
  relatedByLangRef: string;
  sign: { [key: string]: string | null };
  estadisticasRef: string;
  ageRangeUid: null;
  ageRange: null;
  contentInitDate: null;
  contentEndDate: null;
  disabledAlacarta: boolean;
  notDownloadable?: boolean;
  noRegistrationRequired: boolean;
  promoTitle: null;
  promoDesc: null;
  episode?: number;
  subtitleRef?: null | string;
  aspectRatio?: 'f16x9';
  title: string;
  idWiki?: null;
  idImdb?: null;
  director?: string | null;
  producedBy?: null;
  showMan?: null;
  casting?: null;
  generos: Genero002[];
  technicalTeam?: null;
  audioDescription?: null;
  audioOriginal?: null | string;
  allowedInCountry?: boolean;
  paidContent?: boolean;
  geolocalizado?: boolean;
  paidCountries?: null;
  escort?: null;
  hasCuePoints?: boolean;
  country?: 'ES';
  hasDRM?: boolean;
  requireLogged?: boolean;
}

export type TType002 = 'video' | 'audio';

export interface ProgramasRelacionados022 {
  page: ProgramasRelacionadosPage022;
}

export interface ProgramasRelacionadosPage022 {
  items: Item022[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item022 {
  uri: string;
  htmlUrl: string;
  htmlShortUrl: string;
  id: string;
  ctvId: number | null;
  oldCtvId: null;
  uid: string;
  name: string;
  permalink: string;
  language: Lang;
  longTitle: string;
  shortTitle: string;
  description: string;
  audioDescription: boolean;
  longDescription: string;
  contact: null;
  emission: null | string;
  publicationDate: string;
  expirationDate: null;
  pubState: PubState;
  orden: number;
  imageSEO: string;
  logo: string;
  logo2: string;
  thumbnail: string;
  imgBackground: string;
  imgBackground2: string;
  imgPoster: string;
  imgPoster2: string;
  imgPortada: string;
  imgPortada2: string;
  imgCol: string;
  imgCol2: string;
  imgCol3: string;
  imgBanner: string;
  imgBanner2: string;
  imgPinta: string;
  imagePodcast: string;
  outOfEmission: boolean;
  channel: ItemChannel;
  fanBoxID: null;
  ageRangeUid: AgeRangeUid | null;
  ageRange: AgeRange | null;
  recommendAgesForChilds: null[];
  seccionesRef: string;
  temporadasRef: string;
  temporadaShortTitle: null;
  temporada: null;
  agrupadoresRef: string;
  videosRef: string;
  audiosRef: string;
  multimediasRef: string;
  relacionadosRef: string;
  otherChannelsRef: string;
  childrenInfoRef: string;
  filtro: null;
  webRtve: null;
  webOficial: string;
  promoText: string | null;
  promoDesc: null | string;
  relatedByLangRef: string;
  modificationDate: string;
  publicationDateTimestamp: number;
  contentType: 'programa';
  sgce: null | string;
  sgce2: null;
  kantar: null | string;
  generos: Genero001[];
  seasons: null;
  numSeasons: number;
  productionDate: string | null;
  rrss: null | string;
  rrssApps: RrssApp[];
  mainTopic: string;
  mainTopicUid: string;
  title: string;
  disabledAlacarta: boolean;
  programType: ProgramType | null;
  programTypeId: number | null;
  isComplete: boolean;
  inAZList: boolean;
  director: null | string;
  producedBy: null | string;
  showMan: null | string;
  casting: null | string;
  technicalTeam: null | string;
  idWiki: null | string;
  idImdb: string;
  showFragments: boolean;
  notDownloadable: boolean;
  paidCountries: null;
  escort: Escort;
}

export interface ProgramasAudios023 {
  page: ProgramasAudiosPage023;
}

export interface ProgramasAudiosPage023 {
  items: Item023[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item023 {
  uri: string;
  htmlUrl: string;
  htmlShortUrl: string;
  id: string;
  language: Lang;
  anteTitle: string | null;
  anteTitleUrl: null;
  longTitle: string;
  shortTitle: null | string;
  mainCategoryRef: string;
  popularity: string;
  popHistoric: string;
  numVisits: string;
  publicationDate: string;
  modificationDate: string;
  pubState: PubState;
  mainTopic: string;
  topicsName: string[];
  breadCrumbRef: string;
  imageSEO: string;
  thumbnail: null | string;
  previews: LastMultimediaPreviews;
  expirationDate: null | string;
  dateOfEmission: string;
  publicationDateTimestamp: number;
  productionDate: null | string;
  contentType: ItemDestacadoAssetType;
  consumption: Consumption002;
  type: TypeClass;
  assetType: ItemDestacadoAssetType;
  statistics: Statistics;
  alt: null | string;
  foot: null;
  shortDescription: null | string;
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
  temporadasRef: string;
  temporada: null;
  temporadaShortTitle: null;
  programRef: string;
  relacionadosRef: string;
  relManualesRef: string;
  publicidadRef: null;
  comentariosRef: string;
  relatedByLangRef: string;
  sign: { [key: string]: string | null };
  estadisticasRef: string;
  ageRangeUid: null;
  ageRange: null;
  contentInitDate: null;
  contentEndDate: null;
  disabledAlacarta: boolean;
  noRegistrationRequired: boolean;
  promoTitle: null;
  promoDesc: null;
  title: string;
  generos: Genero001[];
}

export interface ProgramasMultimedias024 {
  page: ProgramasMultimediasPage024;
}

export interface ProgramasMultimediasPage024 {
  items: Item024[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item024 {
  uri: string;
  htmlUrl: string;
  htmlShortUrl: string;
  id: string;
  language: Lang;
  anteTitle: null | string;
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
  topicsName: string[];
  breadCrumbRef: string;
  imageSEO: string;
  thumbnail: null | string;
  previews: LastMultimediaPreviews;
  expirationDate: null | string;
  dateOfEmission: string;
  publicationDateTimestamp: number;
  productionDate: null;
  contentType: ContentTypeEnum;
  consumption: Consumption001;
  type: TypeClass;
  subType: TypeClass | null;
  assetType: ContentTypeEnum;
  statistics: Statistics;
  alt: null | string;
  foot: null;
  shortDescription: null | string;
  description: null | string;
  otherTopicsRefs: string;
  qualities: Quality[];
  qualitiesRef: string;
  duration: number;
  programInfo: ProgramInfo;
  sgce: null | string;
  dg: null | string;
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
  sign: { [key: string]: string | null };
  estadisticasRef: string;
  ageRangeUid: AgeRangeUid | null;
  ageRange: string | null;
  contentInitDate: null;
  contentEndDate: null;
  disabledAlacarta: boolean;
  notDownloadable: boolean;
  noRegistrationRequired: boolean;
  promoTitle: null | string;
  promoDesc: null | string;
  episode: number;
  subtitleRef: null | string;
  aspectRatio: 'f16x9';
  title: string;
  idWiki: null;
  idImdb: null;
  director: null | string;
  producedBy: null;
  showMan: null;
  casting: null | string;
  generos: Genero001[];
  technicalTeam: null;
  audioDescription: null | string;
  audioOriginal: null | string;
  allowedInCountry: boolean;
  paidContent: boolean;
  geolocalizado: boolean;
  paidCountries: null;
  escort: Escort | null;
  hasCuePoints: boolean;
  country: 'ES';
  hasDRM: boolean;
  requireLogged: boolean;
  consumptionUid?: 'D_PACK';
}

export type Consumption001 = 'ondemand' | 'EMPAQUETADO';

export interface ProgramasAudios025 {
  page: ProgramasAudiosPage025;
}

export interface ProgramasAudiosPage025 {
  items: Item025[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item025 {
  uri: string;
  htmlUrl: string;
  htmlShortUrl: string;
  id: string;
  language: Lang;
  anteTitle: string | null;
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
  mainTopicUid?: string;
  topicsName: string[];
  breadCrumbRef: string;
  imageSEO: string;
  thumbnail: null | string;
  previews: LastMultimediaPreviews;
  expirationDate: null;
  dateOfEmission: string;
  publicationDateTimestamp: number;
  productionDate: null | string;
  contentType: ItemDestacadoAssetType;
  consumption: Consumption002;
  type: TypeClass;
  assetType: ItemDestacadoAssetType;
  statistics: Statistics;
  alt: null | string;
  foot: null | string;
  shortDescription: null | string;
  description: null | string;
  otherTopicsRefs: string;
  qualities: Quality[];
  qualitiesRef: string;
  duration: number;
  programInfo: ProgramInfo;
  sgce: null | string;
  dg: null;
  sip: null;
  commentOptions: PubState | null;
  cuePointsRef: string;
  configPlayerRef: string;
  transcriptionRef: string;
  temporadasRef: string;
  temporada: null;
  temporadaShortTitle: null;
  programRef: string;
  relacionadosRef: string;
  relManualesRef: string;
  publicidadRef: null;
  comentariosRef: string;
  relatedByLangRef: string;
  sign: { [key: string]: string | null };
  estadisticasRef: string;
  ageRangeUid: null;
  ageRange: null;
  contentInitDate: null;
  contentEndDate: null;
  disabledAlacarta: boolean;
  noRegistrationRequired: boolean;
  promoTitle: null;
  promoDesc: null;
  title: string;
  generos: Genero002[];
}

export interface ProgramasRelacionados026 {
  page: ProgramasRelacionadosPage026;
}

export interface ProgramasRelacionadosPage026 {
  items: Item026[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item026 {
  uri: string;
  htmlUrl: string;
  htmlShortUrl: string;
  id: string;
  ctvId: number | null;
  oldCtvId: null;
  uid: string;
  name: string;
  permalink: string;
  language: Lang;
  longTitle: string;
  shortTitle: string;
  description: string;
  audioDescription: boolean;
  longDescription: string;
  contact: null;
  emission: null | string;
  publicationDate: string;
  expirationDate: null;
  pubState: PubState;
  orden: number;
  imageSEO: string;
  logo: string;
  logo2: string;
  thumbnail: string;
  imgBackground: string;
  imgBackground2: string;
  imgPoster: string;
  imgPoster2: string;
  imgPortada: string;
  imgPortada2: string;
  imgCol: string;
  imgCol2: string;
  imgCol3: string;
  imgBanner: string;
  imgBanner2: string;
  imgPinta: string;
  imagePodcast: string;
  outOfEmission: boolean;
  channel: ItemChannel;
  fanBoxID: null;
  ageRangeUid: AgeRangeUid | null;
  ageRange: AgeRange | null;
  recommendAgesForChilds: null[];
  seccionesRef: string;
  temporadasRef: string;
  temporadaShortTitle: null;
  temporada: null;
  agrupadoresRef: string;
  videosRef: string;
  audiosRef: string;
  multimediasRef: string;
  relacionadosRef: string;
  otherChannelsRef: string;
  childrenInfoRef: string;
  filtro: null;
  webRtve: null;
  webOficial: string;
  promoText: string | null;
  promoDesc: null | string;
  relatedByLangRef: string;
  modificationDate: string;
  publicationDateTimestamp: number;
  contentType: 'programa';
  sgce: string | null;
  sgce2: null;
  kantar: null | string;
  generos: Genero002[];
  seasons: ItemSeasonClass[] | null;
  numSeasons: number;
  productionDate: string | null;
  rrss: null;
  rrssApps: RrssApp[];
  mainTopic: string;
  mainTopicUid: string;
  title: string;
  disabledAlacarta: boolean;
  programType: ProgramType | null;
  programTypeId: number | null;
  isComplete: boolean;
  inAZList: boolean;
  director: null | string;
  producedBy: string | null;
  showMan: null | string;
  casting: null;
  technicalTeam: null | string;
  idWiki: null | string;
  idImdb: string;
  showFragments: boolean;
  notDownloadable: boolean;
  paidCountries: null;
  escort: Escort;
}

export interface Programas027 {
  page: ProgramasPage027;
}

export interface ProgramasPage027 {
  items: Item027[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item027 {
  uri: string;
  htmlUrl: string;
  htmlShortUrl: string;
  id: string;
  language: Lang;
  anteTitle: string | null;
  anteTitleUrl: null;
  longTitle: string;
  shortTitle: null | string;
  mainCategoryRef: string;
  popularity: string;
  popHistoric: string;
  numVisits: string;
  publicationDate: string;
  modificationDate: string;
  pubState: PubState;
  mainTopic: string;
  topicsName: string[];
  breadCrumbRef: string;
  imageSEO: string;
  thumbnail: null | string;
  previews: LastMultimediaPreviews;
  expirationDate: null;
  dateOfEmission: string;
  publicationDateTimestamp: number;
  productionDate: null;
  contentType: TType002;
  consumption: Consumption002;
  type: TypeClass;
  assetType: TType002;
  statistics: Statistics;
  alt: null | string;
  foot: null;
  shortDescription: null | string;
  description: null | string;
  otherTopicsRefs: string;
  qualities: Quality[];
  qualitiesRef: string;
  duration: number;
  programInfo: ProgramInfo;
  sgce: null | string;
  dg: null | string;
  sip: null;
  commentOptions: null;
  cuePointsRef: string;
  configPlayerRef: string;
  transcriptionRef: string;
  temporadasRef: string;
  temporada: TemporadaEnum | null;
  temporadaShortTitle: null | string;
  programRef: string;
  relacionadosRef: string;
  relManualesRef: string;
  publicidadRef: null;
  comentariosRef: string;
  relatedByLangRef: string;
  sign: { [key: string]: string | null };
  estadisticasRef: string;
  ageRangeUid: null;
  ageRange: null;
  contentInitDate: null;
  contentEndDate: null;
  disabledAlacarta: boolean;
  noRegistrationRequired: boolean;
  promoTitle: string | null;
  promoDesc: null;
  title: string;
  generos: Genero001[];
  subType?: TypeClass | null;
  temporadaId?: number | null;
  temporadaOrden?: number | null;
  notDownloadable?: boolean;
  episode?: number;
  subtitleRef?: null | string;
  aspectRatio?: 'f16x9';
  idWiki?: null;
  idImdb?: null;
  director?: string | null;
  producedBy?: null;
  showMan?: null | string;
  casting?: null;
  technicalTeam?: null;
  audioDescription?: null | string;
  audioOriginal?: null | string;
  allowedInCountry?: boolean;
  paidContent?: boolean;
  geolocalizado?: boolean;
  escort?: null;
  hasCuePoints?: boolean;
  country?: 'ES';
  hasDRM?: boolean;
  paidCountries?: null;
  requireLogged?: boolean;
}

export interface ProgramasMultimedias028 {
  page: ProgramasMultimediasPage028;
}

export interface ProgramasMultimediasPage028 {
  items: Item028[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item028 {
  uri: string;
  htmlUrl: string;
  htmlShortUrl: string;
  id: string;
  language: Lang;
  anteTitle: string | null;
  anteTitleUrl: null;
  longTitle: string;
  shortTitle: null | string;
  mainCategoryRef: string;
  popularity: string;
  popHistoric: string;
  numVisits: string;
  publicationDate: string;
  modificationDate: string;
  pubState: PubState;
  mainTopic: string;
  mainTopicUid?: string;
  topicsName: string[];
  breadCrumbRef: string;
  imageSEO: string;
  thumbnail: string;
  previews: LastMultimediaPreviews;
  expirationDate: null;
  dateOfEmission: string;
  publicationDateTimestamp: number;
  productionDate: null | string;
  contentType: TType002;
  consumption: Consumption002;
  type: TypeClass;
  assetType: TType002;
  statistics: Statistics;
  alt: null | string;
  foot: null;
  shortDescription: null;
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
  temporadasRef: string;
  temporada: null;
  temporadaShortTitle: null;
  programRef: string;
  relacionadosRef: string;
  relManualesRef: string;
  publicidadRef: null;
  comentariosRef: string;
  relatedByLangRef: string;
  sign: { [key: string]: string | null };
  estadisticasRef: string;
  ageRangeUid: null;
  ageRange: null;
  contentInitDate: null;
  contentEndDate: null;
  disabledAlacarta: boolean;
  noRegistrationRequired: boolean;
  promoTitle: null;
  promoDesc: null;
  title: string;
  generos: Genero001[];
  subType?: null;
  temporadaId?: null;
  temporadaOrden?: null;
  notDownloadable?: boolean;
  episode?: number;
  subtitleRef?: null;
  aspectRatio?: 'f16x9';
  idWiki?: null;
  idImdb?: null;
  director?: null;
  producedBy?: null;
  showMan?: null | string;
  casting?: null;
  technicalTeam?: null;
  audioDescription?: null;
  audioOriginal?: null;
  allowedInCountry?: boolean;
  paidContent?: boolean;
  geolocalizado?: boolean;
  paidCountries?: null;
  escort?: null;
  hasCuePoints?: boolean;
  country?: 'ES';
  hasDRM?: boolean;
  requireLogged?: boolean;
}

export interface Programas029 {
  page: ProgramasMultimediasPage029;
}

export interface ProgramasMultimediasPage029 {
  items: Item029[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item029 {
  uri: string;
  htmlUrl: string;
  htmlShortUrl: string;
  id: string;
  language: Lang;
  anteTitle: null | string;
  anteTitleUrl: null;
  longTitle: string;
  shortTitle: null | string;
  mainCategoryRef: string;
  popularity: string;
  popHistoric: string;
  numVisits: string;
  publicationDate: string;
  modificationDate: string;
  pubState: PubState;
  mainTopic: string;
  topicsName: string[];
  breadCrumbRef: string;
  imageSEO: string;
  thumbnail: null | string;
  previews: LastMultimediaPreviews;
  expirationDate: null | string;
  dateOfEmission: string;
  publicationDateTimestamp: number;
  productionDate: null;
  contentType: ContentTypeEnum;
  consumption: Consumption001;
  type: TypeClass;
  subType: TypeClass | null;
  assetType: ContentTypeEnum;
  statistics: Statistics;
  alt: null | string;
  foot: null;
  shortDescription: null | string;
  description: null | string;
  otherTopicsRefs: string;
  qualities: Quality[];
  qualitiesRef: string;
  duration: number;
  programInfo: ProgramInfo;
  sgce: null | string;
  dg: null | string;
  sip: null;
  commentOptions: null;
  cuePointsRef: string;
  configPlayerRef: string;
  transcriptionRef: string;
  temporadaId: number | null;
  temporadasRef: string;
  temporada: string | null;
  temporadaShortTitle: null | string;
  temporadaOrden: number | null;
  programRef: string;
  relacionadosRef: string;
  relManualesRef: string;
  publicidadRef: null;
  comentariosRef: string;
  relatedByLangRef: string;
  sign: { [key: string]: string | null };
  estadisticasRef: string;
  ageRangeUid: AgeRangeUid | null;
  ageRange: string | null;
  contentInitDate: null;
  contentEndDate: null;
  disabledAlacarta: boolean;
  notDownloadable: boolean;
  noRegistrationRequired: boolean;
  promoTitle: null | string;
  promoDesc: null;
  episode: number;
  subtitleRef: null | string;
  aspectRatio: 'f16x9';
  title: string;
  idWiki: null;
  idImdb: null;
  director: null | string;
  producedBy: null;
  showMan: null;
  casting: null;
  generos: Genero002[];
  technicalTeam: null;
  audioDescription: null | string;
  audioOriginal: null | string;
  allowedInCountry: boolean;
  paidContent: boolean;
  geolocalizado: boolean;
  paidCountries: null;
  escort: Escort | null;
  hasCuePoints: boolean;
  country: 'ES';
  hasDRM: boolean;
  requireLogged: boolean;
  consumptionUid?: 'D_PACK';
}

export interface ProgramasTemporadas030 {
  page: ProgramasTemporadasPage030;
}

export interface ProgramasTemporadasPage030 {
  items: Item030[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item030 {
  uri: string;
  id: number;
  title: string;
  shortTitle: string;
  longTitle: string;
  permalink: string;
  description: string;
  shortDescription: string;
  image: string;
  imgBackground: string;
  imgPortada: string;
  disabledAlacarta: boolean;
  notDownloadable: boolean;
  orden: number;
  numEpisodes: number;
  director: null | string;
  producedBy: string | null;
  showMan: null | string;
  casting: null;
  technicalTeam: null | string;
}

export interface ProgramasOtrasCadenas031 {
  page: ProgramasOtrasCadenasPage031;
}

export interface ProgramasOtrasCadenasPage031 {
  items: Item031[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item031 {
  uri: string;
  htmlUrl: string;
  htmlShortUrl: string;
  id: string;
  medioRef: string;
  uid: Uid;
  title: AnteTitleEnum;
  permalink: string;
  programsRef: string;
  videosRef: string;
  audiosRef: string;
  multimediasRef: string;
  directosAhoraRef: string;
  directosEnvivoAhoraRef: string;
  directosTodosAhoraRef: string;
  directosProximosRef: string;
  directosEnvivoProximosRef: string;
  directosTodosProximosRef: string;
  agrupadoresRef: string;
  videosVistosRef: string;
  audiosVistosRef: string;
  multimediasVistosRef: string;
  videosPopularesRef: string;
  audiosPopularesRef: string;
  multimediasPopularesRef: string;
}

export interface Programas032 {
  page: ProgramasPage032;
}

export interface ProgramasPage032 {
  items: Item032[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item032 {
  uri: string;
  htmlUrl: string;
  htmlShortUrl: string;
  id: string;
  ctvId: number;
  oldCtvId: null;
  uid: string;
  name: string;
  permalink: string;
  language: Lang;
  longTitle: string;
  shortTitle: string;
  description: string;
  audioDescription: boolean;
  longDescription: string;
  contact: null;
  emission: string;
  publicationDate: string;
  expirationDate: null;
  pubState: PubState;
  orden: number;
  imageSEO: string;
  logo: string;
  logo2: string;
  thumbnail: string;
  imgBackground: string;
  imgBackground2: string;
  imgPoster: string;
  imgPoster2: string;
  imgPortada: string;
  imgPortada2: string;
  imgCol: string;
  imgCol2: string;
  imgCol3: string;
  imgBanner: string;
  imgBanner2: string;
  imgPinta: string;
  imagePodcast: string;
  outOfEmission: boolean;
  channel: ItemChannel;
  fanBoxID: null;
  ageRangeUid: AgeRangeUid;
  ageRange: AgeRange;
  recommendAgesForChilds: null[];
  seccionesRef: string;
  temporadasRef: string;
  temporadaShortTitle: null;
  temporada: null;
  agrupadoresRef: string;
  videosRef: string;
  audiosRef: string;
  multimediasRef: string;
  relacionadosRef: string;
  otherChannelsRef: string;
  childrenInfoRef: string;
  filtro: null;
  webRtve: null;
  webOficial: string;
  promoText: string;
  promoDesc: null;
  relatedByLangRef: string;
  modificationDate: string;
  publicationDateTimestamp: number;
  contentType: 'programa';
  sgce: string;
  sgce2: null;
  kantar: string;
  generos: Genero002[];
  seasons: null;
  numSeasons: number;
  productionDate: string;
  rrss: null;
  rrssApps: RrssApp[];
  mainTopic: string;
  mainTopicUid: string;
  title: string;
  disabledAlacarta: boolean;
  programType: ProgramType;
  programTypeId: number;
  isComplete: boolean;
  inAZList: boolean;
  director: string;
  producedBy: string;
  showMan: string;
  casting: null;
  technicalTeam: string;
  idWiki: string;
  idImdb: string;
  showFragments: boolean;
  notDownloadable: boolean;
  paidCountries: null;
  escort: Escort;
  paidContent: boolean;
  country: 'ES';
}

export interface ScheduleTv1Cat {
  diahoy: string;
  itemahora: number;
  nombreCanal: string;
  uidCanal: string;
  items: Schedule24HItem[];
}

export interface Schedule24HItem {
  name: string;
  description: string;
  begintime: string;
  duration: string;
  parentalRating: string;
  contentType: ContentTypeEnum;
  original_event_name: string;
  original_episode_name: null | string;
  episode_name: null | string;
  episode_number: number | null | string;
  year: number | null | string;
  director: null | string;
  casting: null | string;
  sgce: null | string;
  orden: number;
  idAsset?: number;
  idPrograma?: number;
  ahora?: boolean;
  dg?: null | string;
  season?: string | null;
  api?: string;
}

export interface SchedulePlayProgram {
  diahoy: string;
  itemahora: number;
  nombreCanal: string;
  uidCanal: string;
  items: SchedulePlayItem[];
}

export interface SchedulePlayItem {
  name: string;
  description: string;
  begintime: string;
  duration: string;
  parentalRating: string;
  contentType: ContentTypeEnum;
  original_event_name: string;
  original_episode_name: string;
  episode_name: null | string;
  episode_number: number | null;
  year: number;
  director: null | string;
  casting: null | string;
  sgce: null | string;
  dg: null | string;
  idAsset: number;
  season: string | null;
  orden: number;
  idPrograma?: number;
  ahora?: boolean;
}

export interface SearchError {
  message: 'Not Found';
  error: {
    status: number;
  };
}

export interface SearchProgram033 {
  page: SearchProgramPage033;
}

export interface SearchProgramPage033 {
  items: Item033[];
  numElements: number;
  number: number;
  offset: number;
  size: number;
  total: number;
  totalPages: number;
}

export interface Item033 {
  ageRange: string;
  ageRangeUid: AgeRangeUid;
  allowedInCountry: boolean;
  alt: string;
  anteTitle: null;
  anteTitleUrl: null;
  aspectRatio: 'f16x9';
  assetType: ContentTypeEnum;
  audioDescription: null;
  audioOriginal: null | string;
  breadCrumbRef: string;
  casting: string;
  comentariosRef: string;
  commentOptions: null;
  configPlayerRef: string;
  consumption: Consumption001;
  contentEndDate: null;
  contentInitDate: null;
  contentType: ContentTypeEnum;
  country: 'ES';
  cuePointsRef: string;
  dateOfEmission: string;
  description: string;
  dg: null | string;
  director: string;
  disabledAlacarta: boolean;
  duration: number;
  episode: number;
  escort: Escort;
  estadisticasRef: string;
  expirationDate: null | string;
  foot: null;
  generos: Genero001[];
  geolocalizado: boolean;
  hasCuePoints: boolean;
  hasDRM: boolean;
  htmlShortUrl: string;
  htmlUrl: string;
  id: string;
  idImdb: null | string;
  idWiki: null | string;
  imageSEO: string;
  imgPortada: string;
  imgPoster: string;
  language: Lang;
  longTitle: string;
  mainCategoryRef: string;
  mainTopic: string;
  modificationDate: string;
  noRegistrationRequired: boolean;
  notDownloadable: boolean;
  numVisits: string;
  otherTopicsRefs: string;
  paidContent: boolean;
  paidCountries: PaidCountry[] | null;
  popHistoric: string;
  popularity: string;
  previews: LastMultimediaPreviews;
  producedBy: null;
  productionDate: string;
  programInfo: ProgramInfo;
  programRef: string;
  promoDesc: null | string;
  promoTitle: null;
  pubState: PubState;
  publicationDate: string;
  publicationDateTimestamp: number;
  publicidadRef: null;
  qualities: Quality[];
  qualitiesRef: string;
  relManualesRef: string;
  relacionadosRef: string;
  relatedByLangRef: string;
  requireLogged: boolean;
  sgce: null | string;
  shortDescription: string;
  shortTitle: null | string;
  showMan: null;
  sign: { [key: string]: string | null };
  sip: null;
  statistics: Statistics;
  subType: TypeClass;
  subtitleRef: null | string;
  technicalTeam: null;
  temporada: null;
  temporadaId: null;
  temporadaOrden: null;
  temporadaShortTitle: null;
  temporadasRef: string;
  thumbnail: string;
  title: string;
  topicsName: string[];
  transcriptionRef: string;
  type: TypeClass;
  uri: string;
  anteTitlelUrl?: null;
  canonicalUrl?: null;
  consumptionUid?: 'D_PACK';
}

export interface Tematicas034 {
  page: TematicasPage034;
}

export interface TematicasPage034 {
  items: Item034[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item034 {
  permalink: string;
  pathUids: string;
  pathNames: string;
  videosRef: string;
  audiosRef: string;
  multimediasRef: string;
  multimediasVistosRef: string;
  videosVistosRef: string;
  audiosVistosRef: string;
  multimediasPopularesRef: string;
  videosPopularesRef: string;
  audiosPopularesRef: string;
  noticiasRef: string;
  noticiasTickerRef: string;
  noticiasTickerNoticiasRef: string;
  noticiasTickerDeportesRef: string;
  noticiasVistasRef: string;
  noticiasPopularesRef: string;
  publicidadRef: string;
  uid: string;
  title: string;
  traducciones: Traducciones;
  parentRef: string;
  childrenRef: string;
  descendantsRef: string;
  ancestrosRef: string;
  uri: string;
  id: string;
}

export interface Traducciones {
  ES: string;
}

export interface Error {
  success: boolean;
  httpCode: number;
  message: string;
  response: string[];
  errors: string[];
  build: string;
}

export interface Token {
  token: string;
  widevineURL: string;
  fairplayURL: string;
  fairplayCert: string;
}

export interface VideosSubtitulos035 {
  page: VideosSubtitulosPage035;
}

export interface VideosSubtitulosPage035 {
  items: Item035[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}

export interface Item035 {
  src: string;
  lang: Lang;
}

export interface MConfigsRtvePlayEstructura {
  version: number;
  fechaModificacion: Date;
  expirationTime: number;
  refresh: number;
  dashon: boolean;
  digitalVOD: boolean;
  digitaLIVE: boolean;
  tv: boolean;
  vw: number;
  segment: number;
  segmentc: number;
  subsaux: boolean;
  apiAux: boolean;
  login: boolean;
  adstv: boolean;
  adsLive: boolean;
  urlLogo: string;
  bannerPromo: string;
  bannerJJOO: BannerJJOO;
  imagesShorts: ImagesShorts;
  bannerLogin: BannerLogin;
  stats: Stats;
  bannerPuntua: BannerPuntua;
  television: Television;
  radio: Radio;
}

export interface BannerJJOO {
  fechaInicio: Date;
  fechaFin: Date;
}

export interface BannerLogin {
  title: string;
  active: boolean;
  imagemobile: string;
  imagetablet: string;
  imageTV: string;
  closeAllowed: boolean;
}

export interface BannerPuntua {
  title: string;
  active: boolean;
  imagemobile: string;
  imagetablet: string;
  text: string;
  textButton: string;
}

export interface ImagesShorts {
  imagemobile: string;
  imagetablet: string;
}

export interface Radio {
  portada: RadioPortada[];
  menuBloques: RadioMenuBloque[];
  secciones: RadioSecciones;
}

export interface RadioMenuBloque {
  orden: number;
  title: string;
  menuItems: MenuItem002[];
}

export interface MenuItem002 {
  orden: number;
  title: string;
  resaltado: boolean;
  tipo: string;
  urlContent?: string;
  imgBackground?: string;
  decorado?: boolean;
  menuItems?: MenuItemMenuItem[];
  mostrarlogado?: string;
  so?: string;
}

export interface MenuItemMenuItem {
  orden: number;
  title: string;
  resaltado: boolean;
  tipo:
    | 'portada'
    | 'descargas'
    | 'mislistas'
    | 'seguirviendo'
    | 'intentApp'
    | 'portadaCanalTematico';
  urlContent?: string;
  imgBackground?: string;
  logo?: string;
  pais?: 'ES';
  decorado?: boolean;
  appIOS?: string;
  schemeIOS?: string;
  appAndroid?: string;
  id?: string;
  subscriptor?: boolean;
}

export interface RadioPortada {
  orden: number;
  title: string;
  urlContent: string;
  tipo: string;
  subTitle?: null;
  numLayout?: number;
}

export interface RadioSecciones {
  directosRadio: DirectosRadio;
  portada: DirectosRadio;
  buscadorAZ: BuscadorAZ;
  directos: Directos002;
  parrilla: Parrilla;
  nowAndNext: NowAndNext;
  buscador: Buscador;
  territoriales: Territoriales;
}

export interface Buscador {
  urlContent: string;
  tituloLomasBuscado: string;
  urlBuscadorPredef: string;
  urlLomasBuscado: string;
  generospeliculas?: GeneroPelicula[];
}

export interface GeneroPelicula {
  'nav-pag_name': string;
  'nav-pag_url': string;
}

export interface BuscadorAZ {
  canales: Categoria[];
  categorias: Categoria[];
}

export interface Categoria {
  orden: number;
  title: string;
  urlContent: string;
}

export interface Directos002 {
  urlContent: string;
  urlbasestartover: string;
}

export interface DirectosRadio {
  urlContent: string;
}

export interface NowAndNext {
  emisoras: Emisora[];
}

export interface Emisora {
  tipo: string;
  urlContent: string;
}

export interface Parrilla {
  agrupadores: Agrupador[];
}

export interface Agrupador {
  orden: number;
  title: string;
  canales: AgrupadorCanal[];
}

export interface AgrupadorCanal {
  orden: number;
  title: string;
  logo: string;
  urlContent: string;
  idAsset: string;
}

export interface Territoriales {
  informativos: string;
  emisoras: string;
}

export interface Stats {
  adobe: boolean;
  comscore: boolean;
  muxData: boolean;
  userTracker: boolean;
  conviva: boolean;
  kantar: boolean;
}

export interface Television {
  portada: TelevisionPortada[];
  menuBloques: TelevisionMenuBloque[];
  secciones: TelevisionSecciones;
}

export interface TelevisionMenuBloque {
  orden: number;
  title: string;
  menuItems: MenuItem001[];
}

export interface MenuItem001 {
  orden: number;
  title: string;
  resaltado: boolean;
  tipo: string;
  subscriptor?: boolean;
  imgBackground?: string;
  urlContent?: string;
  decorado?: boolean;
  menuItems?: MenuItemMenuItem[];
  mostrarlogado?: string;
  so?: string;
}

export interface TelevisionPortada {
  orden: number;
  tipo: string;
  title: string;
  urlContent?: string;
  mostrarSoloEnEmision?: boolean;
}

export interface TelevisionSecciones {
  subscriptor: boolean;
  portada: SeccionesPortada;
  auxiliares: Auxiliares;
  desconexionTerritorial: DesconexionTerritorial;
  canalestematicos: CanalTematico[];
  buscadorAZ: BuscadorAZ;
  directos: Directos001;
  parrilla: Parrilla;
  buscador: Buscador;
  showDateEmision: string[];
  adsEnabled: string[];
  especiales: Especial[];
  concursos: Concurso[];
}

export interface Auxiliares {
  mdandroid: string;
  hlios: string;
}

export interface CanalTematico {
  nombre: string;
  id: string;
  permalink: string;
}

export interface Concurso {
  id: string;
  activo: boolean;
  feed: string;
}

export interface DesconexionTerritorial {
  idDirectoPrincipal: string;
  horaInicio: string;
  horaFin: string;
  urlDesconexiones: string;
  urlLocalizacion: string;
}

export interface Directos001 {
  urlContent: string;
  urlbasestartover: string;
  programsstartover: StartOver[];
}

export interface StartOver {
  programId: string;
  idGolumi: string;
  sgce: string;
}

export interface Especial {
  programRefid: string;
  typeId: number;
}

export interface SeccionesPortada {
  urlContent: string;
  addParams: boolean;
}

export interface PlayIndexApps {
  id: string;
  category: Category;
  pubPoint: string;
  title: string;
  rows: Row[];
}

export interface Category {
  breadcrumb: string;
  id: number;
  title: string;
  uid: string;
}

export interface Row {
  orden: number;
  title: null | string;
  noLabels?: boolean;
  moduleType: 'Collection' | 'livesCollection' | 'KeepWatching' | 'catalogs';
  urlContent?: string;
  tipo: string;
  subTitle?: null;
  numLayout?: number;
  links?: Link[];
}

export interface Link {
  title: string;
  image: string;
  tipo: TipoEnum;
  url: string;
  coverpage: null | string;
  imgHorizontal: string;
  imgSquare: string;
}
