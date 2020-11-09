interface IteratorResult {
  value: any;
  done: boolean;
}

interface Iterator {
  next(value?: any);
}

interface Iterable {
  [Symbol.iterator](): Iterator;
}

export const Iterator = (base) => {
  return class PagesIterable extends base implements Iterable {
    [Symbol.iterator](): Iterator {
      const mainStr = this.toString();
      const { pages } = this.pages;
      let i = 0;
      return {
        next(): IteratorResult {
          if (i >= pages.length) return { value: undefined, done: true };
          const value = mainStr + pages[i].toString();
          i++;
          return { value, done: false };
        }
      };
    }
  }
};
