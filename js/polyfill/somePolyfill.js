

Array.prototype.somes = function (callback, context){
    for(var i=0;i<this.length;i++){
        if(callback.call(context,this[i],i,this)){
            return true
        }
    }

    return false
}

let arr = [1,2,3,4,5,6];

console.log(arr.somes(a=> a+2 == 8))