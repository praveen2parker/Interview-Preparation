

Array.prototype.finds = function(callback,context){
    for(var i=0;i<this.length;i++){
        if(callback.call(context,this[i],i,this)){
            return this[i]
        }
    }
    return undefined
}

let arr = [1,2,3,4,5,6];


let result = arr.finds(a=> a == 4)

console.log(result)