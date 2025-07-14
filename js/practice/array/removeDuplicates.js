

let arr = [1,2,2,3,1,4,4,5,7,6];

let arr1 = [];

arr.map(a=> {
    if(!arr1.includes(a)){
        arr1.push(a);
    }
})

console.log("New array",arr1)

// without creating new array

