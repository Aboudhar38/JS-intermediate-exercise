/**
 * 2. Prime Number Check
 * Checks whether a number is prime up to the square root of n.
 */
function isPrime(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n <= 1) {
    return false;
  }

  const limit = Math.sqrt(n);
  for (let i = 2; i <= limit; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// Test cases
console.log("isPrime(7):", 
isPrime(7));   // true
console.log("isPrime(9):", 
isPrime(9));   // false
console.log("isPrime(1):", 
isPrime(1));   // false
console.log("isPrime(29):", 
isPrime(29)); // true
