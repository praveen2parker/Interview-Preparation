let arr =[1,2,3,4];


function addOne (number){
    return number+1
}

// let result = arr.map(addOne)

// console.log(result)


Array.prototype.maps = function (call){
    var newArr = [];
    for(var i=0;i<this.length;i++){
        newArr.push(call(this[i],i,this))
    }
    return newArr
}

let result1 = arr.maps(addOne)
console.log(result1)