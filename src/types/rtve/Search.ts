import { type Pagination } from '@/types/Pagination';

import { type Program } from './Program';
import { type Video } from './Video';

export interface SearchResults {
  contents?: Pagination<Video>;
  programs?: Pagination<Program>;
  videos?: Pagination<Video>;
}
