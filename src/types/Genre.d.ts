export default interface Genre {
  generoInf?: string;
  generoInfUid?: string;
  generoId?: string;
  subGeneroInfUid?: SubGeneroInfUid | null;
  subGeneroInf?: SubGeneroInf | null;
  subGeneroId?: null | string;
}

type SubGeneroInf =
  | 'Arquitectura'
  | 'Documentales'
  | 'Fútbol'
  | 'Tecnología'
  | 'Naturaleza y Medio ambiente'
  | 'Rock/Pop'
  | 'Cine'
  | 'Eurovisión'
  | 'Arte'
  | 'Fotografía'
  | 'Literatura'
  | 'Clásica'
  | 'Atletismo'
  | 'Masterchef'
  | 'Músicas del mundo';

type SubGeneroInfUid =
  | 'GEN_ARQUI'
  | 'GEN_DOCUM'
  | 'GEN_FUTBOL'
  | 'GEN_TECNO'
  | 'GEN_MEDAM'
  | 'GEN_ROCKP'
  | 'GEN_CINEC'
  | 'GEN_EUROV'
  | 'GEN_ARTEC'
  | 'GEN_FOTOG'
  | 'GEN_LITER'
  | 'GEN_CLASIC'
  | 'GEN_ATLET'
  | 'GEN_MCHEF'
  | 'GEN_MUMUD';
