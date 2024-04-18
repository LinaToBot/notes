Nullish operators provide a more precise way to check whether a
value is null or undefined. These operators are:
?? (nullish coalescing operator) and ?. (optional chaining operator).

# THE NULLISH COALESCING OPERATOR (??)

It is used to provide a default value when a value is null or undefined.

const example = null ?? 'this is a default value';
console.log(example); // Output: "this is a default value"

const item = undefined ?? 'this is a default value';
console.log(item); // Output: "this is a default value"

const itemValue = 'item is 2' ?? 'this is a default value';
console.log(itemValue); // Output: "item is 2"

---

# THE OPTIONAL CHAINING OPERATOR (?.)

It is used to access object properties safely, avoiding errors if
a property is null or undefined.

const object = {
property: {
subproperty: 'Hello!'
}
};

Without the optional chaining operator:
console.log(object.property.subproperty);
// Output: Uncaught TypeError: Cannot read property 'subproperty' of undefined

With optional chaining operator:
console.log(object.property?.subproperty);
// Output: "Hello!"
console.log(object.property?.subproperty?.length);
// Output: 6

These operators are useful for writing more concise and safe
code in JavaScript, avoiding common errors related to null or
undefined values.
