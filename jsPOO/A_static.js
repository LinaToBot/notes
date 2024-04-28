// static attributes and methods in JavaScript

// To create static attributes which we can access without creating
// an object or an instance of this prototype, we only have to add the
// word **static** to the attribute.

// attributes without instantiated
class Dog {
  static sound = "woof-woof";
}

console.log(Dog.sound); // "woof-woof"

// methods without instantiated
class Cat {
  static makeASound() {
    return "meow";
  }
}

console.log(Cat.makeASound()); // "meow"
