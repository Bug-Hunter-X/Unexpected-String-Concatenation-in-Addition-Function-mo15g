# Unexpected String Concatenation in JavaScript Addition Function

This repository demonstrates a common JavaScript error: unexpected string concatenation when performing addition. The `foo` function intends to add two numbers but fails when given string inputs, resulting in string concatenation instead of numerical addition.

## Bug

The `bug.js` file contains the buggy function.  The function does not perform type checking, leading to unexpected results when strings are passed as arguments. 

## Solution

The `bugSolution.js` file provides a corrected version of the function.  Type checking is added to ensure that both inputs are numbers before performing the addition operation.  If either input is not a number, an appropriate error message or a default value is returned.

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred code editor.
3. Run the JavaScript files using Node.js or a web browser's developer console to see the difference in behavior.