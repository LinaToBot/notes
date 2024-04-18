forEach();

SIMPLE ITERATION and ELEMENT UPDATE:
If you only need to perform an operation on an array or return the result 
without creating a new array, forEach is the correct option

const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num));
// return 1, 2, 3, 4 

You could use this method to update the array of elements, without create a new one

let numbers = [1, 2, 3, 4];
numbers.forEach((num, index) => numbers[index] = num * 2);
// return numbers = [2, 4, 6, 8]

SIDE EFFECT OPERATIONS:
When you need to perform side-effect operations on each element in an array, such as updating a state, modifying the DOM on a web page, or sending data to a server, forEach() is useful.

const names = ["John", "Jane", "Alice"];
names.forEach(name => console.log(`Hola, ${name}!`));
// return: "Hola, John!", "Hola, Jane!", "Hola, Alice!" 

ELEMENTS ELIMINATION:
You must have caution when modifying an array while iterating over it, forEach() can be useful for removing elements from an array under certain conditions.

let numbers = [1, 2, 3, 4];
numbers.forEach((num, index) => {
  if (num % 2 === 0) {
    numbers.splice(index, 1);
  }
});
// return numbers = [1, 3]

In general, forEach() is useful when you need to perform an operation on each element of an array without the need to create a new array or return a result.