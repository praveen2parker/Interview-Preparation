
// Destructuring

const numbers = [1,2,3,4,5,6];
const[a,b,c,d] = numbers;

console.log(d); 

// Skipping Elements

const [x, , z] = [1, 2, 3];
console.log(x); 

//  Swapping Variables

let m = 2, n = 3;
[m,n] = [n , m]

console.log(m,n)

//  Object Destructuring

const user = {name: "nothing", age: 25};
const {name}=user;

console.log(name);

//  Nested Destructuring

const person = {
    name: "nothing",
    age: 25,
    address: {
        city: "Tiruvannamalai"
    }
}

const {address:{city}} =  person
console.log(city)

//  Default Parameters

function show({name ="Nothing", age =25}){
    console.log(name , age)
}


show({name: "Nobody"})