const permutation2 = (arr, num) => {
  const result = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const permutations = permutation2(arr, num - 1);
    const attach = permutations.map((permutation) => [v, ...permutation]);
    result.push(...attach);
  });
  return result;
};

const numbers = [1, 2, 3];
const result = permutation2(numbers, 4);
console.log(result);
