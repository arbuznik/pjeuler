function gcd(a, b) {
  let c;
  
  if (b > a) { [a, b] = [b, a] }

  while (a % b) {
    c = b;
    b = a % b;
    a = c;
  }

  return b;
}

// recursive
function gcd(a, b) {
  if (b === 0) { return a } 

  return gcd(b, a % b);
}