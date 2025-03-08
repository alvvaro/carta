export interface Pagination<T> {
  page: Page<T>;
}

export interface Page<T> {
  items: T[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}
