import AgeRange from './AgeRange';
import Channel from './Channel';
import Collection from './Collection';
import Genre from './Genre';
import Lives from './Lives';
import MConfigsRtvePlayEstructura from './MConfigsRtvePlayEstructura';
import PlayIndexApps from './PlayIndexApps';
import Token from './Token';

export default interface RTVE {
  AgeRange: AgeRange;
  Channel: Channel;
  Collection: Collection;
  Genre: Genre;
  Lives: Lives;
  MConfigsRtvePlayEstructura: MConfigsRtvePlayEstructura;
  PlayIndexApps: PlayIndexApps;
  Token: Token;
}
