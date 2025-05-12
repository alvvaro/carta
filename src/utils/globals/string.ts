export {};

declare global {
  interface String {
    append(...strs: string[]): string;
    between(beginning: string, end: string): string;
  }
}

if (!String.prototype.append) {
  String.prototype.append = function (this, ...strs) {
    return [this, ...strs].join(' ').trim();
  };
}

if (!String.prototype.between) {
  String.prototype.between = function (this, beginning, end) {
    return (this.split(beginning).at(-1) || '').split(end).at(0) || '';
  };
}
