

Array.prototype.maps = function (callBack,context){
    var newArr = [];
    for(var index = 0;index<this.length;index++){
        newArr.push(callBack.call(context, this[index],index,this))
    }

    return newArr
}

let arr =[1,2,3,4,5,6];

let result = arr.maps(a => a+1)

console.log(result)