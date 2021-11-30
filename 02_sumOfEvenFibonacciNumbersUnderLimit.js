// pjeuler #02
// in Fibonacci sequence every third number is even

function sumOfEvenFibonacciNumbersUnderLimit(num) {
  let a = 1;
  let b = 1;
  let c = a + b;
  let sum = 0;

  while (c < num) {
    sum += c;
    a = b + c;
    b = a + c;
    c = a + b;
  }

  return sum;
}