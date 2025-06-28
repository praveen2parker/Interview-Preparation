
// Js Functions

// 1. Global Functions
// * eval(): Executes a string as JavaScript code. (Use with caution due to security risks)
// * isNaN(): Checks if a value is NaN (Not-a-Number).
// * parseInt(): Parses a string and returns an integer.
// * parseFloat(): Parses a string and returns a floating-point number.
// * encodeURI(): Encodes a URI (e.g., handles spaces) for use in URLs.
// * decodeURI(): Decodes a URI encoded by encodeURI().
// * encodeURIComponent(): Encodes a URI component (more aggressive than encodeURI, good for query parameters).
// * decodeURIComponent(): Decodes a URI component encoded by encodeURIComponent().

// 2. Object Methods

// A. String Methods
// * length: (Property) Returns the number of characters in a string.
// * toLowerCase(): Converts a string to lowercase.
// * toUpperCase(): Converts a string to uppercase.
// * substring(): Extracts a part of a string between two indices.
// * slice(): Extracts a section of a string (can use negative indices).
// * indexOf(): Returns the first index of a specified value, or -1 if not found.
// * includes(): Checks if a string contains another string (returns true/false).
// * startsWith(): Checks if a string begins with a specified string.
// * endsWith(): Checks if a string ends with a specified string.
// * replace(): Replaces occurrences of a specified value (or regex) in a string.
// * split(): Divides a string into an array of substrings.
// * trim(): Removes whitespace from both ends of a string.

// B. Array Methods
// * length: (Property) Returns the number of elements in an array.
// * push(): Adds one or more elements to the end of an array.
// * pop(): Removes the last element from an array and returns it.
// * unshift(): Adds one or more elements to the beginning of an array.
// * shift(): Removes the first element from an array and returns it.
// * concat(): Joins two or more arrays, returning a new array.
// * join(): Joins all array elements into a string.
// * slice(): Creates a shallow copy of a portion of an array.
// * splice(): Changes array content by adding/removing/replacing elements in place.
// * forEach(): Executes a function once for each array element.
// * map(): Creates a new array by calling a function on every element.
// * filter(): Creates a new array with elements that pass a test.
// * reduce(): Applies a function against an accumulator and each element to reduce it to a single value.
// * find(): Returns the value of the first element that satisfies a test.
// * findIndex(): Returns the index of the first element that satisfies a test.
// * some(): Checks if at least one element in the array passes a test.
// * every(): Checks if all elements in the array pass a test.
// * includes(): Checks if an array contains a certain value.
// * sort(): Sorts the elements of an array in place.
// * reverse(): Reverses the order of elements in an array in place.

// C. Math Object Methods
// * Math.abs(): Returns the absolute value of a number.
// * Math.round(): Rounds a number to the nearest integer.
// * Math.floor(): Rounds a number down to the nearest integer.
// * Math.ceil(): Rounds a number up to the nearest integer.
// * Math.random(): Returns a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive).
// * Math.max(): Returns the largest of zero or more numbers.
// * Math.min(): Returns the smallest of zero or more numbers.
// * Math.pow(): Returns the base to the exponent power.
// * Math.sqrt(): Returns the square root of a number.

// D. Date Object Methods
// * new Date(): (Constructor) Creates a new Date object representing a specific point in time.
// * getFullYear(): Gets the four-digit year (e.g., 2025).
// * getMonth(): Gets the month (0-11, where 0 is January).
// * getDate(): Gets the day of the month (1-31).
// * getHours(): Gets the hour (0-23).
// * getMinutes(): Gets the minutes (0-59).
// * getSeconds(): Gets the seconds (0-59).
// * getTime(): Gets the number of milliseconds since January 1, 1970, 00:00:00 UTC.
// * setDate(), setMonth(), setFullYear(): Methods to set the day, month, year, etc., of a Date object.






// eval(): Executes a string as JavaScript code.

console.log("eval()");
const codeString = "console.log('Hello from eval!');";
eval(codeString); // Output: Hello from eval!

// isNaN(): Determines whether a value is NaN (Not-a-Number).

console.log("isNaN()");

console.log(isNaN(123));        // Output: false (123 is a number)
console.log(isNaN("hello"));    // Output: true ("hello" cannot be converted to a number)
console.log(isNaN(NaN));        // Output: true
console.log(isNaN("123"));      // Output: false ("123" can be converted to a number)

