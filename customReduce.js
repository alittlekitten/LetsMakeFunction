function customReduce(func, init) {
  let i;
  let acc;
  if (init === undefined) {
    i = 1;
    acc = this[0];
  } else {
    i = 0;
    acc = init;
  }
  for (; i < this.length; ++i) {
    acc = func(acc, this[i], i, this);
  }
  return acc;
}

Array.prototype.customReduce = customReduce;

a = [1, 2, 3, 4];

const reduceTest = a.customReduce((prev, curr) => prev + curr, 0);
console.log(reduceTest);
console.log(a.reduce((prev, curr) => prev + curr, 0));
// acc cur idx arr
