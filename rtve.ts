export interface APIVideos7043605_Temporadas {
    page: APIAgrProgramas2210_ProgramasPage;
}

export interface APIAgrProgramas2210_ProgramasPage {
    items:       PurpleItem[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface PurpleItem {
    uri:                      string;
    htmlUrl:                  string;
    htmlShortUrl:             string;
    id:                       string;
    ctvId:                    number | null;
    oldCtvId:                 null;
    uid:                      string;
    name:                     string;
    permalink:                string;
    language:                 Lang;
    longTitle:                string;
    shortTitle:               string;
    description:              string;
    audioDescription:         boolean;
    longDescription:          string;
    contact:                  null;
    emission:                 null | string;
    publicationDate:          string;
    expirationDate:           null;
    pubState:                 PubState;
    orden:                    number;
    imageSEO:                 string;
    logo:                     string;
    logo2:                    string;
    thumbnail:                string;
    imgBackground:            string;
    imgBackground2:           string;
    imgPoster:                string;
    imgPoster2:               string;
    imgPortada:               string;
    imgPortada2:              string;
    imgCol:                   string;
    imgCol2:                  string;
    imgCol3:                  string;
    imgBanner:                string;
    imgBanner2:               string;
    imgPinta:                 string;
    imagePodcast:             string;
    outOfEmission:            boolean;
    channel:                  ItemChannel;
    fanBoxID:                 null;
    ageRangeUid:              AgeRangeUid | null;
    ageRange:                 AgeRange | null;
    recommendAgesForChilds:   any[];
    seccionesRef:             string;
    temporadasRef:            string;
    temporadaShortTitle:      null;
    temporada:                null;
    agrupadoresRef:           string;
    videosRef:                string;
    audiosRef:                string;
    multimediasRef:           string;
    relacionadosRef:          string;
    otherChannelsRef:         string;
    childrenInfoRef:          string;
    filtro:                   null;
    webRtve:                  null | string;
    webOficial:               string;
    promoText:                PurplePromoText | null;
    promoDesc:                null | string;
    relatedByLangRef:         string;
    modificationDate:         string;
    publicationDateTimestamp: number;
    contentType:              "programa";
    sgce:                     null | string;
    sgce2:                    null | string;
    kantar:                   null | string;
    generos:                  PurpleGenero[];
    seasons:                  ItemSeasonClass[] | null;
    numSeasons:               number;
    productionDate:           null | string;
    rrss:                     Rrss | null;
    rrssApps:                 RrssApp[];
    mainTopic:                string;
    mainTopicUid:             string;
    title:                    string;
    disabledAlacarta:         boolean;
    programType:              ProgramType | null;
    programTypeId?:           number | null;
    isComplete:               boolean;
    inAZList:                 boolean;
    director:                 null | string;
    producedBy:               null | string;
    showMan:                  null | string;
    casting:                  null | string;
    technicalTeam:            null | string;
    idWiki:                   null | string;
    idImdb:                   string;
    showFragments:            boolean;
    notDownloadable:          boolean;
    paidCountries:            null;
    escort:                   Escort;
    paidContent?:             boolean;
    country?:                 "ES";
    programTypeID?:           number;
}

export type AgeRange = "Recomendado para todos los públicos" | "Recomendado para mayores de 7 años" | "Recomendado para mayores de 16 años" | "Recomendado para mayores de 18 años" | "Recomendado para mayores de 12 años" | "Recomendado para mayores de 13 años" | "Especialmente recomendado para la infancia";

export type AgeRangeUid = "IF_REDAD0" | "IF_REDAD2" | "IF_REDAD6" | "IF_REDAD4" | "IF_REDAD5" | "IF_REDAD3" | "IF_REDAD1";

export interface ItemChannel {
    uri:          string;
    htmlUrl:      string;
    htmlShortUrl: HTMLShortURL;
    id:           string;
    medioRef:     string;
    uid:          Uid;
    title:        AnteTitleEnum;
    permalink:    Permalink;
}

export type HTMLShortURL = "/alacarta/undefined/rtve-play-television/" | "/alacarta/tve/la2/" | "/alacarta/undefined/archivo-rtve/" | "/alacarta/tve/la1/" | "/alacarta/undefined/playz/" | "/alacarta/tve/24-horas/" | "/alacarta/rne/radio-3-extra/" | "/alacarta/undefined/rne-audio/" | "/alacarta/rne/radio-nacional/" | "/alacarta/rne/radio-5/" | "/alacarta/rne/radio-exterior/" | "/alacarta/rne/radio-4/" | "/alacarta/tve/la-2-cataluna/" | "/alacarta/rne/radio-clasica/" | "/alacarta/rne/radio-3/";

export type Permalink = "rtve-play-television" | "la2" | "archivo-rtve" | "la1" | "playz" | "24-horas" | "radio-3-extra" | "rne-audio" | "radio-nacional" | "radio-5" | "radio-exterior" | "radio-4" | "la-2-cataluna" | "radio-clasica" | "radio-3";

export type AnteTitleEnum = "RTVE Play Television" | "La 2" | "Archivo RTVE" | "La 1" | "PLAYZ" | "Canal 24H" | "Radio 3 Extra" | "RNE Audio" | "Radio Nacional" | "Radio 5" | "Radio Exterior" | "Ràdio 4" | "La 2 Cataluña" | "Radio Clásica" | "Radio 3" | "Teledeporte" | "Play Video" | "Clan TVE";

export type Uid = "CAD_PLAY" | "CTV_LA2" | "CAD_ARCHIV" | "CTV_LA1" | "CAD_PLAYZ" | "CTV_C24H" | "CRN_R3EXTR" | "CAD_PLAYR" | "CRN_RADIO1" | "CRN_RADIO5" | "CRN_RADIOE" | "CRN_RADIO4" | "CTV_LA2C" | "CRN_RADIOC" | "CRN_RADIO3";

export interface Escort {
    intention: Intention | null;
    format:    null | string;
    content:   null | string;
}

export type Intention = "Intención / Entretenimiento / Mero Entretenimiento" | "Intención / Enriquecer / Enriquecimiento General" | "Intención / Informar / Infoentretenimiento" | "Intención / Informar / Información General" | "Intención / Entretenimiento" | "Intención / Enriquecer" | "Intención / Enriquecer / Educación" | "Intención / Entretenimiento / Entretenimiento Informativo" | "Intención / Informar / Consejo" | "Intención / Enriquecer / Enriquecimiento Inspirador" | "Intención / Informar";

export interface PurpleGenero {
    generoInf?:    GeneroInf;
    generoInfUid?: GeneroInfUid;
    generoId:      string;
}

export type GeneroInf = "Cocina" | "Viajes" | "Playz joven" | "Humor" | "Policíaca y suspense" | "Moda" | "Igualdad" | "Archivo TVE" | "Servicio Público" | "Cultura" | "Información y actualidad" | "Biografías" | "Cataluña" | "Deportes" | "Infantil" | "Música" | "Historia" | "Comedia" | "Drama" | "Ciencia y futuro" | "Series" | "Romántica" | "Acción y aventuras" | "Tecnología" | "Arte" | "Rugby" | "Ciclismo" | "Deportes de invierno" | "Balonmano" | "Fútbol" | "Tenis" | "Baloncesto" | "Atletismo" | "Natación" | "Hípica" | "Motor" | "Vela" | "Olimpismo" | "Gimnasia" | "Bádminton" | "Artes marciales" | "Voleibol" | "Terror" | "TV Movies" | "Western" | "Literatura" | "Clásica" | "Educación" | "Moda, famosos y tendencias" | "Masterchef" | "Naturaleza y Medio ambiente" | "Eurovisión" | "Hip hop/Funk" | "Cine" | "Series Literarias" | "Documentales" | "Series Históricas" | "Arquitectura" | "Danza" | "Fotografía" | "Sobremesa" | "Músicas del mundo" | "Rock/Pop" | "Electrónica/Experimental" | "Jazz/Blues" | "Religiosos";

export type GeneroInfUid = "GEN_COCIN" | "GEN_VIAJE" | "GE_PLAYZ" | "GEN_HUMOR" | "GE_POYDSUS" | "GE_MOFAT" | "GEN_IGUAL" | "GE_ARTVECC" | "GEN_SERPU" | "GEN_CULTU" | "GE_INFOR" | "GEN_BIOGR" | "GEN_CATAL" | "GE_DEPOR" | "GE_INFAN" | "GEN_MUSIC" | "GEN_HISTO" | "GE_COMED" | "GE_DRAMA" | "GE_CIENFU" | "GE_SERIES" | "GEN_ROMAN" | "GE_ACYAVET" | "GEN_TECNO" | "GEN_ARTEC" | "GEN_RUGBY" | "GEN_CICLI" | "GEN_INVIER" | "GEN_BALOM" | "GEN_FUTBOL" | "GEN_TENIS" | "GEN_BALON" | "GEN_ATLET" | "GEN_NATAC" | "GEN_HIPIC" | "GEN_MOTOR" | "GEN_VELAC" | "GEN_OLIPM" | "GEN_GIMNA" | "GEN_BADMI" | "GEN_ARTMC" | "GEN_VOLEI" | "GE_TERROR" | "GE_TVMOVI" | "GEN_WESTE" | "GEN_LITER" | "GEN_CLASIC" | "GEN_EDUCA" | "GEN_MCHEF" | "GEN_MEDAM" | "GEN_EUROV" | "GEN_HIPHOP" | "GEN_CINEC" | "GE_SERLIT" | "GEN_DOCUM" | "GE_SERHIS" | "GEN_ARQUI" | "GEN_DANZA" | "GEN_FOTOG" | "GE_SOMESA" | "GEN_MUMUD" | "GEN_ROCKP" | "GEN_ELEEX" | "GEN_JAZZB" | "GEN_RELIG";

export type Lang = "es" | "ca" | "en" | "gl" | "eu";

export type ProgramType = "Magacín semanal" | "Serie Documental" | "Entretenimiento" | "Informativos Noticias" | "Magacines" | "Entrevistas" | "Reportajes Factual" | "Especial Evento" | "Documental Original" | "Infantiles" | "Magacines diarios" | "Late Night" | "Documental" | "Series de Archivo" | "Talent" | "Concursos" | "Informativo diario" | "Conciertos" | "Series Diarias" | "Series" | "Series Prime Time" | "Series Internacionales" | "Series Ficción Originales" | "Recetas" | "Contenedor Películas";

export type PurplePromoText = "NOMINADO A LOS PREMIOS DE VENECIA" | "NUEVO PROGRAMA" | "PREMIO IRIS" | "PREMIO NACIONAL DE TV" | "PREMIO ALARES" | "Estreno" | "Nuevo capítulo" | "Serie completa" | "ORIGINAL" | "GRAN ESTRENO, ESTA NOCHE" | "COMPLETO" | "CADA JUEVES" | "CADA LUNES";

export interface PubState {
    code:        Code;
    description: Description;
}

export type Code = "ENPUB" | "OP_CPERMIT";

export type Description = "En publicación" | "Permitir";

export type Rrss = "T:telediario_tve#F:RTVENoticias#I:rtvenoticias" | "T:agrosfera_tve#F:agrosfera_tve" | "T:InformeSemanal#F:InformeSemanal#I:Informesemanal" | "T:Lanoche_24h" | "F:eltiempoentve";

export interface RrssApp {
    Twitter:   string;
    Facebook:  null | string;
    Instagram: null | string;
    Youtube:   null;
}

export interface ItemSeasonClass {
    shorttitle:  string;
    longTitle:   string;
    id:          number;
    orden:       number;
    numEpisodes: number;
}

export interface APIProgramas178476_Relacionados {
    page: APIAgrProgramas2270_ProgramasPage;
}

export interface APIAgrProgramas2270_ProgramasPage {
    items:       FluffyItem[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface FluffyItem {
    uri:                      string;
    htmlUrl:                  string;
    htmlShortUrl:             string;
    id:                       string;
    ctvId:                    number | null;
    oldCtvId:                 null;
    uid:                      string;
    name:                     string;
    permalink:                string;
    language:                 Lang;
    longTitle:                string;
    shortTitle:               string;
    description:              string;
    audioDescription:         boolean;
    longDescription:          string;
    contact:                  null;
    emission:                 null | string;
    publicationDate:          string;
    expirationDate:           null;
    pubState:                 PubState;
    orden:                    number;
    imageSEO:                 string;
    logo:                     string;
    logo2:                    string;
    thumbnail:                string;
    imgBackground:            string;
    imgBackground2:           string;
    imgPoster:                string;
    imgPoster2:               string;
    imgPortada:               string;
    imgPortada2:              string;
    imgCol:                   string;
    imgCol2:                  string;
    imgCol3:                  string;
    imgBanner:                string;
    imgBanner2:               string;
    imgPinta:                 string;
    imagePodcast:             string;
    outOfEmission:            boolean;
    channel:                  ItemChannel;
    fanBoxID:                 null;
    ageRangeUid:              AgeRangeUid | null;
    ageRange:                 AgeRange | null;
    recommendAgesForChilds:   any[];
    seccionesRef:             string;
    temporadasRef:            string;
    temporadaShortTitle:      null;
    temporada:                null;
    agrupadoresRef:           string;
    videosRef:                string;
    audiosRef:                string;
    multimediasRef:           string;
    relacionadosRef:          string;
    otherChannelsRef:         string;
    childrenInfoRef:          string;
    filtro:                   null;
    webRtve:                  null | string;
    webOficial:               string;
    promoText:                PurplePromoText | null;
    promoDesc:                null | string;
    relatedByLangRef:         string;
    modificationDate:         string;
    publicationDateTimestamp: number;
    contentType:              "programa";
    sgce:                     null | string;
    sgce2:                    null | string;
    kantar:                   null | string;
    generos:                  FluffyGenero[];
    seasons:                  ItemSeasonClass[] | null;
    numSeasons:               number;
    productionDate:           null | string;
    rrss:                     null | string;
    rrssApps:                 RrssApp[];
    mainTopic:                string;
    mainTopicUid:             string;
    title:                    string;
    disabledAlacarta:         boolean;
    programType:              ProgramType | null;
    programTypeId:            number | null;
    isComplete:               boolean;
    inAZList:                 boolean;
    director:                 null | string;
    producedBy:               null | string;
    showMan:                  null | string;
    casting:                  null | string;
    technicalTeam:            null | string;
    idWiki:                   null | string;
    idImdb:                   string;
    showFragments:            boolean;
    notDownloadable:          boolean;
    paidCountries:            null;
    escort:                   Escort;
    paidContent?:             boolean;
    country?:                 "ES";
}

export interface FluffyGenero {
    generoInf?:       GeneroInf;
    generoInfUid?:    GeneroInfUid;
    generoId?:        string;
    subGeneroInf?:    GeneroInf | null;
    subGeneroInfUid?: GeneroInfUid | null;
    subGeneroId?:     null | string;
}

export interface APIProgramasInazlistTruePlayTrueSize2000OrderNameASCSmallTrue {
    id:            string;
    text:          string;
    titleText:     string;
    outOfEmission: boolean;
    promoText:     null | string;
    channelId:     string;
    description:   string;
    ageRangeUid:   AgeRangeUid | null;
}

export interface APICollection1098 {
    page: APICollection1098_Page;
}

export interface APICollection1098_Page {
    items:       TentacledItem[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface TentacledItem {
    itemDestacado:       null;
    collectionItems:     PurpleCollectionItem[];
    id:                  string;
    htmlUrl:             string;
    name:                string;
    title:               string;
    urlTitle:            string;
    anteTitle:           string;
    description:         string;
    generatePf:          boolean;
    context:             Context;
    template:            Template;
    designCode:          string;
    type:                TipoEnum;
    modificationDate:    Date;
    hidePublicationDate: boolean;
    previews:            PurplePreviews;
    seo:                 SEO;
    number:              number;
    size:                number;
    totalItems:          number;
    totalPages:          number;
    numElements:         number;
}

export interface PurpleCollectionItem {
    id:              string;
    webRtve:         WebRtve | null;
    htmlUrl:         string;
    ageRangeUid:     AgeRangeUid | null;
    ageRange:        AgeRange | null;
    name:            string;
    description:     string;
    promoText:       null | string;
    promoDesc:       null | string;
    channel:         CollectionItemChannel;
    imageSEO:        string;
    imgBackground:   string;
    imgBackground2:  string;
    imgPoster:       string;
    imgPoster2:      string;
    imgPortada:      string;
    imgPortada2:     string;
    imgCol:          string;
    imgCol2:         string;
    imgCol3:         string;
    imgBanner:       string;
    imgBanner2:      string;
    imgPinta:        string;
    imagePodcast:    string;
    mainTopic:       string;
    programType:     ProgramType | null;
    programTypeId:   number | null;
    isComplete:      boolean;
    noFragments:     boolean;
    generos:         FluffyGenero[] | null;
    seasons:         CollectionItemSeason[] | null;
    numSeasons:      number;
    contentType:     ContentTypeEnum;
    lastMultimedia?: PurpleLastMultimedia;
    paidCountries?:  PaidCountry[] | null;
}

export interface CollectionItemChannel {
    title: AnteTitleEnum;
    id:    number;
}

export type ContentTypeEnum = "video" | "program";

export interface PurpleLastMultimedia {
    id:               string;
    subType:          TypeClass;
    type:             TypeClass;
    contentType:      ContentTypeEnum;
    htmlUrl:          string;
    title:            string;
    description:      null | string;
    shortDescription: null | string;
    alt:              string;
    duration:         number;
    ageRangeUid:      AgeRangeUid | null;
    ageRange:         AgeRange | null;
    publicationDate:  string;
    expirationDate:   null | string;
    modificationDate: string;
    dateOfEmission:   null | string;
    episode:          number | null;
    seasonTitle:      null | string;
    temporadaId:      number | null;
    promoText:        null | string;
    promoDesc:        null | string;
    previews:         LastMultimediaPreviews;
    presetHD:         boolean;
    requireLogged:    boolean;
    hasDRM:           boolean;
    paidCountries?:   PaidCountry[] | null;
}

export type PaidCountry = "AL" | "AM" | "AR" | "AT" | "AZ" | "BA" | "BE" | "BG" | "BO" | "BR" | "BY" | "BZ" | "CA" | "CH" | "CL" | "CO" | "CR" | "CU" | "CY" | "CZ" | "DE" | "DK" | "DO" | "EC" | "EE" | "FI" | "FR" | "GB" | "GR" | "GT" | "HN" | "HT" | "HU" | "IE" | "IS" | "KZ" | "LI" | "LT" | "LU" | "LV" | "MD" | "ME" | "MK" | "MX" | "NI" | "NL" | "NO" | "PA" | "PE" | "PL" | "PR" | "PT" | "PY" | "RO" | "RS" | "RU" | "SE" | "SI" | "SK" | "SV" | "TR" | "UA" | "US" | "UY" | "VE" | "XK" | "AU" | "KR" | "PH" | "HK" | "IN" | "JP" | "AD" | "VA" | "HR" | "IT" | "MT" | "MC" | "SM";

export interface LastMultimediaPreviews {
    horizontal:  null | string;
    horizontal2: null | string;
    square:      null | string;
    square2:     null | string;
    vertical:    null | string;
    vertical2:   null | string;
}

export interface TypeClass {
    id:   number | null;
    name: TypeName | null;
}

export type TypeName = "Película" | "Documental" | "Completo" | "Fragmento" | "Entrevista" | "Tráiler" | "Avance" | "Reportaje" | "Deportes";

export interface CollectionItemSeason {
    id:          number;
    shorttitle:  string;
    longTitle:   string;
    numEpisodes: string;
    orden:       number;
}

export type WebRtve = "/television/informe-semanal/" | "/playz/playztrends/" | "/playz/heroes/" | "/playz/bajo-la-red/";

export type Context = "Play" | "Play Radio";

export interface PurplePreviews {
    horizontal: null | string;
    vertical:   null | string;
    square:     null | string;
}

export interface SEO {
    imageSEO:        null | string;
    metaTitle:       null | string;
    metaDescription: null | string;
    metaKeywords:    null | string;
    technicalSeo:    null | string;
    permalink:       string;
}

export type Template = "comp_nV" | "comp_xV" | "comp_xC" | "comp_nC";

export type TipoEnum = "collection" | "portadaPlay";

export interface APICollection1139 {
    page: APICollection1139_Page;
}

export interface APICollection1139_Page {
    items:       StickyItem[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface StickyItem {
    itemDestacado:       null;
    collectionItems:     FluffyCollectionItem[];
    id:                  string;
    htmlUrl:             string;
    name:                string;
    title:               string;
    urlTitle:            string;
    anteTitle:           string;
    description:         string;
    generatePf:          boolean;
    context:             Context;
    template:            Template;
    designCode:          string;
    type:                TipoEnum;
    modificationDate:    Date;
    hidePublicationDate: boolean;
    previews:            PurplePreviews;
    seo:                 SEO;
    number:              number;
    size:                number;
    totalItems:          number;
    totalPages:          number;
    numElements:         number;
}

export interface FluffyCollectionItem {
    id:              string;
    webRtve:         null | string;
    htmlUrl:         string;
    ageRangeUid:     AgeRangeUid | null;
    ageRange:        AgeRange | null;
    name:            string;
    description:     string;
    promoText:       null | string;
    promoDesc:       null | string;
    channel:         CollectionItemChannel;
    imageSEO:        string;
    imgBackground:   string;
    imgBackground2:  string;
    imgPoster:       string;
    imgPoster2:      string;
    imgPortada:      string;
    imgPortada2:     string;
    imgCol:          string;
    imgCol2:         string;
    imgCol3:         string;
    imgBanner:       string;
    imgBanner2:      string;
    imgPinta:        string;
    imagePodcast:    string;
    mainTopic:       string;
    programType:     ProgramType | null;
    programTypeId:   number | null;
    isComplete:      boolean;
    noFragments:     boolean;
    generos:         FluffyGenero[] | null;
    seasons:         CollectionItemSeason[] | null;
    numSeasons:      number;
    paidCountries?:  PaidCountry[] | null;
    contentType:     ContentTypeEnum;
    lastMultimedia?: PurpleLastMultimedia;
}

export interface APICollection891 {
    page: APICollection1140_Page;
}

export interface APICollection1140_Page {
    items:       IndigoItem[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface IndigoItem {
    itemDestacado:       CollectionItem | null;
    collectionItems:     CollectionItem[];
    id:                  string;
    htmlUrl:             null | string;
    name:                string;
    title:               string;
    urlTitle:            null | string;
    anteTitle:           null | string;
    description:         null | string;
    generatePf:          boolean;
    context:             Context | null;
    template:            Template;
    designCode:          string;
    type:                TipoEnum;
    modificationDate:    Date;
    hidePublicationDate: boolean;
    previews:            PurplePreviews;
    seo:                 SEO;
    number:              number;
    size:                number;
    totalItems:          number;
    totalPages:          number;
    numElements:         number;
}

export interface CollectionItem {
    id:              string;
    webRtve:         null | string;
    htmlUrl:         string;
    ageRangeUid:     AgeRangeUid | null;
    ageRange:        AgeRange | null;
    name:            string;
    description:     string;
    promoText:       null | string;
    promoDesc:       null | string;
    channel:         CollectionItemChannel;
    imageSEO:        string;
    imgBackground:   string;
    imgBackground2:  string;
    imgPoster:       string;
    imgPoster2:      string;
    imgPortada:      string;
    imgPortada2:     string;
    imgCol:          string;
    imgCol2:         string;
    imgCol3:         string;
    imgBanner:       string;
    imgBanner2:      string;
    imgPinta:        string;
    imagePodcast:    string;
    mainTopic:       string;
    programType:     ProgramType | null;
    programTypeId:   number | null;
    isComplete:      boolean;
    noFragments:     boolean;
    generos:         TentacledGenero[] | null;
    seasons:         CollectionItemSeason[] | null;
    numSeasons:      number;
    paidCountries:   PaidCountry[] | null;
    contentType:     ContentTypeEnum;
    lastMultimedia?: FluffyLastMultimedia;
}

export interface TentacledGenero {
    generoInfUid: GeneroInfUid;
    generoInf:    GeneroInf;
}

export interface FluffyLastMultimedia {
    id:               string;
    subType:          TypeClass;
    type:             TypeClass;
    contentType:      ContentTypeEnum;
    htmlUrl:          string;
    title:            string;
    description:      string;
    shortDescription: string;
    alt:              string;
    duration:         number;
    ageRangeUid:      AgeRangeUid;
    ageRange:         AgeRange;
    publicationDate:  string;
    expirationDate:   null;
    modificationDate: string;
    dateOfEmission:   string;
    episode:          number;
    seasonTitle:      string;
    temporadaId:      number;
    promoText:        null;
    promoDesc:        null;
    previews:         LastMultimediaPreviews;
    presetHD:         boolean;
    requireLogged:    boolean;
    hasDRM:           boolean;
}

export interface APICollection12 {
    page: APICollection12_Page;
}

export interface APICollection12_Page {
    items:       IndecentItem[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface IndecentItem {
    itemDestacado:       null;
    collectionItems:     FluffyCollectionItem[];
    id:                  string;
    htmlUrl:             null;
    name:                string;
    title:               string;
    urlTitle:            null;
    anteTitle:           string;
    description:         string;
    generatePf:          boolean;
    context:             null;
    template:            Template;
    designCode:          string;
    type:                TipoEnum;
    modificationDate:    Date;
    hidePublicationDate: boolean;
    previews:            PurplePreviews;
    seo:                 SEO;
    number:              number;
    size:                number;
    totalItems:          number;
    totalPages:          number;
    numElements:         number;
}

export interface APICollection1533 {
    page: APICollection1533_Page;
}

export interface APICollection1533_Page {
    items:       HilariousItem[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface HilariousItem {
    itemDestacado:       null;
    collectionItems:     TentacledCollectionItem[];
    id:                  string;
    htmlUrl:             string;
    name:                string;
    title:               string;
    urlTitle:            string;
    anteTitle:           string;
    description:         string;
    generatePf:          boolean;
    context:             Context;
    template:            string;
    designCode:          string;
    type:                TipoEnum;
    modificationDate:    Date;
    hidePublicationDate: boolean;
    previews:            PurplePreviews;
    seo:                 SEO;
    number:              number;
    size:                number;
    totalItems:          number;
    totalPages:          number;
    numElements:         number;
}

export interface TentacledCollectionItem {
    id?:             string;
    webRtve?:        null;
    htmlUrl?:        string;
    ageRangeUid?:    AgeRangeUid;
    ageRange?:       AgeRange;
    name?:           PurpleName;
    description?:    string;
    promoText?:      null;
    promoDesc?:      null;
    channel?:        CollectionItemChannel;
    imageSEO?:       string;
    imgBackground?:  string;
    imgBackground2?: string;
    imgPoster?:      string;
    imgPoster2?:     string;
    imgPortada?:     string;
    imgPortada2?:    string;
    imgCol?:         string;
    imgCol2?:        string;
    imgCol3?:        string;
    imgBanner?:      string;
    imgBanner2?:     string;
    imgPinta?:       string;
    imagePodcast?:   string;
    mainTopic?:      CollectionItemMainTopic;
    programType?:    ProgramType;
    programTypeId?:  number;
    isComplete?:     boolean;
    noFragments?:    boolean;
    generos?:        FluffyGenero[];
    seasons?:        null;
    numSeasons?:     number;
    contentType:     ContentTypeEnum;
    lastMultimedia:  PurpleLastMultimedia;
}

export type CollectionItemMainTopic = "Televisión/Programas de TVE/Cine/Somos cine" | "Televisión/Programas de TVE/Cine/Cine de siempre" | "Televisión/Programas de TVE/Cine/Cine internacional" | "Televisión/Programas de TVE/Cine/Historia de nuestro cine";

export type PurpleName = "Somos cine" | "Cine de siempre" | "Cine internacional" | "Historia de nuestro cine";

export interface APICollection848 {
    page: APICollection1546_Page;
}

export interface APICollection1546_Page {
    items:       AmbitiousItem[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface AmbitiousItem {
    itemDestacado:       null;
    collectionItems:     StickyCollectionItem[];
    id:                  string;
    htmlUrl:             string;
    name:                string;
    title:               string;
    urlTitle:            string;
    anteTitle:           null | string;
    description:         null | string;
    generatePf:          boolean;
    context:             Context;
    template:            Template;
    designCode:          string;
    type:                TipoEnum;
    modificationDate:    Date;
    hidePublicationDate: boolean;
    previews:            PurplePreviews;
    seo:                 SEO;
    number:              number;
    size:                number;
    totalItems:          number;
    totalPages:          number;
    numElements:         number;
}

export interface StickyCollectionItem {
    id:             string;
    webRtve:        null;
    htmlUrl:        string;
    ageRangeUid:    AgeRangeUid;
    ageRange:       AgeRange;
    name:           PurpleName;
    description:    string;
    promoText:      null;
    promoDesc:      null;
    channel:        CollectionItemChannel;
    imageSEO:       string;
    imgBackground:  string;
    imgBackground2: string;
    imgPoster:      string;
    imgPoster2:     string;
    imgPortada:     string;
    imgPortada2:    string;
    imgCol:         string;
    imgCol2:        string;
    imgCol3:        string;
    imgBanner:      string;
    imgBanner2:     string;
    imgPinta:       string;
    imagePodcast:   string;
    mainTopic:      CollectionItemMainTopic;
    programType:    ProgramType;
    programTypeId:  number;
    isComplete:     boolean;
    noFragments:    boolean;
    generos:        FluffyGenero[];
    seasons:        null;
    numSeasons:     number;
    contentType:    ContentTypeEnum;
    lastMultimedia: PurpleLastMultimedia;
}

export interface APICollection17 {
    page: APICollection1098_Page;
}

export interface APICollection1890 {
    page: APICollection1890_Page;
}

export interface APICollection1890_Page {
    items:       CunningItem[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface CunningItem {
    itemDestacado:       null;
    collectionItems:     FluffyCollectionItem[];
    id:                  string;
    htmlUrl:             string;
    name:                string;
    title:               string;
    urlTitle:            string;
    anteTitle:           null;
    description:         string;
    generatePf:          boolean;
    context:             Context;
    template:            Template;
    designCode:          string;
    type:                TipoEnum;
    modificationDate:    Date;
    hidePublicationDate: boolean;
    previews:            PurplePreviews;
    seo:                 SEO;
    number:              number;
    size:                number;
    totalItems:          number;
    totalPages:          number;
    numElements:         number;
}

export interface APICollection2198 {
    page: APICollection204_Page;
}

export interface APICollection204_Page {
    items:       MagentaItem[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface MagentaItem {
    itemDestacado:       null;
    collectionItems:     StickyCollectionItem[];
    id:                  string;
    htmlUrl:             string;
    name:                string;
    title:               string;
    urlTitle:            string;
    anteTitle:           string;
    description:         string;
    generatePf:          boolean;
    context:             Context;
    template:            Template;
    designCode:          string;
    type:                TipoEnum;
    modificationDate:    Date;
    hidePublicationDate: boolean;
    previews:            PurplePreviews;
    seo:                 SEO;
    number:              number;
    size:                number;
    totalItems:          number;
    totalPages:          number;
    numElements:         number;
}

export interface APICollection2052 {
    page: APICollection2052_Page;
}

export interface APICollection2052_Page {
    items:       FriskyItem[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface FriskyItem {
    itemDestacado:       null;
    collectionItems:     IndigoCollectionItem[];
    id:                  string;
    htmlUrl:             string;
    name:                string;
    title:               string;
    urlTitle:            string;
    anteTitle:           string;
    description:         string;
    generatePf:          boolean;
    context:             Context;
    template:            Template;
    designCode:          string;
    type:                TipoEnum;
    modificationDate:    Date;
    hidePublicationDate: boolean;
    previews:            PurplePreviews;
    seo:                 SEO;
    number:              number;
    size:                number;
    totalItems:          number;
    totalPages:          number;
    numElements:         number;
}

export interface IndigoCollectionItem {
    id:              string;
    webRtve:         null;
    htmlUrl:         string;
    ageRangeUid:     AgeRangeUid | null;
    ageRange:        AgeRange | null;
    name:            FluffyName;
    description:     string;
    promoText:       FluffyPromoText | null;
    promoDesc:       null | string;
    channel:         CollectionItemChannel;
    imageSEO:        string;
    imgBackground:   string;
    imgBackground2:  string;
    imgPoster:       string;
    imgPoster2:      string;
    imgPortada:      string;
    imgPortada2:     string;
    imgCol:          string;
    imgCol2:         string;
    imgCol3:         string;
    imgBanner:       string;
    imgBanner2:      string;
    imgPinta:        string;
    imagePodcast:    string;
    mainTopic:       string;
    programType:     ProgramType;
    programTypeId:   number;
    isComplete:      boolean;
    noFragments:     boolean;
    generos:         FluffyGenero[];
    seasons:         null;
    numSeasons:      number;
    contentType:     ContentTypeEnum;
    lastMultimedia?: PurpleLastMultimedia;
    paidCountries?:  null;
}

export type FluffyName = "Imprescindibles" | "En portada" | "Somos Documentales" | "Documentos TV" | "11M, 20 años" | "Crónicas";

export type FluffyPromoText = "CADA JUEVES" | "PREMIO ONDAS" | "PREMIO ALARES";

export interface APICollection262 {
    page: APICollection262_Page;
}

export interface APICollection262_Page {
    items:       MischievousItem[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface MischievousItem {
    itemDestacado:       null;
    collectionItems:     ItemDestacado[];
    id:                  string;
    htmlUrl:             string;
    name:                string;
    title:               string;
    urlTitle:            string;
    anteTitle:           AnteTitleEnum;
    description:         string;
    generatePf:          boolean;
    context:             Context;
    template:            Template;
    designCode:          string;
    type:                TipoEnum;
    modificationDate:    Date;
    hidePublicationDate: boolean;
    previews:            PurplePreviews;
    seo:                 SEO;
    number:              number;
    size:                number;
    totalItems:          number;
    totalPages:          number;
    numElements:         number;
}

export interface ItemDestacado {
    id:             string;
    webRtve:        null | string;
    htmlUrl:        string;
    ageRangeUid:    AgeRangeUid | null;
    ageRange:       AgeRange | null;
    name:           string;
    description:    string;
    promoText:      null | string;
    promoDesc:      null | string;
    channel:        CollectionItemChannel;
    imageSEO:       string;
    imgBackground:  string;
    imgBackground2: string;
    imgPoster:      string;
    imgPoster2:     string;
    imgPortada:     string;
    imgPortada2:    string;
    imgCol:         string;
    imgCol2:        string;
    imgCol3:        string;
    imgBanner:      string;
    imgBanner2:     string;
    imgPinta:       string;
    imagePodcast:   string;
    mainTopic:      string;
    programType:    ProgramType | null;
    programTypeId:  number | null;
    isComplete:     boolean;
    noFragments:    boolean;
    generos:        FluffyGenero[];
    seasons:        null;
    numSeasons:     number;
    contentType:    ItemDestacadoAssetType;
    lastMultimedia: TentacledLastMultimedia;
}

export type ItemDestacadoAssetType = "audio" | "program";

export interface TentacledLastMultimedia {
    id:               string;
    subType:          TypeClass;
    type:             TypeClass;
    contentType:      ItemDestacadoAssetType;
    htmlUrl:          string;
    title:            string;
    description:      string;
    shortDescription: null | string;
    alt:              string;
    duration:         number;
    ageRangeUid:      null;
    ageRange:         null;
    publicationDate:  string;
    expirationDate:   null | string;
    modificationDate: string;
    dateOfEmission:   string;
    episode:          null;
    seasonTitle:      null;
    temporadaId:      null;
    promoText:        null;
    promoDesc:        null;
    previews:         LastMultimediaPreviews;
    presetHD:         boolean;
}

export interface APICollection270 {
    page: APICollection270_Page;
}

export interface APICollection270_Page {
    items:       BraggadociousItem[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface BraggadociousItem {
    itemDestacado:       null;
    collectionItems:     IndecentCollectionItem[];
    id:                  string;
    htmlUrl:             string;
    name:                string;
    title:               string;
    urlTitle:            string;
    anteTitle:           AnteTitleEnum;
    description:         string;
    generatePf:          boolean;
    context:             Context;
    template:            Template;
    designCode:          string;
    type:                TipoEnum;
    modificationDate:    Date;
    hidePublicationDate: boolean;
    previews:            PurplePreviews;
    seo:                 SEO;
    number:              number;
    size:                number;
    totalItems:          number;
    totalPages:          number;
    numElements:         number;
}

export interface IndecentCollectionItem {
    id:              string;
    webRtve:         null | string;
    htmlUrl:         string;
    ageRangeUid:     null;
    ageRange:        null;
    name:            string;
    description:     string;
    promoText:       null;
    promoDesc:       null | string;
    channel:         CollectionItemChannel;
    imageSEO:        string;
    imgBackground:   string;
    imgBackground2:  string;
    imgPoster:       string;
    imgPoster2:      string;
    imgPortada:      string;
    imgPortada2:     string;
    imgCol:          string;
    imgCol2:         string;
    imgCol3:         string;
    imgBanner:       string;
    imgBanner2:      string;
    imgPinta:        string;
    imagePodcast:    string;
    mainTopic:       string;
    programType:     ProgramType | null;
    programTypeId:   number | null;
    isComplete:      boolean;
    noFragments:     boolean;
    generos:         FluffyGenero[];
    seasons:         null;
    numSeasons:      number;
    paidCountries?:  null;
    contentType:     ItemDestacadoAssetType;
    lastMultimedia?: TentacledLastMultimedia;
}

export interface APICollection3329 {
    page: APICollection3329_Page;
}

export interface APICollection3329_Page {
    items:       Item1[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item1 {
    itemDestacado:       null;
    collectionItems:     HilariousCollectionItem[];
    id:                  string;
    htmlUrl:             null;
    name:                string;
    title:               string;
    urlTitle:            null;
    anteTitle:           null;
    description:         null;
    generatePf:          boolean;
    context:             null;
    template:            string;
    designCode:          string;
    type:                TipoEnum;
    modificationDate:    Date;
    hidePublicationDate: boolean;
    previews:            PurplePreviews;
    seo:                 SEO;
    number:              number;
    size:                number;
    totalItems:          number;
    totalPages:          number;
    numElements:         number;
}

export interface HilariousCollectionItem {
    id:             string;
    webRtve:        null;
    htmlUrl:        string;
    ageRangeUid:    AgeRangeUid;
    ageRange:       AgeRange;
    name:           string;
    description:    string;
    promoText:      PurplePromoText;
    promoDesc:      null;
    channel:        CollectionItemChannel;
    imageSEO:       string;
    imgBackground:  string;
    imgBackground2: string;
    imgPoster:      string;
    imgPoster2:     string;
    imgPortada:     string;
    imgPortada2:    string;
    imgCol:         string;
    imgCol2:        string;
    imgCol3:        string;
    imgBanner:      string;
    imgBanner2:     string;
    imgPinta:       string;
    imagePodcast:   string;
    mainTopic:      string;
    programType:    ProgramType;
    programTypeId:  number;
    isComplete:     boolean;
    noFragments:    boolean;
    generos:        PurpleGenero[];
    seasons:        null;
    numSeasons:     number;
    contentType:    ContentTypeEnum;
    lastMultimedia: PurpleLastMultimedia;
}

export interface APICollection3449 {
    page: APICollection3449_Page;
}

export interface APICollection3449_Page {
    items:       Item2[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item2 {
    itemDestacado:       null;
    collectionItems:     AmbitiousCollectionItem[];
    id:                  string;
    htmlUrl:             null;
    name:                string;
    title:               string;
    urlTitle:            null;
    anteTitle:           null;
    description:         null;
    generatePf:          boolean;
    context:             null;
    template:            string;
    designCode:          string;
    type:                TipoEnum;
    modificationDate:    Date;
    hidePublicationDate: boolean;
    previews:            PurplePreviews;
    seo:                 SEO;
    number:              number;
    size:                number;
    totalItems:          number;
    totalPages:          number;
    numElements:         number;
}

export interface AmbitiousCollectionItem {
    id:             string;
    webRtve:        null;
    htmlUrl:        string;
    ageRangeUid:    AgeRangeUid;
    ageRange:       AgeRange;
    name:           string;
    description:    string;
    promoText:      null;
    promoDesc:      null;
    channel:        CollectionItemChannel;
    imageSEO:       string;
    imgBackground:  string;
    imgBackground2: string;
    imgPoster:      string;
    imgPoster2:     string;
    imgPortada:     string;
    imgPortada2:    string;
    imgCol:         string;
    imgCol2:        string;
    imgCol3:        string;
    imgBanner:      string;
    imgBanner2:     string;
    imgPinta:       string;
    imagePodcast:   string;
    mainTopic:      string;
    programType:    ProgramType;
    programTypeId:  number;
    isComplete:     boolean;
    noFragments:    boolean;
    generos:        PurpleGenero[];
    seasons:        null;
    numSeasons:     number;
    contentType:    ContentTypeEnum;
    lastMultimedia: PurpleLastMultimedia;
}

export interface APICollection3475 {
    page: APICollection3475_Page;
}

export interface APICollection3475_Page {
    items:       Item3[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item3 {
    itemDestacado:       null;
    collectionItems:     CunningCollectionItem[];
    id:                  string;
    htmlUrl:             string;
    name:                string;
    title:               string;
    urlTitle:            string;
    anteTitle:           null;
    description:         string;
    generatePf:          boolean;
    context:             Context;
    template:            Template;
    designCode:          string;
    type:                TipoEnum;
    modificationDate:    Date;
    hidePublicationDate: boolean;
    previews:            PurplePreviews;
    seo:                 SEO;
    number:              number;
    size:                number;
    totalItems:          number;
    totalPages:          number;
    numElements:         number;
}

export interface CunningCollectionItem {
    id:             string;
    webRtve:        null;
    htmlUrl:        string;
    ageRangeUid:    AgeRangeUid;
    ageRange:       AgeRange;
    name:           string;
    description:    string;
    promoText:      null;
    promoDesc:      null;
    channel:        CollectionItemChannel;
    imageSEO:       string;
    imgBackground:  string;
    imgBackground2: string;
    imgPoster:      string;
    imgPoster2:     string;
    imgPortada:     string;
    imgPortada2:    string;
    imgCol:         string;
    imgCol2:        string;
    imgCol3:        string;
    imgBanner:      string;
    imgBanner2:     string;
    imgPinta:       string;
    imagePodcast:   string;
    mainTopic:      string;
    programType:    ProgramType;
    programTypeId:  number;
    isComplete:     boolean;
    noFragments:    boolean;
    generos:        FluffyGenero[];
    seasons:        null;
    numSeasons:     number;
    contentType:    ContentTypeEnum;
    lastMultimedia: PurpleLastMultimedia;
}

export interface APICollection3490 {
    page: APICollection3490_Page;
}

export interface APICollection3490_Page {
    items:       Item1[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface APICollection3525 {
    page: APICollection3525_Page;
}

export interface APICollection3525_Page {
    items:       Item4[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item4 {
    itemDestacado:       null;
    collectionItems:     MagentaCollectionItem[];
    id:                  string;
    htmlUrl:             string;
    name:                string;
    title:               string;
    urlTitle:            string;
    anteTitle:           null;
    description:         null;
    generatePf:          boolean;
    context:             Context;
    template:            string;
    designCode:          string;
    type:                TipoEnum;
    modificationDate:    Date;
    hidePublicationDate: boolean;
    previews:            PurplePreviews;
    seo:                 SEO;
    number:              number;
    size:                number;
    totalItems:          number;
    totalPages:          number;
    numElements:         number;
}

export interface MagentaCollectionItem {
    id?:             string;
    webRtve?:        null | string;
    htmlUrl?:        string;
    ageRangeUid?:    AgeRangeUid;
    ageRange?:       AgeRange;
    name?:           string;
    description?:    string;
    promoText?:      null | string;
    promoDesc?:      null;
    channel?:        CollectionItemChannel;
    imageSEO?:       string;
    imgBackground?:  string;
    imgBackground2?: string;
    imgPoster?:      string;
    imgPoster2?:     string;
    imgPortada?:     string;
    imgPortada2?:    string;
    imgCol?:         string;
    imgCol2?:        string;
    imgCol3?:        string;
    imgBanner?:      string;
    imgBanner2?:     string;
    imgPinta?:       string;
    imagePodcast?:   string;
    mainTopic?:      string;
    programType?:    ProgramType;
    programTypeId?:  number;
    isComplete?:     boolean;
    noFragments?:    boolean;
    generos?:        FluffyGenero[] | null;
    seasons?:        null;
    numSeasons?:     number;
    contentType:     ContentTypeEnum;
    lastMultimedia:  PurpleLastMultimedia;
}

export interface APICollection3530 {
    page: APICollection3530_Page;
}

export interface APICollection3530_Page {
    items:       Item5[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item5 {
    itemDestacado:       null;
    collectionItems:     FriskyCollectionItem[];
    id:                  string;
    htmlUrl:             null;
    name:                string;
    title:               string;
    urlTitle:            null;
    anteTitle:           null;
    description:         null;
    generatePf:          boolean;
    context:             null;
    template:            string;
    designCode:          string;
    type:                TipoEnum;
    modificationDate:    Date;
    hidePublicationDate: boolean;
    previews:            PurplePreviews;
    seo:                 SEO;
    number:              number;
    size:                number;
    totalItems:          number;
    totalPages:          number;
    numElements:         number;
}

export interface FriskyCollectionItem {
    id:             string;
    webRtve:        null;
    htmlUrl:        string;
    ageRangeUid:    AgeRangeUid;
    ageRange:       AgeRange;
    name:           string;
    description:    string;
    promoText:      string;
    promoDesc:      null;
    channel:        CollectionItemChannel;
    imageSEO:       string;
    imgBackground:  string;
    imgBackground2: string;
    imgPoster:      string;
    imgPoster2:     string;
    imgPortada:     string;
    imgPortada2:    string;
    imgCol:         string;
    imgCol2:        string;
    imgCol3:        string;
    imgBanner:      string;
    imgBanner2:     string;
    imgPinta:       string;
    imagePodcast:   string;
    mainTopic:      string;
    programType:    ProgramType;
    programTypeId:  number;
    isComplete:     boolean;
    noFragments:    boolean;
    generos:        FluffyGenero[];
    seasons:        null;
    numSeasons:     number;
    contentType:    ContentTypeEnum;
    lastMultimedia: PurpleLastMultimedia;
}

export interface APICollection3535 {
    page: APICollection3535_Page;
}

export interface APICollection3535_Page {
    items:       Item6[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item6 {
    itemDestacado:       null;
    collectionItems:     PurpleCollectionItem[];
    id:                  string;
    htmlUrl:             string;
    name:                string;
    title:               string;
    urlTitle:            string;
    anteTitle:           null;
    description:         null;
    generatePf:          boolean;
    context:             Context;
    template:            Template;
    designCode:          string;
    type:                TipoEnum;
    modificationDate:    Date;
    hidePublicationDate: boolean;
    previews:            PurplePreviews;
    seo:                 SEO;
    number:              number;
    size:                number;
    totalItems:          number;
    totalPages:          number;
    numElements:         number;
}

export interface APICollection3539 {
    page: APICollection3539_Page;
}

export interface APICollection3539_Page {
    items:       Item7[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item7 {
    itemDestacado:       null;
    collectionItems:     MagentaCollectionItem[];
    id:                  string;
    htmlUrl:             string;
    name:                string;
    title:               TemporadaEnum;
    urlTitle:            string;
    anteTitle:           string;
    description:         string;
    generatePf:          boolean;
    context:             Context;
    template:            string;
    designCode:          string;
    type:                TipoEnum;
    modificationDate:    Date;
    hidePublicationDate: boolean;
    previews:            PurplePreviews;
    seo:                 SEO;
    number:              number;
    size:                number;
    totalItems:          number;
    totalPages:          number;
    numElements:         number;
}

export type TemporadaEnum = "Premios Goya 2025" | "Benidorm Fest 2025" | "Europa 2025" | "Europa 2024";

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
    items:       Item8[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item8 {
    itemDestacado:       null;
    collectionItems:     MischievousCollectionItem[];
    id:                  string;
    htmlUrl:             string;
    name:                string;
    title:               string;
    urlTitle:            string;
    anteTitle:           AnteTitleEnum;
    description:         string;
    generatePf:          boolean;
    context:             Context;
    template:            string;
    designCode:          string;
    type:                TipoEnum;
    modificationDate:    Date;
    hidePublicationDate: boolean;
    previews:            PurplePreviews;
    seo:                 SEO;
    number:              number;
    size:                number;
    totalItems:          number;
    totalPages:          number;
    numElements:         number;
}

export interface MischievousCollectionItem {
    id:             string;
    webRtve:        null | string;
    htmlUrl:        string;
    ageRangeUid:    null;
    ageRange:       null;
    name:           string;
    description:    string;
    promoText:      null;
    promoDesc:      null | string;
    channel:        CollectionItemChannel;
    imageSEO:       string;
    imgBackground:  string;
    imgBackground2: string;
    imgPoster:      string;
    imgPoster2:     string;
    imgPortada:     string;
    imgPortada2:    string;
    imgCol:         string;
    imgCol2:        string;
    imgCol3:        string;
    imgBanner:      string;
    imgBanner2:     string;
    imgPinta:       string;
    imagePodcast:   string;
    mainTopic:      string;
    programType:    ProgramType | null;
    programTypeId:  number | null;
    isComplete:     boolean;
    noFragments:    boolean;
    generos:        FluffyGenero[] | null;
    seasons:        null;
    numSeasons:     number;
    contentType:    ContentTypeEnum;
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
    items:       Item9[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item9 {
    itemDestacado:       null;
    collectionItems:     BraggadociousCollectionItem[];
    id:                  string;
    htmlUrl:             string;
    name:                string;
    title:               string;
    urlTitle:            string;
    anteTitle:           null;
    description:         string;
    generatePf:          boolean;
    context:             Context;
    template:            Template;
    designCode:          string;
    type:                TipoEnum;
    modificationDate:    Date;
    hidePublicationDate: boolean;
    previews:            PurplePreviews;
    seo:                 SEO;
    number:              number;
    size:                number;
    totalItems:          number;
    totalPages:          number;
    numElements:         number;
}

export interface BraggadociousCollectionItem {
    id:              string;
    webRtve:         null;
    htmlUrl:         string;
    ageRangeUid:     AgeRangeUid;
    ageRange:        AgeRange;
    name:            string;
    description:     string;
    promoText:       null | string;
    promoDesc:       null;
    channel:         CollectionItemChannel;
    imageSEO:        string;
    imgBackground:   string;
    imgBackground2:  string;
    imgPoster:       string;
    imgPoster2:      string;
    imgPortada:      string;
    imgPortada2:     string;
    imgCol:          string;
    imgCol2:         string;
    imgCol3:         string;
    imgBanner:       string;
    imgBanner2:      string;
    imgPinta:        string;
    imagePodcast:    string;
    mainTopic:       string;
    programType:     ProgramType;
    programTypeId:   number;
    isComplete:      boolean;
    noFragments:     boolean;
    generos:         FluffyGenero[];
    seasons:         CollectionItemSeason[] | null;
    numSeasons:      number;
    contentType:     ContentTypeEnum;
    lastMultimedia?: PurpleLastMultimedia;
    paidCountries?:  PaidCountry[] | null;
}

export interface APICollection761 {
    page: APICollection761_Page;
}

export interface APICollection761_Page {
    items:       Item10[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item10 {
    itemDestacado:       null;
    collectionItems:     CollectionItem1[];
    id:                  string;
    htmlUrl:             string;
    name:                string;
    title:               string;
    urlTitle:            string;
    anteTitle:           string;
    description:         string;
    generatePf:          boolean;
    context:             Context;
    template:            Template;
    designCode:          string;
    type:                TipoEnum;
    modificationDate:    Date;
    hidePublicationDate: boolean;
    previews:            PurplePreviews;
    seo:                 SEO;
    number:              number;
    size:                number;
    totalItems:          number;
    totalPages:          number;
    numElements:         number;
}

export interface CollectionItem1 {
    id:              string;
    webRtve:         null;
    htmlUrl:         string;
    ageRangeUid:     AgeRangeUid | null;
    ageRange:        AgeRange | null;
    name:            string;
    description:     string;
    promoText:       null | string;
    promoDesc:       null | string;
    channel:         CollectionItemChannel;
    imageSEO:        string;
    imgBackground:   string;
    imgBackground2:  string;
    imgPoster:       string;
    imgPoster2:      string;
    imgPortada:      string;
    imgPortada2:     string;
    imgCol:          string;
    imgCol2:         string;
    imgCol3:         string;
    imgBanner:       string;
    imgBanner2:      string;
    imgPinta:        string;
    imagePodcast:    string;
    mainTopic:       string;
    programType:     ProgramType | null;
    programTypeId:   number | null;
    isComplete:      boolean;
    noFragments:     boolean;
    generos:         FluffyGenero[];
    seasons:         CollectionItemSeason[] | null;
    numSeasons:      number;
    paidCountries?:  PaidCountry[] | null;
    contentType:     ContentTypeEnum;
    lastMultimedia?: PurpleLastMultimedia;
}

export interface APICollection821 {
    page: APICollection821_Page;
}

export interface APICollection821_Page {
    items:       Item11[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item11 {
    itemDestacado:       null;
    collectionItems:     PurpleCollectionItem[];
    id:                  string;
    htmlUrl:             string;
    name:                string;
    title:               string;
    urlTitle:            string;
    anteTitle:           null;
    description:         string;
    generatePf:          boolean;
    context:             Context;
    template:            Template;
    designCode:          string;
    type:                TipoEnum;
    modificationDate:    Date;
    hidePublicationDate: boolean;
    previews:            PurplePreviews;
    seo:                 SEO;
    number:              number;
    size:                number;
    totalItems:          number;
    totalPages:          number;
    numElements:         number;
}

export interface APICollection912 {
    page: APICollection262_Page;
}

export interface APICollection931 {
    page: APICollection931_Page;
}

export interface APICollection931_Page {
    items:       Item12[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item12 {
    itemDestacado:       ItemDestacado;
    collectionItems:     ItemDestacado[];
    id:                  string;
    htmlUrl:             null;
    name:                string;
    title:               string;
    urlTitle:            null;
    anteTitle:           AnteTitleEnum;
    description:         null;
    generatePf:          boolean;
    context:             null;
    template:            Template;
    designCode:          string;
    type:                TipoEnum;
    modificationDate:    Date;
    hidePublicationDate: boolean;
    previews:            PurplePreviews;
    seo:                 SEO;
    number:              number;
    size:                number;
    totalItems:          number;
    totalPages:          number;
    numElements:         number;
}

export interface APILivesPaginaPortada {
    page: APILivesAgrDirectos1_Page;
}

export interface APILivesAgrDirectos1_Page {
    items:       Item13[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item13 {
    uri:             string;
    id:              string;
    title:           string;
    htmlUrl:         string;
    classColeccion:  string;
    tipo:            PurpleTipo;
    platform:        number | null;
    metaTitle:       null | string;
    metaDescription: null | string;
    metaKeywords:    null;
    canonical:       null;
    permalink:       string;
    orden?:          number;
}

export type PurpleTipo = "general" | "especial";

export interface APILivesBroadcasts37150 {
    page: APILivesAgrDirectos10187_DirectosPage;
}

export interface APILivesAgrDirectos10187_DirectosPage {
    items:       Item14[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item14 {
    uri:            string;
    id:             string;
    htmlUrl:        string;
    titulo?:        string;
    inicio:         null | string;
    live:           boolean;
    porcentaje:     number | null;
    tipo:           FluffyTipo;
    contentType:    "directo";
    permalink:      string;
    descripcion:    string;
    logo:           string;
    logo_desktop:   string;
    imagen:         string;
    thumb:          string;
    thumb_square:   string;
    thumb_vertical: string;
    thumbnailer:    boolean;
    thumbPrio:      boolean;
    idAsset:        string;
    classDirecto:   string;
    etiqueta:       null | string;
    idPrograma:     null;
    url:            null;
    agrLiveDefault: AgrLiveDefault | null;
    duracion:       number | null;
    sgce:           null | string;
    idGolumi:       string;
    canal:          string;
    before:         Before | null;
    now:            Before | null;
    next:           Before | null;
    channelStatsID: null;
    hasDRM:         boolean;
    idLicencia:     null;
    orden?:         number;
    requireLogged:  boolean;
    type:           ContentTypeEnum;
}

export interface AgrLiveDefault {
    uri:     string;
    id:      string;
    titulo:  Titulo;
    htmlUrl: string;
}

export type Titulo = "Canales temáticos" | "Ahora en emisión" | "RNE streamings" | "Deportes";

export interface Before {
    titulo:   string;
    inicio:   string;
    fin:      string;
    duracion: number;
    sgce:     null | string;
}

export type FluffyTipo = "broadcast" | "peticion" | "periodic-peticion";

export interface APILivesBroadcasts558 {
    page: APILivesAgrDirectos1_DirectosPage;
}

export interface APILivesAgrDirectos1_DirectosPage {
    items:       Item15[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item15 {
    uri:              string;
    id:               string;
    htmlUrl:          string;
    titulo?:          string;
    inicio:           null | string;
    live:             boolean;
    porcentaje:       number | null;
    tipo:             FluffyTipo;
    contentType:      "directo";
    permalink:        null | string;
    descripcion:      null | string;
    logo:             string;
    logo_desktop:     string;
    imagen:           string;
    thumb:            string;
    thumb_square:     string;
    thumb_vertical:   string;
    thumbnailer?:     boolean;
    thumbPrio?:       boolean;
    idAsset:          null | string;
    classDirecto:     string;
    etiqueta:         null;
    idPrograma:       null | string;
    url:              null;
    agrLiveDefault:   AgrLiveDefault | null;
    duracion:         number | null;
    sgce?:            null | string;
    idGolumi?:        string;
    canal?:           string;
    before?:          Before | null;
    now?:             Before | null;
    next?:            Before | null;
    channelStatsID?:  null;
    hasDRM:           boolean;
    idLicencia:       null;
    orden?:           number;
    requireLogged:    boolean;
    type:             ContentTypeEnum | null;
    antetitulo?:      null | string;
    assetVod?:        null;
    metaTitle?:       string;
    metaDescription?: string;
    keywords?:        null;
    canonical?:       null;
    vertical?:        Vertical | null;
    hasPfNews?:       boolean;
    dias?:            number[];
    status?:          Status;
}

export interface Status {
    id:          string;
    description: string;
}

export interface Vertical {
}

export interface APILivesBroadcasts4 {
    page: APILivesBroadcasts1_Page;
}

export interface APILivesBroadcasts1_Page {
    items:       Item16[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item16 {
    uri:            string;
    id:             string;
    htmlUrl:        string;
    titulo:         string;
    inicio:         string;
    live:           boolean;
    porcentaje:     number;
    tipo:           FluffyTipo;
    contentType:    "directo";
    permalink:      string;
    descripcion:    string;
    logo:           string;
    logo_desktop:   string;
    imagen:         string;
    thumb:          string;
    thumb_square:   string;
    thumb_vertical: string;
    thumbnailer:    boolean;
    thumbPrio:      boolean;
    idAsset:        string;
    classDirecto:   string;
    etiqueta:       null;
    idPrograma:     null;
    url:            null;
    agrLiveDefault: null;
    duracion:       number;
    sgce:           string;
    idGolumi:       string;
    canal:          string;
    before:         Before;
    now:            Before;
    next:           Before;
    channelStatsID: null;
    hasDRM:         boolean;
    idLicencia:     null;
    requireLogged:  boolean;
    type:           ContentTypeEnum;
}

export interface APILivesPeticiones42183 {
    page: APILivesBroadcasts22088_Page;
}

export interface APILivesBroadcasts22088_Page {
    items:       Item17[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item17 {
    uri:              string;
    id:               string;
    htmlUrl:          string;
    titulo:           string;
    inicio:           string;
    live:             boolean;
    porcentaje:       number;
    tipo:             FluffyTipo;
    contentType:      "directo";
    permalink:        null | string;
    descripcion:      null | string;
    logo:             string;
    logo_desktop:     string;
    imagen:           string;
    thumb:            string;
    thumb_square:     string;
    thumb_vertical:   string;
    thumbnailer?:     boolean;
    thumbPrio?:       boolean;
    idAsset:          string;
    classDirecto:     string;
    etiqueta:         null | string;
    idPrograma:       null | string;
    url:              null;
    agrLiveDefault:   AgrLiveDefault;
    duracion:         number;
    sgce?:            null;
    idGolumi?:        string;
    canal?:           string;
    before?:          Before;
    now?:             Before;
    next?:            Before;
    channelStatsID?:  null;
    hasDRM:           boolean;
    idLicencia:       null;
    requireLogged:    boolean;
    type:             ContentTypeEnum;
    antetitulo?:      string;
    assetVod?:        null;
    metaTitle?:       string;
    metaDescription?: string;
    keywords?:        null;
    canonical?:       null;
    vertical?:        TypeClass | null;
    hasPfNews?:       boolean;
}

export interface APIProgramas1000874_Multimedias {
    page: APIProgramas1000090_AudiosPage;
}

export interface APIProgramas1000090_AudiosPage {
    items:       Item18[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item18 {
    uri:                      string;
    htmlUrl:                  string;
    htmlShortUrl:             string;
    id:                       string;
    language:                 Lang;
    anteTitle:                PurpleAnteTitle;
    anteTitleUrl:             null;
    longTitle:                string;
    shortTitle:               string;
    mainCategoryRef:          string;
    popularity:               string;
    popHistoric:              string;
    numVisits:                string;
    publicationDate:          string;
    modificationDate:         string;
    pubState:                 PubState;
    mainTopic:                string;
    topicsName:               any[];
    breadCrumbRef:            string;
    imageSEO:                 string;
    thumbnail:                null | string;
    previews:                 LastMultimediaPreviews;
    expirationDate:           null;
    dateOfEmission:           string;
    publicationDateTimestamp: number;
    productionDate:           null;
    contentType:              ItemDestacadoAssetType;
    consumption:              PurpleConsumption;
    type:                     TypeClass;
    assetType:                ItemDestacadoAssetType;
    statistics:               Statistics;
    alt:                      null | string;
    foot:                     null;
    shortDescription:         string;
    description:              string;
    otherTopicsRefs:          string;
    qualities:                Quality[];
    qualitiesRef:             string;
    duration:                 number;
    programInfo:              ProgramInfo;
    sgce:                     null;
    dg:                       null;
    sip:                      null;
    commentOptions:           null;
    cuePointsRef:             string;
    configPlayerRef:          string;
    transcriptionRef:         string;
    temporadasRef:            string;
    temporada:                null;
    temporadaShortTitle:      null;
    programRef:               string;
    relacionadosRef:          string;
    relManualesRef:           string;
    publicidadRef:            null;
    comentariosRef:           string;
    relatedByLangRef:         string;
    sign:                     { [key: string]: SignEnum | null };
    estadisticasRef:          string;
    ageRangeUid:              null;
    ageRange:                 null;
    contentInitDate:          null;
    contentEndDate:           null;
    disabledAlacarta:         boolean;
    noRegistrationRequired:   boolean;
    promoTitle:               null;
    promoDesc:                null;
    title:                    string;
    generos:                  PurpleGenero[];
}

export type PurpleAnteTitle = "No sangro purpurina" | "La teoría de la amistad" | "La Teoría de la Amistad" | "Santísima Charleta" | "Santísima charleta" | "GG WP";

export type PurpleConsumption = "podcast" | "ondemand";

export interface ProgramInfo {
    id:               string;
    title:            string;
    htmlUrl:          string;
    channelPermalink: Permalink;
    ageRangeUid:      AgeRangeUid | null;
    ageRange:         AgeRange | null;
    programType:      ProgramType | null;
    programTypeId:    null | string;
    outOfEmission:    boolean;
}

export interface Quality {
    bitRate:        number;
    bitRateUnit:    "Kbps" | null;
    duration:       number;
    filePath:       string;
    filesize:       number | null;
    identifier:     number;
    language:       Lang;
    numOfChannels?: number;
    preset:         Preset;
    type:           QualityType;
    previewPath?:   string;
    height?:        number;
    width?:         number;
}

export type Preset = "HIGH" | "HD_FULL" | "HD_READY" | "HQ" | "MED" | "Original";

export type QualityType = "audio/mpeg" | "application/mp4";

export type SignEnum = "rtve" | "Radio 5" | "rne" | "RTVE" | "RTVE Catalunya" | "RTVE.cat" | "RNE" | "alacarta";

export interface Statistics {
    numComentarios: number;
    numCompartidas: number;
}

export interface APIProgramas178476 {
    page: APIProgramas1000149_Page;
}

export interface APIProgramas1000149_Page {
    items:       Item19[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item19 {
    uri:                      string;
    htmlUrl:                  string;
    htmlShortUrl:             string;
    id:                       string;
    ctvId:                    number | null;
    oldCtvId:                 null;
    uid:                      string;
    name:                     string;
    permalink:                string;
    language:                 Lang;
    longTitle:                string;
    shortTitle:               string;
    description:              string;
    audioDescription:         boolean;
    longDescription:          string;
    contact:                  null;
    emission:                 null | string;
    publicationDate:          string;
    expirationDate:           null;
    pubState:                 PubState;
    orden:                    number;
    imageSEO:                 string;
    logo:                     string;
    logo2:                    string;
    thumbnail:                string;
    imgBackground:            string;
    imgBackground2:           string;
    imgPoster:                string;
    imgPoster2:               string;
    imgPortada:               string;
    imgPortada2:              string;
    imgCol:                   string;
    imgCol2:                  string;
    imgCol3:                  string;
    imgBanner:                string;
    imgBanner2:               string;
    imgPinta:                 string;
    imagePodcast:             string;
    outOfEmission:            boolean;
    channel:                  ItemChannel;
    fanBoxID:                 null;
    ageRangeUid:              AgeRangeUid | null;
    ageRange:                 AgeRange | null;
    recommendAgesForChilds:   any[];
    seccionesRef:             string;
    temporadasRef:            string;
    temporadaShortTitle:      null;
    temporada:                null;
    agrupadoresRef:           string;
    videosRef:                string;
    audiosRef:                string;
    multimediasRef:           string;
    relacionadosRef:          string;
    otherChannelsRef:         string;
    childrenInfoRef:          string;
    filtro:                   null;
    webRtve:                  null;
    webOficial:               string;
    promoText:                PurplePromoText | null;
    promoDesc:                null | string;
    relatedByLangRef:         string;
    modificationDate:         string;
    publicationDateTimestamp: number;
    contentType:              "programa";
    sgce:                     string;
    sgce2:                    null;
    kantar:                   null | string;
    generos:                  FluffyGenero[];
    seasons:                  null;
    numSeasons:               number;
    productionDate:           PurpleProductionDate | null;
    rrss:                     null | string;
    rrssApps:                 RrssApp[];
    mainTopic:                string;
    mainTopicUid:             string;
    title:                    string;
    disabledAlacarta:         boolean;
    programType:              ProgramType | null;
    programTypeId?:           number | null;
    isComplete:               boolean;
    inAZList:                 boolean;
    director:                 null | string;
    producedBy:               null | string;
    showMan:                  null | string;
    casting:                  null | string;
    technicalTeam:            null | string;
    idWiki:                   null | string;
    idImdb:                   string;
    showFragments:            boolean;
    notDownloadable:          boolean;
    paidCountries:            null;
    escort:                   Escort;
    paidContent:              boolean;
    country:                  "ES";
    programTypeID?:           number;
}

export type PurpleProductionDate = "01-01-2023 00:00:00" | "01-01-2024 00:00:00" | "01-01-2024 14:27:27" | "20-02-2024 01:00:00" | "01-01-1994 10:37:53" | "01-01-2025 00:00:00";

export interface APIProgramas40111_Audios {
    page: APIProgramas1000149_AudiosPage;
}

export interface APIProgramas1000149_AudiosPage {
    items:       Item20[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item20 {
    uri:                      string;
    htmlUrl:                  string;
    htmlShortUrl:             string;
    id:                       string;
    language:                 Lang;
    anteTitle:                FluffyAnteTitle | null;
    anteTitleUrl:             null;
    longTitle:                string;
    shortTitle:               string;
    mainCategoryRef:          string;
    popularity:               string;
    popHistoric:              string;
    numVisits:                string;
    publicationDate:          string;
    modificationDate:         string;
    pubState:                 PubState;
    mainTopic:                ItemMainTopic;
    mainTopicUid?:            MainTopicUid;
    topicsName:               string[];
    breadCrumbRef:            string;
    imageSEO:                 string;
    thumbnail:                string;
    previews:                 LastMultimediaPreviews;
    expirationDate:           null | string;
    dateOfEmission:           string;
    publicationDateTimestamp: number;
    productionDate:           null | string;
    contentType:              ItemDestacadoAssetType;
    consumption:              PurpleConsumption;
    type:                     TypeClass;
    assetType:                ItemDestacadoAssetType;
    statistics:               Statistics;
    alt:                      null | string;
    foot:                     null;
    shortDescription:         null | string;
    description:              string;
    otherTopicsRefs:          string;
    qualities:                Quality[];
    qualitiesRef:             string;
    duration:                 number;
    programInfo:              ProgramInfo;
    sgce:                     null | string;
    dg:                       null;
    sip:                      null;
    commentOptions:           null;
    cuePointsRef:             string;
    configPlayerRef:          string;
    transcriptionRef:         string;
    temporadasRef:            string;
    temporada:                null;
    temporadaShortTitle:      null;
    programRef:               string;
    relacionadosRef:          string;
    relManualesRef:           string;
    publicidadRef:            null;
    comentariosRef:           string;
    relatedByLangRef:         string;
    sign:                     { [key: string]: SignEnum | null };
    estadisticasRef:          string;
    ageRangeUid:              AgeRangeUid | null;
    ageRange:                 null | string;
    contentInitDate:          null;
    contentEndDate:           null;
    disabledAlacarta:         boolean;
    noRegistrationRequired:   boolean;
    promoTitle:               null | string;
    promoDesc:                null;
    title:                    string;
    generos:                  FluffyGenero[];
}

export type FluffyAnteTitle = "Algo habrás hecho" | "Protagonistas del aula" | "Te crío mucho" | "De éxodos" | "Éxodos" | "Educando Emociones" | "Educando emociones" | "Redes de aprendizaje" | "¿Y si...?" | "¿Y si?" | "¿Y si....?" | "De Éxodos";

export type ItemMainTopic = "Radio/Especiales/RNE solo en Podcast/Algo habrás hecho" | "Radio/Programas de RNE/Educación/Protagonistas del aula" | "Radio/Programas de RNE/Educación/Te crío mucho" | "Radio/Especiales/RNE solo en Podcast/De éxodos" | "Televisión/Programas de TVE/Informativos/Parlamento" | "Radio/Especiales/RNE solo en Podcast/Educando emociones" | "Radio/Especiales/RNE solo en Podcast/Redes de aprendizaje" | "Radio/Especiales/RNE solo en Podcast/¿Y si...?" | "Televisión/Programas de TVE/Informativos/Especiales informativos";

export type MainTopicUid = "TE_RNE/TE_SESPE03/TE_RRNE19P/SHO_ALGRNE" | "TE_RNE/TE_RPROGR/TE_RNOKJGK/TE_SCRIOMU" | "TE_RNE/TE_SESPE03/TE_RRNE19P/SHO_DEEMUS" | "TE_TVE/TE_PROGRA/TE_PINFORM/TE_SPARLA" | "TE_RNE/TE_SESPE03/TE_RRNE19P/TE_SEDUEMO" | "TE_RNE/TE_SESPE03/TE_RRNE19P/TE_SREDAPR" | "TE_RNE/TE_SESPE03/TE_RRNE19P/TE_SYSISIS" | "TE_TVE/TE_PROGRA/TE_PINFORM/TE_SESPECA";

export interface APIVideos16440364 {
    page: APIProgramas1000230_MultimediasPage;
}

export interface APIProgramas1000230_MultimediasPage {
    items:       Item21[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item21 {
    uri:                      string;
    htmlUrl:                  string;
    htmlShortUrl:             string;
    id:                       string;
    language:                 Lang;
    anteTitle:                TentacledAnteTitle | null;
    anteTitleUrl:             null;
    longTitle:                string;
    shortTitle:               null | string;
    mainCategoryRef:          string;
    popularity:               string;
    popHistoric:              string;
    numVisits:                string;
    publicationDate:          string;
    modificationDate:         string;
    pubState:                 PubState;
    mainTopic:                string;
    topicsName:               string[];
    breadCrumbRef:            string;
    imageSEO:                 string;
    thumbnail:                null | string;
    previews:                 LastMultimediaPreviews;
    expirationDate:           null;
    dateOfEmission:           string;
    publicationDateTimestamp: number;
    productionDate:           null;
    contentType:              PurpleTType;
    consumption:              PurpleConsumption;
    type:                     TypeClass;
    subType?:                 TypeClass | null;
    assetType:                PurpleTType;
    statistics:               Statistics;
    alt:                      null | string;
    foot:                     null;
    shortDescription:         null | string;
    description:              null | string;
    otherTopicsRefs:          string;
    qualities:                Quality[];
    qualitiesRef:             string;
    duration:                 number;
    programInfo:              ProgramInfo;
    sgce:                     null | string;
    dg:                       null | string;
    sip:                      null;
    commentOptions:           null;
    cuePointsRef:             string;
    configPlayerRef:          string;
    transcriptionRef:         string;
    temporadaId?:             null;
    temporadasRef:            string;
    temporada:                null;
    temporadaShortTitle:      null;
    temporadaOrden?:          null;
    programRef:               string;
    relacionadosRef:          string;
    relManualesRef:           string;
    publicidadRef:            null;
    comentariosRef:           string;
    relatedByLangRef:         string;
    sign:                     { [key: string]: SignEnum | null };
    estadisticasRef:          string;
    ageRangeUid:              null;
    ageRange:                 null;
    contentInitDate:          null;
    contentEndDate:           null;
    disabledAlacarta:         boolean;
    notDownloadable?:         boolean;
    noRegistrationRequired:   boolean;
    promoTitle:               null;
    promoDesc:                null;
    episode?:                 number;
    subtitleRef?:             null | string;
    aspectRatio?:             "f16x9";
    title:                    string;
    idWiki?:                  null;
    idImdb?:                  null;
    director?:                PurpleDirector | null;
    producedBy?:              null;
    showMan?:                 null;
    casting?:                 null;
    generos:                  PurpleGenero[];
    technicalTeam?:           null;
    audioDescription?:        null;
    audioOriginal?:           null | string;
    allowedInCountry?:        boolean;
    paidContent?:             boolean;
    geolocalizado?:           boolean;
    paidCountries?:           null;
    escort?:                  null;
    hasCuePoints?:            boolean;
    country?:                 "ES";
    hasDRM?:                  boolean;
    requireLogged?:           boolean;
}

export type TentacledAnteTitle = "Santísima Charleta" | "Santísima charleta" | "Brainrot" | "Fuera de Patrón" | "Fuera de patrón";

export type PurpleTType = "video" | "audio";

export type PurpleDirector = "Narciso Ibáñez Serrador" | "José Luis Cuevas | Miquel Fortuny" | "Penny Jay" | "Chenta Tsai | Putochinomaricón" | "Paula Moreu" | "Antonio Gárate" | "José Carlos Gallardo";

export interface APIProgramas175378_Relacionados {
    page: APIProgramas1000230_RelacionadosPage;
}

export interface APIProgramas1000230_RelacionadosPage {
    items:       Item22[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item22 {
    uri:                      string;
    htmlUrl:                  string;
    htmlShortUrl:             string;
    id:                       string;
    ctvId:                    number | null;
    oldCtvId:                 null;
    uid:                      string;
    name:                     string;
    permalink:                string;
    language:                 Lang;
    longTitle:                string;
    shortTitle:               string;
    description:              string;
    audioDescription:         boolean;
    longDescription:          string;
    contact:                  null;
    emission:                 null | string;
    publicationDate:          string;
    expirationDate:           null;
    pubState:                 PubState;
    orden:                    number;
    imageSEO:                 string;
    logo:                     string;
    logo2:                    string;
    thumbnail:                string;
    imgBackground:            string;
    imgBackground2:           string;
    imgPoster:                string;
    imgPoster2:               string;
    imgPortada:               string;
    imgPortada2:              string;
    imgCol:                   string;
    imgCol2:                  string;
    imgCol3:                  string;
    imgBanner:                string;
    imgBanner2:               string;
    imgPinta:                 string;
    imagePodcast:             string;
    outOfEmission:            boolean;
    channel:                  ItemChannel;
    fanBoxID:                 null;
    ageRangeUid:              AgeRangeUid | null;
    ageRange:                 AgeRange | null;
    recommendAgesForChilds:   any[];
    seccionesRef:             string;
    temporadasRef:            string;
    temporadaShortTitle:      null;
    temporada:                null;
    agrupadoresRef:           string;
    videosRef:                string;
    audiosRef:                string;
    multimediasRef:           string;
    relacionadosRef:          string;
    otherChannelsRef:         string;
    childrenInfoRef:          string;
    filtro:                   null;
    webRtve:                  null;
    webOficial:               string;
    promoText:                PromoT | null;
    promoDesc:                null | string;
    relatedByLangRef:         string;
    modificationDate:         string;
    publicationDateTimestamp: number;
    contentType:              "programa";
    sgce:                     null | string;
    sgce2:                    null;
    kantar:                   null | string;
    generos:                  FluffyGenero[];
    seasons:                  null;
    numSeasons:               number;
    productionDate:           PurpleProductionDate | null;
    rrss:                     null | string;
    rrssApps:                 RrssApp[];
    mainTopic:                string;
    mainTopicUid:             string;
    title:                    string;
    disabledAlacarta:         boolean;
    programType:              ProgramType | null;
    programTypeId:            number | null;
    isComplete:               boolean;
    inAZList:                 boolean;
    director:                 null | string;
    producedBy:               null | string;
    showMan:                  null | string;
    casting:                  null | string;
    technicalTeam:            null | string;
    idWiki:                   null | string;
    idImdb:                   PurpleIDImdb;
    showFragments:            boolean;
    notDownloadable:          boolean;
    paidCountries:            null;
    escort:                   Escort;
}

export type PurpleIDImdb = "tt30015542" | "" | "tt1824543";

export type PromoT = "Nuevo capítulo" | "ORIGINAL" | "ESTRENA";

export interface APIProgramas1000954_Multimedias {
    page: APIProgramas1000236_AudiosPage;
}

export interface APIProgramas1000236_AudiosPage {
    items:       Item23[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item23 {
    uri:                      string;
    htmlUrl:                  string;
    htmlShortUrl:             string;
    id:                       string;
    language:                 Lang;
    anteTitle:                StickyAnteTitle | null;
    anteTitleUrl:             null;
    longTitle:                string;
    shortTitle:               null | string;
    mainCategoryRef:          string;
    popularity:               string;
    popHistoric:              string;
    numVisits:                string;
    publicationDate:          string;
    modificationDate:         string;
    pubState:                 PubState;
    mainTopic:                string;
    topicsName:               string[];
    breadCrumbRef:            string;
    imageSEO:                 string;
    thumbnail:                null | string;
    previews:                 LastMultimediaPreviews;
    expirationDate:           null | string;
    dateOfEmission:           string;
    publicationDateTimestamp: number;
    productionDate:           null | string;
    contentType:              ItemDestacadoAssetType;
    consumption:              PurpleConsumption;
    type:                     TypeClass;
    assetType:                ItemDestacadoAssetType;
    statistics:               Statistics;
    alt:                      null | string;
    foot:                     null;
    shortDescription:         null | string;
    description:              string;
    otherTopicsRefs:          string;
    qualities:                Quality[];
    qualitiesRef:             string;
    duration:                 number;
    programInfo:              ProgramInfo;
    sgce:                     null | string;
    dg:                       null;
    sip:                      null;
    commentOptions:           null;
    cuePointsRef:             string;
    configPlayerRef:          string;
    transcriptionRef:         string;
    temporadasRef:            string;
    temporada:                null;
    temporadaShortTitle:      null;
    programRef:               string;
    relacionadosRef:          string;
    relManualesRef:           string;
    publicidadRef:            null;
    comentariosRef:           string;
    relatedByLangRef:         string;
    sign:                     { [key: string]: SignEnum | null };
    estadisticasRef:          string;
    ageRangeUid:              null;
    ageRange:                 null;
    contentInitDate:          null;
    contentEndDate:           null;
    disabledAlacarta:         boolean;
    noRegistrationRequired:   boolean;
    promoTitle:               null;
    promoDesc:                null;
    title:                    string;
    generos:                  FluffyGenero[];
}

export type StickyAnteTitle = "Cantapalabracanta" | "Econoclan" | "Escuela de Reporteros" | "Un tubico con ...':";

export interface APIVideos16422030 {
    page: APIProgramas1000661_MultimediasPage;
}

export interface APIProgramas1000661_MultimediasPage {
    items:       Item24[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item24 {
    uri:                      string;
    htmlUrl:                  string;
    htmlShortUrl:             string;
    id:                       string;
    language:                 Lang;
    anteTitle:                null | string;
    anteTitleUrl:             null;
    longTitle:                string;
    shortTitle:               string;
    mainCategoryRef:          string;
    popularity:               string;
    popHistoric:              string;
    numVisits:                string;
    publicationDate:          string;
    modificationDate:         string;
    pubState:                 PubState;
    mainTopic:                string;
    topicsName:               string[];
    breadCrumbRef:            string;
    imageSEO:                 string;
    thumbnail:                null | string;
    previews:                 LastMultimediaPreviews;
    expirationDate:           null | string;
    dateOfEmission:           string;
    publicationDateTimestamp: number;
    productionDate:           null;
    contentType:              ContentTypeEnum;
    consumption:              FluffyConsumption;
    type:                     TypeClass;
    subType:                  TypeClass | null;
    assetType:                ContentTypeEnum;
    statistics:               Statistics;
    alt:                      null | string;
    foot:                     null;
    shortDescription:         null | string;
    description:              null | string;
    otherTopicsRefs:          string;
    qualities:                Quality[];
    qualitiesRef:             string;
    duration:                 number;
    programInfo:              ProgramInfo;
    sgce:                     null | string;
    dg:                       null | string;
    sip:                      null;
    commentOptions:           null;
    cuePointsRef:             string;
    configPlayerRef:          string;
    transcriptionRef:         string;
    temporadaId:              null;
    temporadasRef:            string;
    temporada:                null;
    temporadaShortTitle:      null;
    temporadaOrden:           null;
    programRef:               string;
    relacionadosRef:          string;
    relManualesRef:           string;
    publicidadRef:            null;
    comentariosRef:           string;
    relatedByLangRef:         string;
    sign:                     { [key: string]: SignEnum | null };
    estadisticasRef:          string;
    ageRangeUid:              AgeRangeUid | null;
    ageRange:                 ParentalRating | null;
    contentInitDate:          null;
    contentEndDate:           null;
    disabledAlacarta:         boolean;
    notDownloadable:          boolean;
    noRegistrationRequired:   boolean;
    promoTitle:               null | string;
    promoDesc:                null | string;
    episode:                  number;
    subtitleRef:              null | string;
    aspectRatio:              "f16x9";
    title:                    string;
    idWiki:                   null;
    idImdb:                   null;
    director:                 null | string;
    producedBy:               null;
    showMan:                  null;
    casting:                  null | string;
    generos:                  FluffyGenero[];
    technicalTeam:            null;
    audioDescription:         null | string;
    audioOriginal:            null | string;
    allowedInCountry:         boolean;
    paidContent:              boolean;
    geolocalizado:            boolean;
    paidCountries:            null;
    escort:                   Escort | null;
    hasCuePoints:             boolean;
    country:                  "ES";
    hasDRM:                   boolean;
    requireLogged:            boolean;
    consumptionUid?:          "D_PACK";
}

export type ParentalRating = "Programas no recomendados para menores de 7 años (NR7)" | "Programas para todos los públicos" | "Programas no recomendados para menores de 16 años (NR16)" | "Programas no recomendados para menores de 12 años (NR12)" | "Recomendado para mayores de 7 años" | "Recomendado para todos los públicos" | "Programas no recomendados para menores de 18 años (NR18)" | "Recomendado para mayores de 16 años" | "Recomendado para mayores de 12 años";

export type FluffyConsumption = "ondemand" | "EMPAQUETADO";

export interface APIProgramas821_Audios {
    page: APIProgramas1000671_AudiosPage;
}

export interface APIProgramas1000671_AudiosPage {
    items:       Item25[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item25 {
    uri:                      string;
    htmlUrl:                  string;
    htmlShortUrl:             string;
    id:                       string;
    language:                 Lang;
    anteTitle:                IndigoAnteTitle | null;
    anteTitleUrl:             null;
    longTitle:                string;
    shortTitle:               string;
    mainCategoryRef:          string;
    popularity:               string;
    popHistoric:              string;
    numVisits:                string;
    publicationDate:          string;
    modificationDate:         string;
    pubState:                 PubState;
    mainTopic:                string;
    mainTopicUid?:            string;
    topicsName:               string[];
    breadCrumbRef:            string;
    imageSEO:                 string;
    thumbnail:                null | string;
    previews:                 LastMultimediaPreviews;
    expirationDate:           null;
    dateOfEmission:           string;
    publicationDateTimestamp: number;
    productionDate:           null | string;
    contentType:              ItemDestacadoAssetType;
    consumption:              PurpleConsumption;
    type:                     TypeClass;
    assetType:                ItemDestacadoAssetType;
    statistics:               Statistics;
    alt:                      null | string;
    foot:                     null | string;
    shortDescription:         null | string;
    description:              null | string;
    otherTopicsRefs:          string;
    qualities:                Quality[];
    qualitiesRef:             string;
    duration:                 number;
    programInfo:              ProgramInfo;
    sgce:                     null | string;
    dg:                       null;
    sip:                      null;
    commentOptions:           PubState | null;
    cuePointsRef:             string;
    configPlayerRef:          string;
    transcriptionRef:         string;
    temporadasRef:            string;
    temporada:                null;
    temporadaShortTitle:      null;
    programRef:               string;
    relacionadosRef:          string;
    relManualesRef:           string;
    publicidadRef:            null;
    comentariosRef:           string;
    relatedByLangRef:         string;
    sign:                     { [key: string]: SignEnum | null };
    estadisticasRef:          string;
    ageRangeUid:              null;
    ageRange:                 null;
    contentInitDate:          null;
    contentEndDate:           null;
    disabledAlacarta:         boolean;
    noRegistrationRequired:   boolean;
    promoTitle:               null;
    promoDesc:                null;
    title:                    string;
    generos:                  PurpleGenero[];
}

export type IndigoAnteTitle = "Créditos Iniciales" | "Sapiensantes" | "El profesor Melorock" | "Mosquis, un podcast amarillo!" | "¡Mosquis, un podcast amarillo!";

export interface APIProgramas821_Relacionados {
    page: APIProgramas1000789_RelacionadosPage;
}

export interface APIProgramas1000789_RelacionadosPage {
    items:       Item26[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item26 {
    uri:                      string;
    htmlUrl:                  string;
    htmlShortUrl:             string;
    id:                       string;
    ctvId:                    number | null;
    oldCtvId:                 null;
    uid:                      string;
    name:                     string;
    permalink:                string;
    language:                 Lang;
    longTitle:                string;
    shortTitle:               string;
    description:              string;
    audioDescription:         boolean;
    longDescription:          string;
    contact:                  null;
    emission:                 null | string;
    publicationDate:          string;
    expirationDate:           null;
    pubState:                 PubState;
    orden:                    number;
    imageSEO:                 string;
    logo:                     string;
    logo2:                    string;
    thumbnail:                string;
    imgBackground:            string;
    imgBackground2:           string;
    imgPoster:                string;
    imgPoster2:               string;
    imgPortada:               string;
    imgPortada2:              string;
    imgCol:                   string;
    imgCol2:                  string;
    imgCol3:                  string;
    imgBanner:                string;
    imgBanner2:               string;
    imgPinta:                 string;
    imagePodcast:             string;
    outOfEmission:            boolean;
    channel:                  ItemChannel;
    fanBoxID:                 null;
    ageRangeUid:              AgeRangeUid | null;
    ageRange:                 AgeRange | null;
    recommendAgesForChilds:   any[];
    seccionesRef:             string;
    temporadasRef:            string;
    temporadaShortTitle:      null;
    temporada:                null;
    agrupadoresRef:           string;
    videosRef:                string;
    audiosRef:                string;
    multimediasRef:           string;
    relacionadosRef:          string;
    otherChannelsRef:         string;
    childrenInfoRef:          string;
    filtro:                   null;
    webRtve:                  null;
    webOficial:               string;
    promoText:                FluffyPromoText | null;
    promoDesc:                null | string;
    relatedByLangRef:         string;
    modificationDate:         string;
    publicationDateTimestamp: number;
    contentType:              "programa";
    sgce:                     Sgce | null;
    sgce2:                    null;
    kantar:                   null | string;
    generos:                  PurpleGenero[];
    seasons:                  ItemSeasonClass[] | null;
    numSeasons:               number;
    productionDate:           FluffyProductionDate | null;
    rrss:                     null;
    rrssApps:                 any[];
    mainTopic:                string;
    mainTopicUid:             string;
    title:                    string;
    disabledAlacarta:         boolean;
    programType:              ProgramType | null;
    programTypeId:            number | null;
    isComplete:               boolean;
    inAZList:                 boolean;
    director:                 null | string;
    producedBy:               PurpleProducedBy | null;
    showMan:                  null | string;
    casting:                  null;
    technicalTeam:            null | string;
    idWiki:                   null | string;
    idImdb:                   FluffyIDImdb;
    showFragments:            boolean;
    notDownloadable:          boolean;
    paidCountries:            null;
    escort:                   Escort;
}

export type FluffyIDImdb = "" | "tt1379166";

export type PurpleProducedBy = "Xavier Forné" | "Emiliano de Pedraza | José Carbajo" | "Eduardo Deglané" | "Pedro Villafuertes Escobar | María Isabel Martín Muñoz";

export type FluffyProductionDate = "01-01-1979 00:00:00" | "01-01-2024 00:00:00" | "04-10-2024 02:00:00" | "30-08-2024 02:00:00" | "01-01-1994 00:00:00" | "30-11-1987 20:15:00" | "01-01-2024 12:12:29" | "01-01-1987 00:00:00" | "01-01-2023 00:00:00" | "01-01-1999 00:00:00";

export type Sgce = "I6140254" | "MTA50797" | "MLA10855" | "MLA10296" | "MLA10856" | "P000PGS00000" | "P599PGS00343" | "P611PGS00687" | "MRA60794";

export interface APIVideos7037409 {
    page: APIProgramas1000793_MultimediasPage;
}

export interface APIProgramas1000793_MultimediasPage {
    items:       Item27[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item27 {
    uri:                      string;
    htmlUrl:                  string;
    htmlShortUrl:             string;
    id:                       string;
    language:                 Lang;
    anteTitle:                LongTitle | null;
    anteTitleUrl:             null;
    longTitle:                string;
    shortTitle:               null | string;
    mainCategoryRef:          string;
    popularity:               string;
    popHistoric:              string;
    numVisits:                string;
    publicationDate:          string;
    modificationDate:         string;
    pubState:                 PubState;
    mainTopic:                string;
    topicsName:               string[];
    breadCrumbRef:            string;
    imageSEO:                 string;
    thumbnail:                null | string;
    previews:                 LastMultimediaPreviews;
    expirationDate:           null;
    dateOfEmission:           string;
    publicationDateTimestamp: number;
    productionDate:           null;
    contentType:              PurpleTType;
    consumption:              PurpleConsumption;
    type:                     TypeClass;
    assetType:                PurpleTType;
    statistics:               Statistics;
    alt:                      null | string;
    foot:                     null;
    shortDescription:         null | string;
    description:              null | string;
    otherTopicsRefs:          string;
    qualities:                Quality[];
    qualitiesRef:             string;
    duration:                 number;
    programInfo:              ProgramInfo;
    sgce:                     null | string;
    dg:                       null | string;
    sip:                      null;
    commentOptions:           null;
    cuePointsRef:             string;
    configPlayerRef:          string;
    transcriptionRef:         string;
    temporadasRef:            string;
    temporada:                TemporadaEnum | null;
    temporadaShortTitle:      null | string;
    programRef:               string;
    relacionadosRef:          string;
    relManualesRef:           string;
    publicidadRef:            null;
    comentariosRef:           string;
    relatedByLangRef:         string;
    sign:                     { [key: string]: SignEnum | null };
    estadisticasRef:          string;
    ageRangeUid:              null;
    ageRange:                 null;
    contentInitDate:          null;
    contentEndDate:           null;
    disabledAlacarta:         boolean;
    noRegistrationRequired:   boolean;
    promoTitle:               PromoT | null;
    promoDesc:                null;
    title:                    string;
    generos:                  FluffyGenero[];
    subType?:                 TypeClass | null;
    temporadaId?:             number | null;
    temporadaOrden?:          number | null;
    notDownloadable?:         boolean;
    episode?:                 number;
    subtitleRef?:             null | string;
    aspectRatio?:             "f16x9";
    idWiki?:                  null;
    idImdb?:                  null;
    director?:                FluffyDirector | null;
    producedBy?:              null;
    showMan?:                 null | string;
    casting?:                 null;
    technicalTeam?:           null;
    audioDescription?:        null | string;
    audioOriginal?:           null | string;
    allowedInCountry?:        boolean;
    paidContent?:             boolean;
    geolocalizado?:           boolean;
    escort?:                  null;
    hasCuePoints?:            boolean;
    country?:                 "ES";
    hasDRM?:                  boolean;
    paidCountries?:           null;
    requireLogged?:           boolean;
}

export type LongTitle = "Protagonistas del aula" | "De Éxodos" | "Cantapalabracanta" | "Farem el que podrem" | "Entrevista en TVE";

export type FluffyDirector = "Lorena Fernández" | "Sofía Comas" | "Luis Poyo (Edición)" | "Amaia Pérez de Mendiola (Edición)" | "Isabel de Haro" | "Sonia Domínguez" | "Quique Quera Turu" | "Xabier Fortes";

export interface APIProgramas177790_Multimedias {
    page: APIProgramas1000794_MultimediasPage;
}

export interface APIProgramas1000794_MultimediasPage {
    items:       Item28[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item28 {
    uri:                      string;
    htmlUrl:                  string;
    htmlShortUrl:             string;
    id:                       string;
    language:                 Lang;
    anteTitle:                FluffyAnteTitle | null;
    anteTitleUrl:             null;
    longTitle:                string;
    shortTitle:               null | string;
    mainCategoryRef:          string;
    popularity:               string;
    popHistoric:              string;
    numVisits:                string;
    publicationDate:          string;
    modificationDate:         string;
    pubState:                 PubState;
    mainTopic:                ItemMainTopic;
    mainTopicUid?:            MainTopicUid;
    topicsName:               string[];
    breadCrumbRef:            string;
    imageSEO:                 string;
    thumbnail:                string;
    previews:                 LastMultimediaPreviews;
    expirationDate:           null;
    dateOfEmission:           string;
    publicationDateTimestamp: number;
    productionDate:           null | string;
    contentType:              PurpleTType;
    consumption:              PurpleConsumption;
    type:                     TypeClass;
    assetType:                PurpleTType;
    statistics:               Statistics;
    alt:                      null | string;
    foot:                     null;
    shortDescription:         null;
    description:              string;
    otherTopicsRefs:          string;
    qualities:                Quality[];
    qualitiesRef:             string;
    duration:                 number;
    programInfo:              ProgramInfo;
    sgce:                     null | string;
    dg:                       null;
    sip:                      null;
    commentOptions:           null;
    cuePointsRef:             string;
    configPlayerRef:          string;
    transcriptionRef:         string;
    temporadasRef:            string;
    temporada:                null;
    temporadaShortTitle:      null;
    programRef:               string;
    relacionadosRef:          string;
    relManualesRef:           string;
    publicidadRef:            null;
    comentariosRef:           string;
    relatedByLangRef:         string;
    sign:                     { [key: string]: SignEnum | null };
    estadisticasRef:          string;
    ageRangeUid:              null;
    ageRange:                 null;
    contentInitDate:          null;
    contentEndDate:           null;
    disabledAlacarta:         boolean;
    noRegistrationRequired:   boolean;
    promoTitle:               null;
    promoDesc:                null;
    title:                    string;
    generos:                  FluffyGenero[];
    subType?:                 null;
    temporadaId?:             null;
    temporadaOrden?:          null;
    notDownloadable?:         boolean;
    episode?:                 number;
    subtitleRef?:             null;
    aspectRatio?:             "f16x9";
    idWiki?:                  null;
    idImdb?:                  null;
    director?:                null;
    producedBy?:              null;
    showMan?:                 null | string;
    casting?:                 null;
    technicalTeam?:           null;
    audioDescription?:        null;
    audioOriginal?:           null;
    allowedInCountry?:        boolean;
    paidContent?:             boolean;
    geolocalizado?:           boolean;
    paidCountries?:           null;
    escort?:                  null;
    hasCuePoints?:            boolean;
    country?:                 "ES";
    hasDRM?:                  boolean;
    requireLogged?:           boolean;
}

export interface APIVideos6991409 {
    page: APIProgramas1000843_MultimediasPage;
}

export interface APIProgramas1000843_MultimediasPage {
    items:       Item29[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item29 {
    uri:                      string;
    htmlUrl:                  string;
    htmlShortUrl:             string;
    id:                       string;
    language:                 Lang;
    anteTitle:                null | string;
    anteTitleUrl:             null;
    longTitle:                string;
    shortTitle:               null | string;
    mainCategoryRef:          string;
    popularity:               string;
    popHistoric:              string;
    numVisits:                string;
    publicationDate:          string;
    modificationDate:         string;
    pubState:                 PubState;
    mainTopic:                string;
    topicsName:               string[];
    breadCrumbRef:            string;
    imageSEO:                 string;
    thumbnail:                null | string;
    previews:                 LastMultimediaPreviews;
    expirationDate:           null | string;
    dateOfEmission:           string;
    publicationDateTimestamp: number;
    productionDate:           null;
    contentType:              ContentTypeEnum;
    consumption:              FluffyConsumption;
    type:                     TypeClass;
    subType:                  TypeClass | null;
    assetType:                ContentTypeEnum;
    statistics:               Statistics;
    alt:                      null | string;
    foot:                     null;
    shortDescription:         null | string;
    description:              null | string;
    otherTopicsRefs:          string;
    qualities:                Quality[];
    qualitiesRef:             string;
    duration:                 number;
    programInfo:              ProgramInfo;
    sgce:                     null | string;
    dg:                       null | string;
    sip:                      null;
    commentOptions:           null;
    cuePointsRef:             string;
    configPlayerRef:          string;
    transcriptionRef:         string;
    temporadaId:              number | null;
    temporadasRef:            string;
    temporada:                Temporada | null;
    temporadaShortTitle:      null | string;
    temporadaOrden:           number | null;
    programRef:               string;
    relacionadosRef:          string;
    relManualesRef:           string;
    publicidadRef:            null;
    comentariosRef:           string;
    relatedByLangRef:         string;
    sign:                     { [key: string]: SignEnum | null };
    estadisticasRef:          string;
    ageRangeUid:              AgeRangeUid | null;
    ageRange:                 ParentalRating | null;
    contentInitDate:          null;
    contentEndDate:           null;
    disabledAlacarta:         boolean;
    notDownloadable:          boolean;
    noRegistrationRequired:   boolean;
    promoTitle:               null | string;
    promoDesc:                null;
    episode:                  number;
    subtitleRef:              null | string;
    aspectRatio:              "f16x9";
    title:                    string;
    idWiki:                   null;
    idImdb:                   null;
    director:                 null | string;
    producedBy:               null;
    showMan:                  null;
    casting:                  null;
    generos:                  PurpleGenero[];
    technicalTeam:            null;
    audioDescription:         null | string;
    audioOriginal:            null | string;
    allowedInCountry:         boolean;
    paidContent:              boolean;
    geolocalizado:            boolean;
    paidCountries:            null;
    escort:                   Escort | null;
    hasCuePoints:             boolean;
    country:                  "ES";
    hasDRM:                   boolean;
    requireLogged:            boolean;
    consumptionUid?:          "D_PACK";
}

export type Temporada = "Temporada 5" | "Premios Goya 2025" | "Europa 2024";

export interface APIVideos16439037_Temporadas {
    page: APIProgramas134450_TemporadasPage;
}

export interface APIProgramas134450_TemporadasPage {
    items:       Item30[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item30 {
    uri:              string;
    id:               number;
    title:            string;
    shortTitle:       string;
    longTitle:        string;
    permalink:        string;
    description:      string;
    shortDescription: string;
    image:            string;
    imgBackground:    string;
    imgPortada:       string;
    disabledAlacarta: boolean;
    notDownloadable:  boolean;
    orden:            number;
    numEpisodes:      number;
    director:         null | string;
    producedBy:       FluffyProducedBy | null;
    showMan:          null | string;
    casting:          null;
    technicalTeam:    null | string;
}

export type FluffyProducedBy = "Pedro Villafuertes Escobar,María Isabel Martín Muñoz" | "María Isabel Martín Muñoz,Pedro Villafuertes Escobar" | "Mabel Martín" | "Iñigo G. Aldalur";

export interface APIProgramas58990_OtrasCadenas {
    page: APIProgramas1535_OtrasCadenasPage;
}

export interface APIProgramas1535_OtrasCadenasPage {
    items:       Item31[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item31 {
    uri:                       string;
    htmlUrl:                   string;
    htmlShortUrl:              string;
    id:                        string;
    medioRef:                  string;
    uid:                       Uid;
    title:                     AnteTitleEnum;
    permalink:                 string;
    programsRef:               string;
    videosRef:                 string;
    audiosRef:                 string;
    multimediasRef:            string;
    directosAhoraRef:          string;
    directosEnvivoAhoraRef:    string;
    directosTodosAhoraRef:     string;
    directosProximosRef:       string;
    directosEnvivoProximosRef: string;
    directosTodosProximosRef:  string;
    agrupadoresRef:            string;
    videosVistosRef:           string;
    audiosVistosRef:           string;
    multimediasVistosRef:      string;
    videosPopularesRef:        string;
    audiosPopularesRef:        string;
    multimediasPopularesRef:   string;
}

export interface APIProgramas177130 {
    page: APIProgramas177130_Page;
}

export interface APIProgramas177130_Page {
    items:       Item32[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item32 {
    uri:                      string;
    htmlUrl:                  string;
    htmlShortUrl:             string;
    id:                       string;
    ctvId:                    number;
    oldCtvId:                 null;
    uid:                      string;
    name:                     LongTitle;
    permalink:                string;
    language:                 Lang;
    longTitle:                LongTitle;
    shortTitle:               LongTitle;
    description:              string;
    audioDescription:         boolean;
    longDescription:          string;
    contact:                  null;
    emission:                 string;
    publicationDate:          string;
    expirationDate:           null;
    pubState:                 PubState;
    orden:                    number;
    imageSEO:                 string;
    logo:                     string;
    logo2:                    string;
    thumbnail:                string;
    imgBackground:            string;
    imgBackground2:           string;
    imgPoster:                string;
    imgPoster2:               string;
    imgPortada:               string;
    imgPortada2:              string;
    imgCol:                   string;
    imgCol2:                  string;
    imgCol3:                  string;
    imgBanner:                string;
    imgBanner2:               string;
    imgPinta:                 string;
    imagePodcast:             string;
    outOfEmission:            boolean;
    channel:                  ItemChannel;
    fanBoxID:                 null;
    ageRangeUid:              AgeRangeUid;
    ageRange:                 AgeRange;
    recommendAgesForChilds:   any[];
    seccionesRef:             string;
    temporadasRef:            string;
    temporadaShortTitle:      null;
    temporada:                null;
    agrupadoresRef:           string;
    videosRef:                string;
    audiosRef:                string;
    multimediasRef:           string;
    relacionadosRef:          string;
    otherChannelsRef:         string;
    childrenInfoRef:          string;
    filtro:                   null;
    webRtve:                  null;
    webOficial:               string;
    promoText:                PromoT;
    promoDesc:                null;
    relatedByLangRef:         string;
    modificationDate:         string;
    publicationDateTimestamp: number;
    contentType:              "programa";
    sgce:                     string;
    sgce2:                    null;
    kantar:                   string;
    generos:                  PurpleGenero[];
    seasons:                  null;
    numSeasons:               number;
    productionDate:           PurpleProductionDate;
    rrss:                     null;
    rrssApps:                 any[];
    mainTopic:                string;
    mainTopicUid:             string;
    title:                    LongTitle;
    disabledAlacarta:         boolean;
    programType:              ProgramType;
    programTypeId:            number;
    isComplete:               boolean;
    inAZList:                 boolean;
    director:                 FluffyDirector;
    producedBy:               string;
    showMan:                  string;
    casting:                  null;
    technicalTeam:            string;
    idWiki:                   string;
    idImdb:                   string;
    showFragments:            boolean;
    notDownloadable:          boolean;
    paidCountries:            null;
    escort:                   Escort;
    paidContent:              boolean;
    country:                  "ES";
}

export interface APIScheduleTv1Cat {
    diahoy:      string;
    itemahora:   number;
    nombreCanal: string;
    uidCanal:    string;
    items:       APISchedule24HItem[];
}

export interface APISchedule24HItem {
    name:                  string;
    description:           string;
    begintime:             string;
    duration:              string;
    parentalRating:        string;
    contentType:           ContentTypeEnum;
    original_event_name:   string;
    original_episode_name: null | string;
    episode_name:          null | string;
    episode_number:        number | null | string;
    year:                  number | null | string;
    director:              null | string;
    casting:               null | string;
    sgce:                  null | string;
    orden:                 number;
    idAsset?:              number;
    idPrograma?:           number;
    ahora?:                boolean;
    dg?:                   null | string;
    season?:               PurpleSeason | null;
    api?:                  string;
}

export type PurpleSeason = "Temporada 2" | "Temporada 8" | "Temporada 4" | "Temporada 1" | "Temporada 3" | "Benidorm Fest 2023" | "Eurovisión 2023" | "Benidorm Fest 2024" | "Eurovisión 2024" | "Benidorm Fest 2025" | "Benidorm Fest 2022";

export interface APISchedulePlaypr {
    diahoy:      string;
    itemahora:   number;
    nombreCanal: string;
    uidCanal:    string;
    items:       APISchedulePlayItem[];
}

export interface APISchedulePlayItem {
    name:                  string;
    description:           string;
    begintime:             string;
    duration:              string;
    parentalRating:        ParentalRating;
    contentType:           ContentTypeEnum;
    original_event_name:   string;
    original_episode_name: string;
    episode_name:          null | string;
    episode_number:        number | null;
    year:                  number;
    director:              null | string;
    casting:               null | string;
    sgce:                  null | string;
    dg:                    null | string;
    idAsset:               number;
    season:                FluffySeason | null;
    orden:                 number;
    idPrograma?:           number;
    ahora?:                boolean;
}

export type FluffySeason = "Temporada 3" | "Temporada 2" | "Temporada 1" | "La ruta del ámbar por Europa Oriental" | "Ruta del Cóndor" | "Ruta del Dragón" | "Temporada 20" | "Temporada 21" | "Temporada 22";

export interface APISearch {
    message: "Not Found";
    error:   Error;
}

export interface Error {
    status: number;
}

export interface APISearchProgramsSearchPage1Size20ContextTveIsExpandedTrueIsChildTrueUseOntologyTrueGenre96152ProgramtypePeliculas {
    page: APISearchProgramsSearchPage1Size20ContextTveIsExpandedTrueIsChildTrueUseOntologyTrueGenre136614ProgramtypePeliculasPage;
}

export interface APISearchProgramsSearchPage1Size20ContextTveIsExpandedTrueIsChildTrueUseOntologyTrueGenre136614ProgramtypePeliculasPage {
    items:       Item33[];
    numElements: number;
    number:      number;
    offset:      number;
    size:        number;
    total:       number;
    totalPages:  number;
}

export interface Item33 {
    ageRange:                 ParentalRating;
    ageRangeUid:              AgeRangeUid;
    allowedInCountry:         boolean;
    alt:                      string;
    anteTitle:                null;
    anteTitleUrl:             null;
    aspectRatio:              "f16x9";
    assetType:                ContentTypeEnum;
    audioDescription:         null;
    audioOriginal:            null | string;
    breadCrumbRef:            string;
    casting:                  string;
    comentariosRef:           string;
    commentOptions:           null;
    configPlayerRef:          string;
    consumption:              FluffyConsumption;
    contentEndDate:           null;
    contentInitDate:          null;
    contentType:              ContentTypeEnum;
    country:                  "ES";
    cuePointsRef:             string;
    dateOfEmission:           string;
    description:              string;
    dg:                       null | string;
    director:                 string;
    disabledAlacarta:         boolean;
    duration:                 number;
    episode:                  number;
    escort:                   Escort;
    estadisticasRef:          string;
    expirationDate:           null | string;
    foot:                     null;
    generos:                  FluffyGenero[];
    geolocalizado:            boolean;
    hasCuePoints:             boolean;
    hasDRM:                   boolean;
    htmlShortUrl:             string;
    htmlUrl:                  string;
    id:                       string;
    idImdb:                   null | string;
    idWiki:                   null | string;
    imageSEO:                 string;
    imgPortada:               string;
    imgPoster:                string;
    language:                 Lang;
    longTitle:                string;
    mainCategoryRef:          string;
    mainTopic:                string;
    modificationDate:         string;
    noRegistrationRequired:   boolean;
    notDownloadable:          boolean;
    numVisits:                string;
    otherTopicsRefs:          string;
    paidContent:              boolean;
    paidCountries:            PaidCountry[] | null;
    popHistoric:              string;
    popularity:               string;
    previews:                 LastMultimediaPreviews;
    producedBy:               null;
    productionDate:           string;
    programInfo:              ProgramInfo;
    programRef:               string;
    promoDesc:                null | string;
    promoTitle:               null;
    pubState:                 PubState;
    publicationDate:          string;
    publicationDateTimestamp: number;
    publicidadRef:            null;
    qualities:                Quality[];
    qualitiesRef:             string;
    relManualesRef:           string;
    relacionadosRef:          string;
    relatedByLangRef:         string;
    requireLogged:            boolean;
    sgce:                     null | string;
    shortDescription:         string;
    shortTitle:               null | string;
    showMan:                  null;
    sign:                     { [key: string]: SignEnum | null };
    sip:                      null;
    statistics:               Statistics;
    subType:                  TypeClass;
    subtitleRef:              null | string;
    technicalTeam:            null;
    temporada:                null;
    temporadaId:              null;
    temporadaOrden:           null;
    temporadaShortTitle:      null;
    temporadasRef:            string;
    thumbnail:                string;
    title:                    string;
    topicsName:               string[];
    transcriptionRef:         string;
    type:                     TypeClass;
    uri:                      string;
    anteTitlelUrl?:           null;
    canonicalUrl?:            null;
    consumptionUid?:          "D_PACK";
}

export interface APITematicas863 {
    page: APITematicas1000149_Page;
}

export interface APITematicas1000149_Page {
    items:       Item34[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item34 {
    permalink:                 string;
    pathUids:                  string;
    pathNames:                 string;
    videosRef:                 string;
    audiosRef:                 string;
    multimediasRef:            string;
    multimediasVistosRef:      string;
    videosVistosRef:           string;
    audiosVistosRef:           string;
    multimediasPopularesRef:   string;
    videosPopularesRef:        string;
    audiosPopularesRef:        string;
    noticiasRef:               string;
    noticiasTickerRef:         string;
    noticiasTickerNoticiasRef: string;
    noticiasTickerDeportesRef: string;
    noticiasVistasRef:         string;
    noticiasPopularesRef:      string;
    publicidadRef:             string;
    uid:                       string;
    title:                     string;
    traducciones:              Traducciones;
    parentRef:                 string;
    childrenRef:               string;
    descendantsRef:            string;
    ancestrosRef:              string;
    uri:                       string;
    id:                        string;
}

export interface Traducciones {
    ES: string;
}

export interface APITematicas863_VideosMasVistos {
    success:  boolean;
    httpCode: number;
    message:  "Not Found";
    response: any[];
    errors:   any[];
    build:    "42f7d564";
}

export interface APIToken7047909 {
    token:        string;
    widevineURL:  string;
    fairplayURL:  string;
    fairplayCert: string;
}

export interface APIVideos7043605_Subtitulos {
    page: APIVideos15960245_SubtitulosPage;
}

export interface APIVideos15960245_SubtitulosPage {
    items:       Item35[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}

export interface Item35 {
    src:  string;
    lang: Lang;
}

export interface MConfigsRtvePlayEstructura {
    version:           number;
    fechaModificacion: Date;
    expirationTime:    number;
    refresh:           number;
    dashon:            boolean;
    digitalVOD:        boolean;
    digitaLIVE:        boolean;
    tv:                boolean;
    vw:                number;
    segment:           number;
    segmentc:          number;
    subsaux:           boolean;
    apiAux:            boolean;
    login:             boolean;
    adstv:             boolean;
    adsLive:           boolean;
    urlLogo:           string;
    bannerPromo:       string;
    bannerJJOO:        BannerJJOO;
    imagesShorts:      ImagesShorts;
    bannerLogin:       BannerLogin;
    stats:             Stats;
    bannerPuntua:      BannerPuntua;
    television:        Television;
    radio:             Radio;
}

export interface BannerJJOO {
    fechaInicio: Date;
    fechaFin:    Date;
}

export interface BannerLogin {
    title:        string;
    active:       boolean;
    imagemobile:  string;
    imagetablet:  string;
    imageTV:      string;
    closeAllowed: boolean;
}

export interface BannerPuntua {
    title:       string;
    active:      boolean;
    imagemobile: string;
    imagetablet: string;
    text:        string;
    textButton:  string;
}

export interface ImagesShorts {
    imagemobile: string;
    imagetablet: string;
}

export interface Radio {
    portada:     RadioPortada[];
    menuBloques: RadioMenuBloque[];
    secciones:   RadioSecciones;
}

export interface RadioMenuBloque {
    orden:     number;
    title:     string;
    menuItems: PurpleMenuItem[];
}

export interface PurpleMenuItem {
    orden:          number;
    title:          string;
    resaltado:      boolean;
    tipo:           string;
    urlContent?:    string;
    imgBackground?: string;
    decorado?:      boolean;
    menuItems?:     MenuItemMenuItem[];
    mostrarlogado?: string;
    so?:            string;
}

export interface MenuItemMenuItem {
    orden:          number;
    title:          string;
    resaltado:      boolean;
    tipo:           MenuItemTipo;
    urlContent?:    string;
    imgBackground?: string;
    logo?:          string;
    pais?:          "ES";
    decorado?:      boolean;
    appIOS?:        string;
    schemeIOS?:     string;
    appAndroid?:    string;
    id?:            string;
    subscriptor?:   boolean;
}

export type MenuItemTipo = "portada" | "descargas" | "mislistas" | "seguirviendo" | "intentApp" | "portadaCanalTematico";

export interface RadioPortada {
    orden:      number;
    title:      string;
    urlContent: string;
    tipo:       string;
    subTitle?:  null;
    numLayout?: number;
}

export interface RadioSecciones {
    directosRadio: DirectosRadio;
    portada:       DirectosRadio;
    buscadorAZ:    BuscadorAZ;
    directos:      PurpleDirectos;
    parrilla:      Parrilla;
    nowAndNext:    NowAndNext;
    buscador:      Buscador;
    territoriales: Territoriales;
}

export interface Buscador {
    urlContent:         string;
    tituloLomasBuscado: string;
    urlBuscadorPredef:  string;
    urlLomasBuscado:    string;
    generospeliculas?:  Generospelicula[];
}

export interface Generospelicula {
    "nav-pag_name": string;
    "nav-pag_url":  string;
}

export interface BuscadorAZ {
    canales:    CategoriaElement[];
    categorias: CategoriaElement[];
}

export interface CategoriaElement {
    orden:      number;
    title:      string;
    urlContent: string;
}

export interface PurpleDirectos {
    urlContent:       string;
    urlbasestartover: string;
}

export interface DirectosRadio {
    urlContent: string;
}

export interface NowAndNext {
    emisoras: Emisora[];
}

export interface Emisora {
    tipo:       string;
    urlContent: string;
}

export interface Parrilla {
    agrupadores: Agrupadore[];
}

export interface Agrupadore {
    orden:   number;
    title:   string;
    canales: AgrupadoreCanale[];
}

export interface AgrupadoreCanale {
    orden:      number;
    title:      string;
    logo:       string;
    urlContent: string;
    idAsset:    string;
}

export interface Territoriales {
    informativos: string;
    emisoras:     string;
}

export interface Stats {
    adobe:       boolean;
    comscore:    boolean;
    muxData:     boolean;
    userTracker: boolean;
    conviva:     boolean;
    kantar:      boolean;
}

export interface Television {
    portada:     TelevisionPortada[];
    menuBloques: TelevisionMenuBloque[];
    secciones:   TelevisionSecciones;
}

export interface TelevisionMenuBloque {
    orden:     number;
    title:     string;
    menuItems: FluffyMenuItem[];
}

export interface FluffyMenuItem {
    orden:          number;
    title:          string;
    resaltado:      boolean;
    tipo:           string;
    subscriptor?:   boolean;
    imgBackground?: string;
    urlContent?:    string;
    decorado?:      boolean;
    menuItems?:     MenuItemMenuItem[];
    mostrarlogado?: string;
    so?:            string;
}

export interface TelevisionPortada {
    orden:                 number;
    tipo:                  string;
    title:                 string;
    urlContent?:           string;
    mostrarSoloEnEmision?: boolean;
}

export interface TelevisionSecciones {
    subscriptor:            boolean;
    portada:                SeccionesPortada;
    auxiliares:             Auxiliares;
    desconexionTerritorial: DesconexionTerritorial;
    canalestematicos:       Canalestematico[];
    buscadorAZ:             BuscadorAZ;
    directos:               FluffyDirectos;
    parrilla:               Parrilla;
    buscador:               Buscador;
    showDateEmision:        string[];
    adsEnabled:             string[];
    especiales:             Especiale[];
    concursos:              Concurso[];
}

export interface Auxiliares {
    mdandroid: string;
    hlios:     string;
}

export interface Canalestematico {
    nombre:    string;
    id:        string;
    permalink: string;
}

export interface Concurso {
    id:     string;
    activo: boolean;
    feed:   string;
}

export interface DesconexionTerritorial {
    idDirectoPrincipal: string;
    horaInicio:         string;
    horaFin:            string;
    urlDesconexiones:   string;
    urlLocalizacion:    string;
}

export interface FluffyDirectos {
    urlContent:        string;
    urlbasestartover:  string;
    programsstartover: Programsstartover[];
}

export interface Programsstartover {
    programId: string;
    idGolumi:  string;
    sgce:      string;
}

export interface Especiale {
    programRefid: string;
    typeId:       number;
}

export interface SeccionesPortada {
    urlContent: string;
    addParams:  boolean;
}

export interface PlayIndexApps {
    id:       string;
    category: Category;
    pubPoint: string;
    title:    string;
    rows:     Row[];
}

export interface Category {
    breadcrumb: string;
    id:         number;
    title:      SignEnum;
    uid:        string;
}

export interface Row {
    orden:       number;
    title:       null | string;
    noLabels?:   boolean;
    moduleType:  ModuleType;
    urlContent?: string;
    tipo:        string;
    subTitle?:   null;
    numLayout?:  number;
    links?:      Link[];
}

export interface Link {
    title:         string;
    image:         string;
    tipo:          TipoEnum;
    url:           string;
    coverpage:     null | string;
    imgHorizontal: string;
    imgSquare:     string;
}

export type ModuleType = "Collection" | "livesCollection" | "KeepWatching" | "catalogs";
