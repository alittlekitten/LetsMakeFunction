const combination = (arr, num) => {
  const result = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combinations = combination(rest, num - 1);
    const attach = combinations.map((combination) => [v, ...combination]);
    result.push(...attach);
  });
  return result;
};

const numbers = [1, 2, 3];

const result = combination(numbers, 2);
console.log(result);
