var inputColour;


$('.brush').find('button').click(function(){
  inputColour = $('input').val();
  $('.brush-box').css('backgroundColor', inputColour);
});

$('.brush').find('input').on('keyup', function(key){
  if(key.keyCode == 13){
    inputColour = $('input').val();
    $('.brush-box').css('backgroundColor', inputColour);
  }
});

for (var i = 0; i < 100; i++) {
  var newDivElem = $('<div>', {'class': 'square'});
  newDivElem.mouseover(function(){
    $(this).css('backgroundColor', inputColour);
  });
  $('.container').append(newDivElem);
}




$('.stamp').find('button').click(function(){
  var search = $('.stamp').find('input').val()
  console.log(search);

  var options = {
    url: 'http://www.omdbapi.com/?apikey=2f6435d9&t=' +search,
    method: 'get'
  };

  $.ajax(options).done(function(response){
    console.log(response)
    $('.square').css('background-image', 'url(' + response.Poster + ')')
  });
})

