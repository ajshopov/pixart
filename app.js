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

for (var i = 0; i < 100; i++) {
  var newDivElem = $('<div>', {'class': 'square'});
  newDivElem.click(function(){
    $(this).css('backgroundColor', 'green');
  });
  $('.container').append(newDivElem);
}
