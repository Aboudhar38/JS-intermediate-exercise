/**
 * 1. Factorial (Recursion)
 * Calculates the factorial of a non-negative integer recursively.
 */
function factorial(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
    throw new Error("Input must be a non-negative integer.");
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

// Test cases
console.log("factorial(5):",
factorial(5)); // 120
console.log("factorial(0):",
factorial(0)); // 1
