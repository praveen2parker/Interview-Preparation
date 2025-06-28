
Array.prototype.forEachs = function (callback, thisArg){
    for(var i=0;i<this.length;i++){
        callback.call(thisArg,this[i],i,this)
    }
}

let arr = [1,2,3,4,5,6,7];


arr.forEachs(a=> console.log(a))