export default interface PlayIndexApps {
  id: string;
  category: {
    breadcrumb: string;
    id: number;
    title: string;
    uid: string;
  };
  pubPoint: string;
  title: string;
  rows: {
    orden: number;
    title: null | string;
    noLabels?: boolean;
    moduleType: 'Collection' | 'livesCollection' | 'KeepWatching' | 'catalogs';
    urlContent?: string;
    tipo: string;
    subTitle?: null;
    numLayout?: number;
    links?: {
      title: string;
      image: string;
      tipo: 'collection' | 'portadaPlay';
      url: string;
      coverpage: null | string;
      imgHorizontal: string;
      imgSquare: string;
    }[];
  }[];
}
