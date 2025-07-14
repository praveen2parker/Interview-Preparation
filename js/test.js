// let arr = [1,[2,[3, [4]]]];

// const rec = (arr)=>{
//     let newArr = [];
//     arr.map(a=> {
//         if( Array.isArray(a)){
//             // rec(a)
//             newArr = newArr.concat(rec(a));
//         }else{
         
//             newArr.push(a)
//         }
//     })
    
//     return newArr
// }


// let output  = rec(arr);
// console.log(output)


let arr = [1,1,2];
let arr1 = [];
arr.map(a => {
    if(!arr1.includes(a)){
        arr1.push(a)
    }
})

console.log(arr1);


