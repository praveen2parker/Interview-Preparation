
Array.prototype.forEachs = function (callback, context){
    for(var i=0;i<this.length;i++){
        callback.call(context,this[i],i,this)
    }
}

let arr = [1,2,3,4,5,6,7];


arr.forEachs(a=> console.log(a))