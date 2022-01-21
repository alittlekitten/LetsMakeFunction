function customFlatMap(factory) {
  return this.reduce((acc, cur, idx) => {
    return acc.concat(factory(cur, idx));
  }, []);
}

Array.prototype.customFlatMap = customFlatMap;

const b = [[1, [1, 2]], 2, 3];
console.log(b.customFlatMap((x) => x));
