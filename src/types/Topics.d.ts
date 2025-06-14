export interface Item {
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
  traducciones: Record<string, string>;
  parentRef: string;
  childrenRef: string;
  descendantsRef: string;
  ancestrosRef: string;
  uri: string;
  id: string;
}
