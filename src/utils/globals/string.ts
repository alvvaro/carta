export {};

declare global {
  interface String {
    between(beginning: string, end: string): string;
  }
}

if (!String.prototype.between) {
  String.prototype.between = function (this, beginning, end) {
    return (this.split(beginning).at(-1) || '').split(end).at(0) || '';
  };
}
