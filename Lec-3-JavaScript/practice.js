
console.log(a);


let a = 10; //block

var b = 20; //function scope

c = 30; //Globally

const pi = 3.14; //Global --they r constant and global

e = 10;
function fun(){

    let a = 5;
    if(a==5){
       console.log("inside",e);
    }
    console.log("outside",e);
}

console.log("Global scope is ", e);
fun();

first(10);
second();


function first(n){

    console.log("inside the first function");

    console.log(Math.sqrt(n));
    //return Math.sqrt(n);
}


second = function(){

    console.log("inside the second function");
    return 10;
}






function second(n){

    console.log("inside the second function");
}



let arr = ["apple","mango","orange"];

console.log(arr);





