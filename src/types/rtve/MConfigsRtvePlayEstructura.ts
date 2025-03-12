export default interface MConfigsRtvePlayEstructura {
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
  bannerJJOO: {
    fechaInicio: Date;
    fechaFin: Date;
  };
  imagesShorts: {
    imagemobile: string;
    imagetablet: string;
  };
  bannerLogin: {
    title: string;
    active: boolean;
    imagemobile: string;
    imagetablet: string;
    imageTV: string;
    closeAllowed: boolean;
  };
  stats: {
    adobe: boolean;
    comscore: boolean;
    muxData: boolean;
    userTracker: boolean;
    conviva: boolean;
    kantar: boolean;
  };
  bannerPuntua: {
    title: string;
    active: boolean;
    imagemobile: string;
    imagetablet: string;
    text: string;
    textButton: string;
  };
  television: {
    portada: {
      orden: number;
      tipo: string;
      title: string;
      urlContent?: string;
      mostrarSoloEnEmision?: boolean;
    }[];
    menuBloques: {
      orden: number;
      title: string;
      menuItems: MenuItem[];
    }[];
    secciones: {
      subscriptor: boolean;
      portada: {
        urlContent: string;
        addParams: boolean;
      };
      auxiliares: {
        mdandroid: string;
        hlios: string;
      };
      desconexionTerritorial: {
        idDirectoPrincipal: string;
        horaInicio: string;
        horaFin: string;
        urlDesconexiones: string;
        urlLocalizacion: string;
      };
      canalestematicos: {
        nombre: string;
        id: string;
        permalink: string;
      }[];
      buscadorAZ: BuscadorAZ;
      directos: Directos;
      parrilla: Parrilla;
      buscador: Buscador;
      showDateEmision: string[];
      adsEnabled: string[];
      especiales: {
        programRefid: string;
        typeId: number;
      }[];
      concursos: {
        id: string;
        activo: boolean;
        feed: string;
      }[];
    };
  };
  radio: {
    portada: {
      orden: number;
      title: string;
      urlContent: string;
      tipo: string;
      subTitle?: null;
      numLayout?: number;
    }[];
    menuBloques: {
      orden: number;
      title: string;
      menuItems: MenuItem[];
    }[];
    secciones: {
      directosRadio: DirectosRadio;
      portada: DirectosRadio;
      buscadorAZ: BuscadorAZ;
      directos: Directos;
      parrilla: Parrilla;
      nowAndNext: {
        emisoras: {
          tipo: string;
          urlContent: string;
        }[];
      };
      buscador: Buscador;
      territoriales: {
        informativos: string;
        emisoras: string;
      };
    };
  };
}

interface MenuItem {
  orden: number;
  title: string;
  resaltado: boolean;
  tipo: string;
  subscriptor?: boolean;
  urlContent?: string;
  imgBackground?: string;
  decorado?: boolean;
  menuItems?: {
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
    pais?: string;
    decorado?: boolean;
    appIOS?: string;
    schemeIOS?: string;
    appAndroid?: string;
    id?: string;
    subscriptor?: boolean;
  }[];
  mostrarlogado?: string;
  so?: string;
}

interface Buscador {
  urlContent: string;
  tituloLomasBuscado: string;
  urlBuscadorPredef: string;
  urlLomasBuscado: string;
  generospeliculas?: {
    'nav-pag_name': string;
    'nav-pag_url': string;
  }[];
}

interface BuscadorAZ {
  canales: {
    orden: number;
    title: string;
    urlContent: string;
  }[];
  categorias: {
    orden: number;
    title: string;
    urlContent: string;
  }[];
}

interface DirectosRadio {
  urlContent: string;
}

interface Parrilla {
  agrupadores: {
    orden: number;
    title: string;
    canales: {
      orden: number;
      title: string;
      logo: string;
      urlContent: string;
      idAsset: string;
    }[];
  }[];
}

interface Directos {
  urlContent: string;
  urlbasestartover: string;
  programsstartover?: {
    programId: string;
    idGolumi: string;
    sgce: string;
  }[];
}
