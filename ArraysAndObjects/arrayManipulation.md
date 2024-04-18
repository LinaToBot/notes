# Copy an array

original const = [1, 2, 3];
const copy = [...original];

console.log(copy); // Output: [1, 2, 3]

---

# Concatenate arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

concatenated const = [...array1, ...array2];

console.log(concatenated); // Output: [1, 2, 3, 4, 5, 6]

---

# Add elements to an array

const arrayOriginal = [1, 2, 3];
const newArray = [...arrayOriginal, 4, 5, 6];

console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]
