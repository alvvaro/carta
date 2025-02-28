export default interface RTVEProgram {
  page: Page;
}

interface Page {
  items: any[];
  number: number;
  size: number;
  offset: number;
  total: number;
  totalPages: number;
  numElements: number;
}
