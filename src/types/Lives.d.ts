export default interface Lives {
  page: {
    items: {
      uri: string;
      id: string;
      htmlUrl: string;
      titulo?: string;
      antetitulo?: string;
      inicio: null | string;
      live: boolean;
      porcentaje: number | null;
      tipo: string;
      contentType: 'directo';
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
      agrLiveDefault: {
        uri: string;
        id: string;
        titulo: string;
        htmlUrl: string;
      } | null;
      duracion: number | null;
      orden: number;
      metaTitle?: string;
      metaDescription?: null | string;
      keywords?: null;
      canonical?: null;
      permalink: null | string;
      hasDRM: boolean;
      idLicencia: null;
      vertical?: unknown | null;
      hasPfNews?: boolean;
      requireLogged: boolean;
      type: 'video';
      thumbnailer?: boolean;
      thumbPrio?: boolean;
      sgce?: null | string;
      idGolumi?: string;
      canal?: string;
      before?: Before | null;
      now?: Before | null;
      next?: Before | null;
      channelStatsID?: null;
    }[];
    number: number;
    size: number;
    offset: number;
    total: number;
    totalPages: number;
    numElements: number;
  };
}

interface Before {
  titulo: string;
  inicio: string;
  fin: string;
  duracion: number;
  sgce: null | string;
}
