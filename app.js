$('button').click(function(){
  var inputColour = $('input').val();
  $('.brush-box').css('backgroundColor', inputColour);
});

$('input').on('keyup', function(key){
  if(key.keyCode == 13){
    var inputColour = $('input').val();
    $('.brush-box').css('backgroundColor', inputColour);
  }
});