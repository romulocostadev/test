const a = "blaaaaaa";

function multiply(a = 1, b) {
  // Noncompliant
  return a * b;
}

var x = multiply(42); // returns NaN as b is undefined
