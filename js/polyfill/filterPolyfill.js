
Array.prototype.filters = function (callBack, context){
    var output = [];
    for(var i=0;i<this.length;i++){
        if(callBack.call(context,this[i],i,this)){
            output.push(this[i])
        }
    }
    return output
}

let fruits = ["apple", "mango","orange","apple","pineapple","orange"];

let result = fruits.filters(a=> a.length>5)

console.log(result)