//var para = document.getElementById('para1');
//para.innerHTML = "Welcome";



$('#para1').html('Welcome');
//$('#para1').hide();

/*
    The jQuery and DOM Object are not same
*/


var paras = $('p')

console.log(paras);


paras.html('Changed');

var p1 = paras.eq(0);

p1.html('html1');


var p = paras[0];

console.log("p is ",p);


//  -----HTML!= DOM != JQuery != JavaScript


$(p) //This is actually converiting our DOm Object into jQuery



$('div').click(function(){

    alert("Div is clicked");
})