// parseInt(): Parses a string argument and returns an integer. An optional second argument 
// specifies the radix (base of the number in the string, e.g., 10 for decimal, 16 for hexadecimal).

console.log("parseInt()");

console.log(parseInt("100px"));     // Output: 100
console.log(parseInt("  10.5"));    // Output: 10
console.log(parseInt("0xF", 16));   // Output: 15 (hexadecimal)
console.log(parseInt("hello", 10)); // Output: NaN

//  parseFloat(): Parses a string argument and returns a floating-point number.

console.log("parseFloat()");

console.log(parseFloat("10.50px")); // Output: 10.5
console.log(parseFloat("3.14"));    // Output: 3.14
console.log(parseFloat("  -7.2e-3")); // Output: -0.0072

//  encodeURI(): Encodes a Uniform Resource Identifier (URI) by replacing certain characters with UTF-8
//  escape sequences. It encodes most characters that aren't part of the core URI syntax.

console.log("encodeURI()");

const uri = "https://example.com/my page with spaces.html?name=John Doe";
const encodedUri = encodeURI(uri);
console.log(encodedUri); // Output: https://example.com/my%20page%20with%20spaces.html?name=John%20Doe

// decodeURI()

console.log("decodeURI()");

// const encodedUri = "https://example.com/my%20page%20with%20spaces.html?name=John%20Doe";
const decodedUri = decodeURI(encodedUri);
console.log(decodedUri); // Output: https://example.com/my page with spaces.html?name=John Doe

//  encodeURIComponent(): Encodes a URI component by replacing all characters except for unreserved URI 
// characters with UTF-8 escape sequences. This is typically used for query parameters.

console.log("encodeURIComponent()");

const queryParam = "my value with & symbols";
const encodedQueryParam = encodeURIComponent(queryParam);
console.log(encodedQueryParam); // Output: my%20value%20with%20%26%20symbols

//  decodeURIComponent()

console.log("decodeURIComponent()");

// const encodedQueryParam = "my%20value%20with%20%26%20symbols";
const decodedQueryParam = decodeURIComponent(encodedQueryParam);
console.log(decodedQueryParam); // Output: my value with & symbols

// lenght

let str = "JAVASCRIPT";
console.log(str.length);

//  toLowerCase()

str = str.toLowerCase()

console.log(str)

// toUpperCase()

str = str.toUpperCase()

console.log(str)

// substring(startIndex, endIndex): Extracts characters from a string between two specified indices 
// (exclusive of endIndex).


console.log(str.substring(0, 4)); // Output: Java
console.log(str.substring(4));    // Output: Script (from index 4 to end)


// for( let i = str.length;i>=0;i--){
//     console.log(str.substring(i-1,i))  
// }


//  slice(startIndex, endIndex): Extracts a section of a string and returns it as a new string. 
// Similar to substring, but can handle negative indices (counting from the end).

console.log(str.slice(0, 4));  // Output: Java
console.log(str.slice(-6));    // Output: Script (last 6 characters)

// indexOf(searchValue, fromIndex): Returns the first index at which a given element can be found 
// in the string, or -1 if it is not present.

console.log(str.indexOf("A"));  // Output : 1
console.log(str.indexOf("SCRIPT")); // Output : 4 
console.log(str.indexOf("s"));  // Output : -1
console.log(str.indexOf("H"));  // Output : -1

// includes(searchValue, fromIndex): Determines whether one string may be found within another string,
//  returning true or false as appropriate.

console.log(str.includes("SCRIPT")); // Output: true
console.log(str.includes("FOO"));   // Output: false

// startsWith(searchString, position): Determines whether a string begins with the characters of a
//  specified string.

console.log(str.startsWith("JAVA")); // Output: true
console.log(str.startsWith("Script")); // Output: false

// endsWith(searchString, length): Determines whether a string ends with the characters of a specified 
// string.

console.log(str.endsWith("JAVA")); // Output: true
console.log(str.endsWith("SCRIPT")); // Output: false

// replace(searchValue, replaceValue): Searches a string for a specified value, or a regular expression,
//  and returns a new string where the specified values are replaced. Only replaces the first occurrence 
// unless a global regex (/g) is used.

