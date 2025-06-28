

// Closure

// A closure is a function that remembers and has access to variables from outside its own scope,
// even after the outer function has finished executing.

function outerFunction() {
    let outerVar = "I am outside!";
  
    function innerFunction() {
      console.log(outerVar); // has access to outerVar
    }
    console.log("Hello World")
    return innerFunction;
  }
  
  const myClosure = outerFunction(); // returns innerFunction
  myClosure(); // Output: "I am outside!"
  