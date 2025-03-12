export default interface Channel {
  uri: string;
  htmlUrl: string;
  htmlShortUrl: string;
  id: string;
  medioRef: string;
  uid: Uid;
  title: Title;
  permalink: Permalink;
}

type Title =
  | 'Archivo RTVE'
  | 'RNE Audio'
  | 'Teledeporte'
  | 'Clan TVE'
  | 'Radio 3 Extra'
  | 'PLAYZ'
  | 'La 2'
  | 'La 1'
  | 'Radio 5'
  | 'RTVE Play Television'
  | 'Radio Nacional'
  | 'Ràdio 4'
  | 'Radio Clásica'
  | 'Radio Exterior'
  | 'La 2 Cataluña'
  | 'Canal 24H'
  | 'Radio 3'
  | 'Play Video'
  | 'TVE Catalunya'
  | 'Playz Radio'
  | 'Filmoteca';

type Permalink =
  | 'archivo-rtve'
  | 'rne-audio'
  | 'teledeporte'
  | 'clan'
  | 'radio-3-extra'
  | 'playz'
  | 'la2'
  | 'la1'
  | 'radio-5'
  | 'rtve-play-television'
  | 'radio-nacional'
  | 'radio-4'
  | 'radio-clasica'
  | 'radio-exterior'
  | 'la-2-cataluna'
  | '24-horas'
  | 'radio-3'
  | 'play-video'
  | 'tve-catalunya'
  | 'playz-radio'
  | 'filmoteca';

type Uid =
  | 'CAD_ARCHIV'
  | 'CAD_PLAYR'
  | 'CAD_TELEDE'
  | 'CTV_CLANTV'
  | 'CRN_R3EXTR'
  | 'CAD_PLAYZ'
  | 'CTV_LA2'
  | 'CTV_LA1'
  | 'CRN_RADIO5'
  | 'CAD_PLAY'
  | 'CRN_RADIO1'
  | 'CRN_RADIO4'
  | 'CRN_RADIOC'
  | 'CRN_RADIOE'
  | 'CTV_LA2C'
  | 'CTV_C24H'
  | 'CRN_RADIO3'
  | 'CAD_PLAYXVI'
  | 'CTV_TVECAT'
  | 'CAD_PLAYZR'
  | 'CAD_FILMOT';
