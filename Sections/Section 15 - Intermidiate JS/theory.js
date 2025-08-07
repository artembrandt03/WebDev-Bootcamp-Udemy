/*
Intermidiate JavaScript Concepts

Math.random() is a function that returns a pseudo-random floating-point number in the range from 0 (inclusive) to 1 (exclusive).
Example usage: 
let randomValue = Math.random();

Math.floor() is a function that returns the largest integer less than or equal to a given number.
Example usage:  
let flooredValue = Math.floor(4.7); // returns 4

Conditional statements: 
if (condition) {
    // code to execute if condition is true
}
else {
    // code to execute if condition is false
}

Comparators and equality operators:
== (equal to), != (not equal to), === (strictly equal to), !== (strictly not equal to), >, <, >=, <=

Combining conditions:
&& (logical AND), || (logical OR)

ARRAYS
Array is a data structure that can hold multiple values at once.
Example:
let fruits = ["apple", "banana", "cherry"];

Accessing elements:
let firstFruit = fruits[0]; // "apple"

Adding elements:
fruits.push("date"); // adds "date" to the end of the array

Removing elements:
fruits.pop(); // removes the last element ("date")

Accessing the last element:
let lastFruit = fruits[fruits.length - 1]; // "cherry"

.includes() method:
let hasBanana = fruits.includes("banana"); // true

WHILE LOOPS
A while loop repeatedly executes a block of code as long as a specified condition is true.
Example:
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

FOR LOOPS
A for loop is used to iterate over a sequence (like an array) a specific number of times.
Example:
for (let i = 0; i < 5; i++) {
    console.log(i);
}
*/