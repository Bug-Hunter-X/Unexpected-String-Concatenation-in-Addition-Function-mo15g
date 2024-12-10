function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Error: Inputs must be numbers"; // Handle non-number inputs
  }
  return a + b; // Add numbers
}

console.log(foo(10, 20)); // Output: 30
console.log(foo(null, 20)); // Output: null
console.log(foo(10, null)); // Output: null
console.log(foo("10", 20)); // Output: Error: Inputs must be numbers
console.log(foo(10, "20")); // Output: Error: Inputs must be numbers