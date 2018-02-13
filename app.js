var inputColour;


$('button').click(function(){
  inputColour = $('input').val();
  $('.brush-box').css('backgroundColor', inputColour);
});

$('input').on('keyup', function(key){
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
