$('button').click(function(){
  console.log('clicked');
  var inputColour = $('input').val();
  $('.brush-box').css('backgroundColor', inputColour);
});