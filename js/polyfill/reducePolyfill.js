

Array.prototype.reduces = function(callback, intit){
    var accumulator = intit;
    var i=0;

    if(accumulator === undefined){
        accumulator = this[0]
        i =1
    }

    for(;i<this.length;i++){
        accumulator = callback(accumulator,this[i],i,this)
    }

    return accumulator
}

let number = [1,2,3,4,5,6,7]
const sum = number.reduces((a,b)=> a + b, 0)
console.log(sum)