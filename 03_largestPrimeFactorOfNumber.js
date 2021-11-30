// pjeuler #03

// number 2 is the only even prime factor
// every number n can at most have one prime factor greater than Math.sqrt(n)

function largestPrimeFactorOfNumber(num) {
  let lastFactor = 1;

  if (num % 2 === 0) {
      lastFactor = 2;
      num = num / 2;

      while (num % 2 === 0) {
          num = num / 2;
      }
  }

  let factor = 3;
  let maxPossibleFactor = Math.sqrt(num);

  while (num > 1 && factor <= maxPossibleFactor) {
      if (num % factor === 0) {
          num = num / factor;
          lastFactor = factor;

          while (num % factor === 0) {
              num = num / factor;
          }

          maxPossibleFactor = Math.sqrt(num);
      }

      factor += 2;
  }

  return num > lastFactor ? num : lastFactor;
}