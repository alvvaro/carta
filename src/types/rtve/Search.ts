import { Pagination } from '@/types/Pagination';

import Program from './Program';
import Video from './Video';

export default interface SearchResults {
  contents?: Pagination<Video>;
  programs?: Pagination<Program>;
  videos?: Pagination<Video>;
}
