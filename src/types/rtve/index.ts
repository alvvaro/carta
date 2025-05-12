import AgeRange from './AgeRange';
import Channel from './Channel';
import Collection from './Collection';
import Escort from './Escort';
import Genre from './Genre';
import Language from './Language';
import Live from './Live';
import MConfigsRtvePlayEstructura from './MConfigsRtvePlayEstructura';
import PlayIndexApps from './PlayIndexApps';
import Previews from './Previews';
import Program from './Program';
import ProgramType from './ProgramType';
import PubState from './PubState';
import RecommendAgesForChild from './RecommendAgesForChild';
import RrssApp from './RrssApp';
import Season from './Season';
import Token from './Token';
import Video from './Video';

export default interface RTVE {
  AgeRange: AgeRange;
  Channel: Channel;
  Collection: Collection;
  Escort: Escort;
  Genre: Genre;
  Language: Language;
  Live: Live;
  MConfigsRtvePlayEstructura: MConfigsRtvePlayEstructura;
  PlayIndexApps: PlayIndexApps;
  Previews: Previews;
  Program: Program;
  ProgramType: ProgramType;
  PubState: PubState;
  RecommendAgesForChild: RecommendAgesForChild;
  RrssApp: RrssApp;
  Season: Season;
  Token: Token;
  Video: Video;
}
