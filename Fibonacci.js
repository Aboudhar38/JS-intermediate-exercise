/**
 * 5. Fibonacci Sequence
 * Returns the first `count` numbers in the Fibonacci sequence.
 */
function fibonacci(count) {
  if (typeof count !== 'number' || !Number.isInteger(count) || count < 0) {
    throw new Error("Input must be a non-negative integer.");
  }

  if (count === 0) return [];
  if (count === 1) return [0];

  const sequence = [0, 1];
  while (sequence.length < count) {
    const nextVal = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextVal);
  }

  return sequence;
}

// Test cases
console.log("fibonacci(7):", 
fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]
console.log("fibonacci(1):", 
fibonacci(1)); // [0]
console.log("fibonacci(0):", 
fibonacci(0)); // []
