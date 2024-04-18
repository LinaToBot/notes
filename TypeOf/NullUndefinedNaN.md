Null, undefined, and NaN are three different values in JavaScript that
represent different types of missing values or error situations:

NULL is a primitive value in JavaScript that represents the intentional
absence of any value or an "empty" value. Used to indicate that a variable
has no value assigned.

let Nullvariable = null;

UNDEFINED is a primitive value in JavaScript that is used when a variable
has been declared but not initialized, or when a function does not return
any value explicitly.

let variableUndefined;
console.log(undefinedvariable); // Output: undefined

NaN stands for "Not a Number" and is used to represent a value that is not numeric.
Typically, NaN is generated when performing invalid arithmetic operations, such as
dividing by zero or attempting to convert a non-numeric string to a number.

let result = 10 / "two";
console.log(result); // Output: NaN

CONCLUSION:

NULL is used to represent the intentional absence of a value.

UNDEFINED is used when a variable has not been initialized or a function does not return a value.

NaN is used to represent invalid numerical operations.
