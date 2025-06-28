

// Event Loop
 
// https://www.youtube.com/watch?v=3L5SXuRxp7c 

//  JavaScript is single-threaded, meaning it can do one thing at a time.

// Key Components of the Event Loop
// Call Stack — Where functions are executed.

// Web APIs / Browser APIs — Timer, DOM, AJAX provided by the browser.

// Callback Queue (Task Queue) — Where callbacks from Web APIs wait.

// Microtask Queue — For Promises (.then, .catch, async/await).

// The Event Loop constantly checks if the Call Stack is empty.

// If yes, it pushes the next callback from the Microtask Queue first.

// Then it pushes from the Callback Queue (tasks like setTimeout).

console.log("Start");

setTimeout(() => {
  console.log("Timeout Callback");
}, 0);

console.log("End");


// another example

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");
