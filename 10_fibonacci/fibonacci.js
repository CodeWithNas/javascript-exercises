const fibonacci = function(n) {
  n = Number(n);
  if (n < 0) return "OOPS"
  if (n ===0) return 0;
  if (n === 1 || n === 2) return 1;

  let a = 1;
  let b = 1;

  for (let i = 3; i <= n; i++) {
    let next = a + b;
    a = b;
    b = next;
  }

  return b;

};

// Do not edit below this line
module.exports = fibonacci;
