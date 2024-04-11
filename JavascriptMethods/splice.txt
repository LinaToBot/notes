splice()

The splice() method in JavaScript is used to change the content
of an array by removing, replacing or adding elements at positions
specific. Some common cases where you can use splice() include:

DELETING ITEMS:
You can use splice() to remove one or more elements from a
array at a specific position.

let fruits = ["Apple", "Banana", "Orange", "Mango"];
fruits.splice(1, 2); // remove "Banana" y "Orange"
// return fruits = ["Apple", "Mango"]

REPLACING ELEMENTS:
You can also use it to replace elements in an array.
You can specify the position of the element to be replaced and the number of
items to remove, followed by the items you want to add in their place.

let fruits = ["Apple", "Banana", "Orange", "Mango"];
fruits.splice(2, 1, "Pineapple", "Grapes"); // replace "Orange" and add "Pineapple" and "Grapes"
// return fruits = ["Apple", "Banana", "Pineapple", "Grapes", "Mango"]

INSERTION OF ELEMENTS:
You can use splice() to insert new elements into an array in a
specific position. To do this, you specify the position you want
insert the new elements, the number of elements you want to delete (0 if
you don't want to delete any) and the items you want to add.

let fruits = ["Apple", "Banana", "Orange", "Mango"];
fruits.splice(2, 0, "Pineapple", "Grapes"); // insert "Pineapple" and "Grapes" into index 2
// return fruits  ["Apple", "Banana", "Pineapple", "Grapes", "Orange", "Mango"]

COPY ITEMS:
splice() can also be used to copy elements from one array to another array.

const numbers = [1, 2, 3, 4, 5];
const copiedNumbers = numbers.splice(); // Copy all elements from "numbers" to "copied Numbers"

In short, splice() is useful when you need to perform complex modification operations on an array, such as deleting, replacing, or inserting elements at specific positions.