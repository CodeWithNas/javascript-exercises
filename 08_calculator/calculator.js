const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, number) => total + number, 0);
};

const multiply = function(array) {
  return array.reduce((product, number) => product * number, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	 if (n < 0) return "ERROR"
   if (n === 0 || n === 1) return 1;

   let results = 1;

  for (let i = 2; i <= n; i++) {
    results *= i;
  }
  return results;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