console.log(str.replace("JA", "MA"));    // Output: MAVASCRIPT
console.log(str.replace(/JA/g, "MA"));    // Output: MAVASCRIPT

// split(separator, limit): Divides a string into an ordered list of substrings, puts these substrings 
// into an array, and returns the array.

const string = "apple,banana,orange";
const fruits = string.split(",");
console.log(fruits); // Output: ["apple", "banana", "orange"]

const sentence = "The quick brown fox";
const words = sentence.split(" ");
console.log(words);  // Output: ["The", "quick", "brown", "fox"]

// trim(): Removes whitespace from both ends of a string.

const asd = "   Hello World    ";
console.log(asd.trim()); // Output: "Hello World"

// push(element1, ...): Adds one or more elements to the end of an array and returns the new length 
// of the array.

const fruit = ["apple", "banana"];
fruit.push("orange", "grape");
console.log(fruit); // Output: ["apple", "banana", "orange", "grape"]

// pop(): Removes the last element from an array and returns that element.

const lastFruit = fruit.pop();
console.log(lastFruit); // Output: grape
console.log(fruit);    // Output: ["apple", "banana","orange"]

// unshift(element1, ...): Adds one or more elements to the beginning of an array and returns the new 
// length of the array.

fruit.unshift("apple");
console.log(fruit); // Output: ["apple", apple", "banana", "orange"]

// shift(): Removes the first element from an array and returns that element.

fruit.shift();
console.log(fruit);  // Output: [ 'apple', 'banana', 'orange' ]

// concat(array1, ...): Used to join two or more arrays. This method does not change the existing
// arrays, but instead returns a new array.

const arr1 = [1, 2];
const arr2 = [3, 4];
const newArr = arr1.concat(arr2,[5,6]);
console.log(newArr); // Output: [1, 2, 3, 4, 5, 6]


//  join(separator): Joins all elements of an array into a string.

const fruitString = fruit.join(" - ");
console.log(fruitString); // Output: "apple - banana - orange"


// splice(startIndex, deleteCount, item1, ...): Changes the contents of an array by removing or
//  replacing existing elements and/or adding new elements in place. It modifies the original array.

const numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1, 6, 7); // At index 2, remove 1 element, add 6 and 7
console.log(numbers);       // Output: [1, 2, 6, 7, 4, 5]


fruits.splice(1, 1); // Remove 1 element from index 1 (banana)
console.log(fruits); // Output: ["apple", "orange"]

// forEach(callbackFunction): Executes a provided function once for each array element.

numbers.forEach(function(number) {
    console.log(number * 2);
});
// Output:
// 2
// 4
// 6

//  numbers.forEach((a)=> {
//     console.log(a*2)
//  })

// map(callbackFunction): Creates a new array populated with the results of calling a provided 
// function on every element in the calling array.

const doubledNumbers = numbers.map(function(number) {
    return number * 2;
});
console.log(doubledNumbers); // Output: [ 2, 4, 12, 14, 8, 10 ]

// filter(callbackFunction): Creates a new array with all elements that pass the test implemented by
//  the provided function.

const number = [1, 2, 3, 4, 5];

const evenNumbers  = number.filter(a=> a%2 == 0 )

console.log(evenNumbers) // Output: [2, 4]

// reduce(callbackFunction, initialValue): Executes a reducer function (that you provide) on each 
// element of the array, resulting in a single output value.

const sum = number.reduce((a,b)=> a + b, 0)
console.log(sum)

// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0); // 0 is the initial value of accumulator
// console.log(sum); // Output: 10

// find(callbackFunction): Returns the value of the first element in the provided array that
//  satisfies the provided testing function. Otherwise, undefined is returned.

const user = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Alice" }
]

console.log(user.find(a=> a.name == "Alice"))

// findIndex(callbackFunction): Returns the index of the first element in the array that satisfies
//  the provided testing function. Otherwise, -1 is returned.

console.log(user.findIndex(a=> a.id == 2))

// some(callbackFunction): Tests whether at least one element in the array passes the test 
// implemented by the provided function. Returns true if it finds an element for which the callback 
// returns a truthy value; otherwise, false.

console.log(number.some(a=> a%2 == 0 ))

// const numbers = [1, 2, 3, 4, 5];
// const hasEven = numbers.some(num => num % 2 === 0);
// console.log(hasEven); // Output: true

