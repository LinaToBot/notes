map(); 

Iterates over each element of an array and return a new array. This new array will 
contain the elements of the first array but manipulated by a function given in the map.
Useful when you need to transform each element of an array into something different.

DATA TRANSFORMATION:
You can use map() to transform each element of an array into
something different. For example, if you have an array of numbers and you need
duplicate each number, you can use map() to do it.

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
// doubled = [2, 4, 6, 8]


DATA FORMATTING:
Often, you need to format data in a specific way for your
visualization or processing. map() allows you to apply a function
format each element of an array.

const names = ["John", "Jane", "Alice"]; 
const formattedNames = names.map(name => name.toUpperCase());
// formattedNames = ["JOHN", "JANE", "ALICE"]

RENAMING KEYS
If in a service you need to manipulate the keys of that object and
change their names, with map() you can do it.
 
const newKeysNames = endpoint?.elements.map(
    ({ name_key_one, name_key_two }) => ({
      first_key: name_key_one,
      second_key: name_key_two,
    }),
  );
// newKeysNames = [first_key, second_key]

PROPERTY EXTRACTION:
When working with objects within an array, you can use map() to
extract certain properties of those objects and form a new array
with those properties.

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Alice" }
];
const userIds = users.map(user => user.id);
// userIds = [1, 2, 3]


DYNAMIC CONTENT GENERATION:
In web applications, you often need to generate dynamic content
based on data. map() allows you to generate elements in a way
dynamic from an array of data.

const items = ["Apple", "Banana", "Orange"];
const itemList = items.map(item => `<li>${item}</li>`);
// itemList = ["<li>Apple</li>", "<li>Banana</li>", "<li>Orange</li>"]

Overall, map() is a versatile tool that allows you to perform 
transformations on array data in a concise and readable way.