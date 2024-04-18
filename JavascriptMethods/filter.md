filter()

The filter() method in JavaScript is used when you need to filter elements of an array based on a specific condition. Some common cases where you can use filter() include:

FILTER BY VALUE:
You can use filter() to filter elements of an array based on their value. For example, if you have a series of numbers and you need to get only the even numbers:

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
// evenNumbers = [2, 4]

FILTER BY OBJECT PROPERTIES:
If you have an array of objects and you need to filter the objects based on a specific property, filter() is useful. For example, if you have an array of users and you need to obtain only the users of legal age:

const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Alice", age: 18 }
];
const adults = users.filter(user => user.age >= 18);
// adults = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }, { name: "Alice", age: 18 }]

FILTER BY A COMPLEX CONDITION:
You can use filter() to filter elements based on more complex conditions involving multiple properties or calculations. For example, if you have an array of products and you need to get only the products that are in stock and have a price less than a certain value:

const products = [
  { name: "Phone", price: 500, inStock: true },
  { name: "Laptop", price: 1000, inStock: false },
  { name: "Tablet", price: 300, inStock: true }
];
const affordableProducts = products.filter(product => product.inStock && product.price < 600);
// affordableProducts = [{ name: "Phone", price: 500, inStock: true }, { name: "Tablet", price: 300, inStock: true }]

REMOVING UNWANTED ITEMS:
If you have an array and need to remove specific elements that don't meet a certain condition, filter() is useful for this as well.

const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter(num => num !== 3);
// filteredNumbers = [1, 2, 4, 5]