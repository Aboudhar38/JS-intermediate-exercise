/**
 * 3. Sum of Array Elements
 * Returns the sum of all elements in an array without using reduce().
 */
function sumArray(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error("Input must be an array of numbers.");
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

// Test cases
console.log("sumArray([2, 4, 6, 8]):", 
sumArray([2, 4, 6, 8])); // 20
console.log("sumArray([]):", 
sumArray([]));                     // 0
console.log("sumArray([-5, 10, 3]):", 
sumArray([-5, 10, 3]));   // 8
