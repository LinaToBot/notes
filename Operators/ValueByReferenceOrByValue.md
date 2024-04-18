# VALUE BY REFERENCE AND VALUE BY VALUE

In JavaScript, the concept of "value by reference" and "value by value" relates
to how values of different data types are handled and compared.

---

# Value by reference

In this case, when you assign an object (or an array) to a variable,
you are actually assigning a reference to the location in memory where
that object is stored. Therefore, if you assign that object to another variable,
both variables will point to the same object in memory.

Changes made to one variable will be reflected in the other variable, since
they are both pointing to the same object.

let arr1 = [1, 2, 3];
let arr2 = arr1; // The reference of 'arr1' is copied to 'arr2'

console.log(arr1); // Output: [1, 2, 3]
console.log(arr2); // Output: [1, 2, 3]

arr2.push(4); // Modifying 'arr2'
console.log(arr1); // Output: [1, 2, 3, 4] (arr1 is also modified)
console.log(arr2); // Output: [1, 2, 3, 4]

arr1 === arr2 // Output: true

---

# Value by value

In this case, when you assign a primitive data type (such as a number, string,
boolean, null, or undefined) to a variable, the actual value of that data is
assigned to the variable. If you assign that value to another variable, the value
is copied to the new variable.

The variables are independent and any change in one variable will not affect the other.

a = {}
b = {}

console.log(a === b); // Output: false

Here, a and b are two different objects, even though they have the same
structure. This is because in JavaScript, when you create an object using {},
a new object is created in memory, and although two objects may have the same
properties and values, they are still different objects and occupy different
locations in memory. Therefore, the comparison a === b returns false.

---

# In short...

... in JavaScript, object comparison is done by reference, meaning that two
objects are only equal if they point to the same memory location. On the other hand,
comparison of primitive data types is done by value.
