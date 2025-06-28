

Array.prototype.everys = function (callBack, context){
    for(var i=0;i<this.length;i++){
        if(!callBack.call(context,this[i],i,this)){
            return false
        }
    }

    return true
}

let arr = [1,2,3,4,5,6];

console.log(arr.everys(a=> !isNaN(a)))