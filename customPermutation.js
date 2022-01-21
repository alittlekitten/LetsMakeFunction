const permutation = (arr, num) => {
  const result = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const permutations = permutation(rest, num - 1);
    const attach = permutations.map((permutation) => [v, ...permutation]);
    result.push(...attach);
  });
  return result;
};

const numbers = [1, 2, 3];

const result = permutation(numbers, 3);
console.log(result);
