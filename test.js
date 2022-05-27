const foo = "blaaaaaa";

function multiply(b, a = 1) {
  // Noncompliant
  return a * b;
}

var x = multiply(42); // returns NaN as b is undefined

var x  = 1;
delete x;       // Noncompliant

function foo(){

}

delete foo;  // Noncompliant