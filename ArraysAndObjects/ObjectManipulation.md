# WAYS TO MANIPULATE OBJECTS IN JAVASCRIPT

---

# Dot notation

Access the properties of an object using the dot operator.

const person = {
name: "John",
age: 30
};

console.log(person.name); // Output: Juan
console.log(person.age); // Output: 30

---

# Bracket notation

Access the properties of an object using brackets and the property name as a string.

const person = {
name: "John",
age: 30
};

console.log(person['name']); // Output: Juan
console.log(person['age']); // Output: 30

---

# Methods for Objects

JavaScript provides built-in methods for working with objects, such as Object.keys(),
Object.values(), and Object.entries(), which allow you to iterate over the keys, values,
and key-value pairs of an object respectively.

const person = {
name: "John",
age: 30
};

console.log(Object.keys(person)); // Output: ["name", "age"]
console.log(Object.values(person)); // Output: ["John", 30]
console.log(Object.entries(person)); // Output: [["name", "John"], ["age", 30]]

# Methods for adding properties

You can add new properties to an object using the dot operator or square bracket notation.

const person = {
name: "John",
age: 30
};

person.email = "john@example.com";
person['phone'] = "123456789";

console.log(person);
// Output: { name: "Juan", age: 30, email: "juan@example.com", phone: "123456789" }

---

# Methods to delete properties

You can delete properties of an object using the delete operators.

const person = {
name: "John",
age: 30,
email: "juan@example.com",
phone: "123456789"
};

delete person.email;
console.log(person);
// Output: { name: "Juan", age: 30, phone: "123456789" }

---

# Remove a key

const person = { name: "Juan", age: 30, height: "1.60 m" };

const {height, ...personWithoutHeight} = person;

console.log(personWithoutHeight) // output: { name: "Juan", age: 30 }

---

# Spread operator (...)

This operator is used to copy properties of one object to
another new object or to merge multiple objects into one.

const person = { name: "John", age: 30 };
const details = { email: "juan@example.com", phone: "123456789" };

const personWithDetails = { ...person, ...details };

console.log(personWithDetails);
// Output: { name: "Juan", age: 30, email: "juan@example.com", phone: "123456789" }

---

# Object.assign()

This method copies the properties of an object to another existing object.
It is similar to the spread operator, but can be used on existing objects.

const person = { name: "John", age: 30 };
const details = { email: "juan@example.com", phone: "123456789" };

Object.assign(person, details);

console.log(person);
// Output: { name: "Juan", age: 30, email: "juan@example.com", phone: "123456789" }

# Object constructor

You can create objects using constructor functions or classes.

function Person(name, age) {
this.name = name;
this.age = age;
}

const john = new Person("John", 30);
console.log(john);
// Output: { name: "John", age: 30 }

---

# Prototypes and inheritance

You can add shared methods and properties to all objects of a specific
type using prototypes.

function Person(name, age) {
this.name = name;
this.age = age;
}

Person.prototype.greet = function() {
console.log(`Hello, my name is ${this.name}`);
};

const john = new Person("John", 30);

john.greet(); // Output: Hello, my name is Juan

---

# Static Methods

You can add static methods to a constructor function or class that
are not available in individual instances.

class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}

static compareAge(person1, person2) {
return person1.age - person2.age;
}
}

const john = new Person("John", 30);
const maria = new Person("Maria", 25);

console.log(Person.compareAge(juan, maria)); // Output: 5

---

# Clone an object

const originalObject = { name: "John", age: 30 };

const clone = { ...originalObject };

console.log(clone); // Output: { name: "John", age: 30 }

---

# Combine objects

const object1 = { name: "John" };
const object2 = { age: 30 };

const combined = { ...object1, ...object2 };

console.log(combined); // Output: { name: "John", age: 30 }

---

# Functions with variable number of arguments:

function add(...numbers) {
return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15

---

# Create a copy of an object and modify it

const originalPerson = { name: "John", age: 30 };

const modifiedperson = { ...originalperson, age: 35 };

console.log(personModified); // Output: { name: "John", age: 35 }

---

# Add a key

const person = { name: "John", age: 30 };

const personWithHeight = {...person, height: "1.60 m"}

console.log(personWithHeight); // output: { name: "Juan", age: 30, height: "1.60 m" }

---

These are just some basic examples. JavaScript offers a wide range of methods and techniques for manipulating objects in more complex and sophisticated ways, including methods for object inheritance, object serialization, and object deserialization, among others.
