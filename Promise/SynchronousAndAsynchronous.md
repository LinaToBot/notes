# SYNCHRONISM AND ASYNCHRONISM

In JavaScript, synchronism and asynchronism refer to the order of
execution of operations within the program.

In JavaScript, asynchrony is mainly implemented by
through callbacks, promises and async/await.

Sure, let's dive into how async is implemented in JavaScript to
through callbacks, promises and async/await:

---

# Callbacks (Callbacks):

Callbacks are functions that are passed as arguments
to other functions. In the context of asynchrony, they are used to handle
the completion of an asynchronous operation. For example, in the case of
setTimeout, the function passed as an argument is executed after
the specified time has elapsed. Here is an example:

console.log("Home");

setTimeout(function() {
console.log("Message after 2 seconds");
}, 2000);

console.log("End");

In this code, the function passed to setTimeout will be executed after 2
seconds, but the program execution will not stop.

---

# Promises

Promises are objects that represent the eventual success or failure of
an asynchronous operation and its resulting value. They allow chaining operations
more readable and handle errors more effectively
than callbacks. A promise has three states: pending
(pending), resolved (fulfilled) or rejected (rejected). Here is an example
How promises are used:

console.log("Home");

const promise = new Promise(function(resolve, reject) {
setTimeout(function() {
resolve("Message after 2 seconds");
}, 2000);
});

promise.then(function(result) {
console.log(result);
}).catch(function(error) {
console.error("Error:", error);
});

console.log("End");

In this example, the promise resolves after 2 seconds and prints
the result. If the promise is rejected (for example, if there is an error), it is handled
the error using the catch method.

---

# async/await

async and await are features introduced in ECMAScript 2017 that simplify
promise handling and make asynchronous code look more like code
synchronous. The async keyword is used to declare an asynchronous function,
while await is used to wait for the resolution of a promise within
an asynchronous function. Here is an example:

console.log("Home");

async function wait() {
await new Promise(resolve => setTimeout(resolve, 2000));
console.log("Message after 2 seconds");
}

wait();

console.log("End");

In this example, the wait function waits for the resolution of the promise before
to print the message. Meanwhile, program execution continues and
"End" is printed before the wait is completed.
