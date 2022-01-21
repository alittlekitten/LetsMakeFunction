function customForEach(func, thisArg = this) {
  for (let i = 0; i < this.length; ++i) {
    func.call(thisArg, this[i], i, this);
  }
}

Array.prototype.customForEach = customForEach;
const a = [1, 2, 3, 4];
a.customForEach((elem) => {
  console.log(elem * 2);
});
