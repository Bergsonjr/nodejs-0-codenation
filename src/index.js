"use strict";

const fibonacci = () => {
  const result = [];
  for (let i = 0; i <= 15; i++) {
    result.push(fib(i));
  }
  console.log(result)
  return result;
};

const fib = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const isFibonnaci = (num) => {
  /*
  const r1 = Math.sqrt(5 * (num * num) + 4);
  const r2 = Math.sqrt(5 * (num * num) - 4);

  return r1 % 1 == 0 || r2 % 1 == 0;
  */

  const numbers = fibonacci();
  return numbers.includes(num);
};

module.exports = {
  fibonacci,
  isFibonnaci,
};
