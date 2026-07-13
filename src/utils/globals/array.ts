export {};

declare global {
  interface Array<T> {
    interleave(delim: string): T[];
    compact(): NonNullable<T>[];
  }
}

if (!Array.prototype.interleave) {
  Array.prototype.interleave = function (this, delim) {
    function* _interleave<T>(arr: T[], delim: string) {
      let first = true;
      for (const x of arr) {
        if (!first) yield delim;
        first = false;
        yield x;
      }
    }

    return Array.from(_interleave(this, delim));
  };
}

if (!Array.prototype.compact) {
  Array.prototype.compact = function (this) {
    return this.filter((x) => !!x);
  };
}
