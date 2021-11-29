// pjeuler #01

function sumOfMultiplesThreeAndFiveBelow(num) {
  const sumDivisableBy = (multiply) => {
    const p = Math.floor((num - 1) / multiply);
    return multiply * ((p * (p + 1)) / 2);
  }

  return sumDivisableBy(3) + sumDivisableBy(5) - sumDivisableBy(3 * 5);
}