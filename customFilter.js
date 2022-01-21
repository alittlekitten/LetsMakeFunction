function customFilter(func, thisArg = this) {
  const result = [];
  for (let i = 0; i < this.length; ++i) {
    if (func.call(thisArg, this[i], i, this)) result.push(this[i]);
  }
  return result;
}

Array.prototype.customFilter = customFilter;
const a = [1, 2, 3, 4];
const filterTest = a.customFilter((elem) => elem > 2);
console.log(filterTest);
