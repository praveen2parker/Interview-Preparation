 
console.log("Start");
const promise = new Promise((resolve, reject) => {
    console.log("Promise Executor");
    resolve("Resolved Value");
});
promise
    .then((value) => {
        console.log("Then 1:", value);
        return new Promise((resolve, reject) => {
            reject("Rejected in Then 1");
        });
    })
    .catch((error) => {
        console.log("Catch 1:", error);
        return "Recovered Value";
    })
    .then((value) => {
        console.log("Then 2:", value);
        throw "Error in Then 2";
    })
    .finally(() => {
        console.log("Finally 1");
    })
    .catch((error) => {
        console.log("Catch 2:", error);
    })
    .finally(() => {
        console.log("Finally 2");
    });
console.log("End");


// Start 
// end 
// Promise Executor
// Then 1:", value
// Finally 1


 