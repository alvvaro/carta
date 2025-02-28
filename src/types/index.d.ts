import AgeRange from './AgeRange';
import Channel from './Channel';
import Collection from './Collection';
import Genre from './Genre';
import MConfigsRtvePlayEstructura from './MConfigsRtvePlayEstructura';
import PlayIndexApps from './PlayIndexApps';
import Token from './Token';
import Lives from './lives';

export default interface RTVE {
  AgeRange: AgeRange;
  Channel: Channel;
  Collection: Collection;
  Genre: Genre;
  MConfigsRtvePlayEstructura: MConfigsRtvePlayEstructura;
  PlayIndexApps: PlayIndexApps;
  Token: Token;
  Lives: Lives;
}
