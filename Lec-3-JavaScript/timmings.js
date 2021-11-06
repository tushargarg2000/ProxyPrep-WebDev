
// var seconds = 1;

// function sayHello(){

//     console.log("Hello students");

//     console.log("After",seconds);

//     seconds++;

//     if(seconds==6){
//         clearInterval(id);
//     }
// }

// //setTimeout(sayHello,1000);

// var id = setInterval(sayHello,1000);



var heading  = document.getElementById('one');


heading.style.color = 'red';
heading.style.backgroundColor = 'cyan';



var headings = document.getElementsByTagName('h1');


headings[1].innerText = "Second Headings";

var para = document.getElementsByClassName('para');


var helloButton = document.getElementById('btn');

helloButton.addEventListener('click',function(){

    alert('Hello!!1');
})





console.log(eval('4*5'));


var op1 = 4;

var op2 = 5;

var operand = '*';

var result = eval(op1+" "+operand+" "+op2);

console.log(result);