// every(callbackFunction): Tests whether all elements in the array pass the test implemented by the 
// provided function. Returns true if all elements pass the test; otherwise, false.

console.log(number.every(a=> a%2 == 0))

// const numbers = [2, 4, 6, 8];
// const allEven = numbers.every(num => num % 2 === 0);
// console.log(allEven); // Output: true

// const mixedNumbers = [1, 2, 3, 4];
// const allEvenMixed = mixedNumbers.every(num => num % 2 === 0);
// console.log(allEvenMixed); // Output: false

// includes(valueToFind, fromIndex): Determines whether an array includes a certain value among its
//  entries, returning true or false as appropriate.

console.log(number.includes(3))

//sort(compareFunction): Sorts the elements of an array in place and returns the array. The default 
// sort order is ascending, built upon converting the elements into strings, then comparing their
// sequences of UTF-16 code units values. For numbers, you often need a compareFunction.


// const fruits = ["banana", "apple", "orange"];
// fruits.sort();
// console.log(fruits); // Output: ["apple", "banana", "orange"]

// const numbers = [10, 5, 20, 1];
// numbers.sort((a, b) => a - b); // Ascending numeric sort
// console.log(numbers); // Output: [1, 5, 10, 20]

// numbers.sort((a, b) => b - a); // Descending numeric sort
// console.log(numbers); // Output: [20, 10, 5, 1]

// reverse(): Reverses an array in place. The first array element becomes the last, and the last
//  array element becomes the first.


numbers.reverse();
console.log(numbers); // Output: [ 5, 4, 7, 6, 2, 1 ]

// The Math object provides mathematical constants and functions. It's not a constructor, so you don't create instances of it.

// Math.abs(x): Returns the absolute value of a number.

console.log(Math.abs(-5));  // Output: 5
console.log(Math.abs(10));  // Output: 10

// Math.round(x): Returns the value of a number rounded to the nearest integer.

console.log(Math.round(4.7)); // Output: 5
console.log(Math.round(4.3)); // Output: 4

// Math.floor(x): Returns the largest integer less than or equal to a given number.

console.log(Math.floor(4.7)); // Output: 4
console.log(Math.floor(4.3)); // Output: 4
console.log(Math.floor(-4.7)); // Output: -5

// Math.ceil(x): Returns the smallest integer greater than or equal to a given number.

console.log(Math.ceil(4.3));  // Output: 5
console.log(Math.ceil(4.7));  // Output: 5
console.log(Math.ceil(-4.3)); // Output: -4

// Math.random(): Returns a floating-point, pseudo-random number in the range [0, 1) 
// (inclusive of 0, but not 1).

console.log(Math.random()); // Output: (e.g., 0.123456789)

// To get a random integer between min (inclusive) and max (exclusive):

console.log(Math.floor(Math.random() * (10 - 1) + 1))

// Math.max(x1, x2, ...): Returns the largest of zero or more numbers.

console.log(Math.max(20,30,40,50))

// Math.min(x1, x2, ...): Returns the smallest of zero or more numbers.

console.log(Math.min(20,21,12,40,60))

// Math.pow(base, exponent): Returns the base to the exponent power.

console.log(Math.pow(2, 3));  // Output: 8 (2 to the power of 3)

// Math.sqrt(x): Returns the square root of a number.

console.log(Math.sqrt(9));   // Output: 3
console.log(Math.sqrt(25));  // Output: 5

// The Date object works with dates and times.

// new Date(): Creates a new Date object with the current date and time.

console.log(new Date())

// getFullYear(): Returns the year (4 digits) of the specified date.

const date = new Date
console.log(date.getFullYear()); // Output: 2025


// getMonth(): Returns the month (0-11) of the specified date. (0 for January, 11 for December)

console.log(date.getMonth())

// getDate(): Returns the day of the month (1-31) of the specified date.

console.log(date.getDate())

// getMinutes(): Returns the minutes (0-59) of the specified date.

console.log(date.getMinutes())

// getSeconds(): Returns the seconds (0-59) of the specified date.

console.log(date.getSeconds())

// getTime(): Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.

console.log(date.getTime())

// setDate(day) / setMonth(month) / setFullYear(year) etc.: Methods to set components of a date.

const newDate = new Date();

newDate.setFullYear(2000);
newDate.setMonth(11);
newDate.setDate(25);

console.log(newDate)