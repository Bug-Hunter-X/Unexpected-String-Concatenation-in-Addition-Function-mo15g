function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; // Potential error if a or b is not a number
}

console.log(foo(10, 20)); // Output: 30
console.log(foo(null, 20)); // Output: null
console.log(foo(10, null)); // Output: null
console.log(foo("10", 20)); // Output: 1020 (Unexpected behavior)
console.log(foo(10, "20")); // Output: 1020 (Unexpected behavior)