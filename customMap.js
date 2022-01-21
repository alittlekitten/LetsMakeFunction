function customMap(func, thisArg = this) {
  const result = [];
  for (let i = 0; i < this.length; ++i) {
    result.push(func.call(thisArg, this[i]));
  }
  return result;
}

Array.prototype.customMap = customMap;
const a = [1, 2, 3, 4];
const c = [6, 4, 2, 2, 3];

console.log(
  a.customMap((elem) => {
    return elem * this.length;
  }, c)
);
