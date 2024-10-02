export interface RTVEHome {
  id: string;
  category: Category;
  pubPoint: string;
  title: string;
  rows: Row[];
}

interface Category {
  breadcrumb: string;
  id: number;
  title: string;
  uid: string;
}

interface Row {
  orden: number;
  title: null | string;
  noLabels?: boolean;
  moduleType: ModuleType;
  urlContent?: string;
  tipo: string;
  subTitle?: null;
  numLayout?: number;
  links?: Link[];
}

interface Link {
  title: string;
  image: string;
  tipo: Tipo;
  url: string;
  coverpage: null | string;
  imgHorizontal: string;
  imgSquare: string;
}

enum Tipo {
  Collection = 'collection',
  PortadaPlay = 'portadaPlay',
}

enum ModuleType {
  Catalogs = 'catalogs',
  Collection = 'Collection',
  KeepWatching = 'KeepWatching',
  LivesCollection = 'livesCollection',
}
