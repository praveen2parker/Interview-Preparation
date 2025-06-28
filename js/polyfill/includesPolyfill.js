
Array.prototype.includess = function (value, fromIndex = 0){
    for(var i=fromIndex;i<this.length;i++){
        if(this[i]===value|| isNaN(this[i]) && isNaN(value)){
            return true
        }
    }
    return false
}

let arr = [1,2,3,4,5,6,7];

console.log( arr.includess(8))