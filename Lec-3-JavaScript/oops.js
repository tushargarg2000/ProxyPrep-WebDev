//Object oriented in JavaScript

//it helps to create object without creating a class


var bird ={  //similar to the level of STring Boolean

    x:100,
    y:50,
    color:"black",
    eggs:[1,2,3,4],

    fly:function(){
        console.log("Bird is flying",this.x,this.y);
    }
}

console.log(bird);

for(let i = 0;i<bird.eggs.length;i++){

    console.log(bird.eggs[i]);
}

bird.eggs.forEach(function(val,idx){

    console.log(val,idx);
})



function Fruit(taste,color){ 

    this.color = color;
    this.taste = taste;
}

let mango = new Fruit("sweet","yellow");
let orange = new Fruit("sour","orange");

var apple = {

    taste:"fine",
    color:"red"
}



class FruitClass{

    constructor(taste,color){
        this.taste = taste;
        this.color = color;
    }
}

let kiwi = new FruitClass("sour","green");


let obj1 = {

    a:10,
    b:20,
    c:30
}

let obj2 = Object.create(obj1);

let str = "tushar"

let num = 123

let bool = true

let arr = [1,2,3,4];



String.prototype.originalIndexOf = String.prototype.indexOf


String.prototype.indexOf=  function(){

    console.log("this is the new function implement by sankalp");
}


