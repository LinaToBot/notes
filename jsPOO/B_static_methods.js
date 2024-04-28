// Object.keys()
// It returns a list with all the keys (key names) of our target object

const object = {
  name: "Paulina",
  email: "paulina2345@blue.io",
  age: 29,
};

Object.keys(object); // ["name", "email", "age"]
console.log(Object.keys(object));

// Object.getOwnPropertyNames()
// The Object.getOwnPropertyNames() static method returns an array of all properties
// (including non-enumerable properties except for those which use Symbol)
// found directly in a given object.

const arr = ["a", "b", "c"];
console.log(Object.getOwnPropertyNames(arr).sort()); // ["0", "1", "2", "length"]
console.log(Object.getOwnPropertyNames(object).sort()); // [ 'age', 'email', 'name' ]

// Object.entries()
// The entries method will return an array of arrays where we will have our
// keyword with its respective value for each property of the prototype [key, value]

console.log(Object.entries(object));
// [
//  0: [ 'name', 'Paulina' ],
//  1: [ 'email', 'paulina2345@blue.io' ],
//  2: [ 'age', 29 ]
// ]

// Object.getOwnPropertyDescriptors()
// It returns all the properties of the objects, with their keys and values,
// and other attributes. The writable, configurable and enumerable attributes
// are JavaScript's way of limiting access to modify or modify our attributes or our objects.

console.log(Object.getOwnPropertyDescriptors(object));

// {
//   name: {
//     value: 'Paulina',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   email: {
//     value: 'paulina2345@blue.io',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   age: { value: 29, writable: true, enumerable: true, configurable: true }
// }

const pau = {
  name: "Paulina",
  age: 29,
  approvedCourses: ["Curso 1"],
  addCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  },
};

// You could list the object pau with: Object.keys(), Object.getOwnPropertyNames(),
// Object.entries() and Object.getOwnPropertyDescriptors()

//console.log(Object.entries(pau));
// return:
// [
//   [ 'name', 'Paulina' ],
//   [ 'age', 29 ],
//   [ 'approvedCourses', [ 'Curso 1' ] ],
//   [ 'addCourse', [Function: addCourse] ],
// ]

// console.log(Object.entries(pau)[3]); // return: [ 'addCourse', [Function: addCourse] ]

// console.log(Object.entries(pau)[3][0]); // return : addCourse

// console.log(Object.entries(pau)[3][1]); // return [Function: addCourse]

// console.log(Object.entries(pau)[3][1]("Course 2"));
// return:    this.approvedCourses.push(newCourse);
//                                 ^
// TypeError: Cannot read properties of undefined (reading 'push')

// this error is because the "this" is not from the "pau" object, it refers to the new array of arrays
// (the array where function is saved):

//console.log(Object.entries(pau));
// return:
// [
//   [ 'name', 'Paulina' ],
//   [ 'age', 29 ],
//   [ 'approvedCourses', [ 'Curso 1' ] ],
//   [ 'addCourse', [Function: addCourse] ],
// ]

console.log("hola", Object.getOwnPropertyDescriptors(pau));
// returns :
// {
//   name: {
//     value: 'Paulina',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   age: { value: 29, writable: true, enumerable: true, configurable: true },
//   approvedCourses: {
//     value: [ 'Curso 1' ],
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   addCourse: {
//     value: [Function: addCourse],
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }

// Object.defineProperty
// Add new attribute into a object with its Property Descriptors
console.log(
  Object.defineProperty(pau, "favoriteColor", {
    value: "purple",
    writable: true,
    enumerable: true,
    configurable: true,
  })
);

// returns:
// {
//   name: 'Paulina',
//   age: 29,
//   approvedCourses: [ 'Curso 1' ],
//   addCourse: [Function: addCourse],
//   favoriteColor: 'purple'
// }
