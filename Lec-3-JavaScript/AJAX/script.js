

function fetchDogImage(){

    // var httpRequest = new XMLHttpRequest();
    
    // httpRequest.onload = function(){

    //     var responseJSON = JSON.parse(httpRequest.response);
    // }


    $.get('https://dog.ceo/api/breeds/image/random',function(data){

        var imageURL = data.message
        $('#dog-image').attr('src',imageURL);

    })
}

$('#fetch-image').click(fetchDogImage);



