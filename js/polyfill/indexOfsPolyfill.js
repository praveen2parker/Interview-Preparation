

Array.prototype.indexOfs = function (value, fromIndex = 0){
    for(var i =fromIndex;i<this.length;i++){
        if(this[i] === value){
            return i
        }
    }
    return -1
}

let arr = [1,2,3,4,5,6];

console.log(arr.indexOfs(4))
