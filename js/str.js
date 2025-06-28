const str = "Younus,Engineer1, Praveen,Engineer2, Rajashree Ramakrishnan,Engineer3";


let newStr = str.split(", ")


let arr = [];
newStr.map((a)=> {
     
     arr.push(a.split(",").join('-'))
   
})

// for(let i=0;i<newStr.length;i++){
//     arr.push(newStr[i].split(",").join('-'))

// }

console.log(arr)



// Output: [  
// "Younus-Engineer1",  
// "Praveen-Engineer2",  
// "Rajashree Ramakrishnan-Engineer3"
// ]