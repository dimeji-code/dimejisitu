$('.transitioner').click(function(){
    //do something
    $('.slider').css('background-color',"#b54c40")
    $('.slider').css('left',"0%")

  });

$(".featured").click(()=>{
  $('.slider2').css('background-color',"#b54c40")
  $('.slider2').css('left',"0%")
})



$('.exit-right').click(function(){
  //do something
  $('.slider').css('background-color',"#1e050b31")
  $('.slider').css('left',"100%")

});

$('.exit-left').click(function(){
  //do something
  $('.slider2').css('background-color',"#1e050b31")
  $('.slider2').css('left',"-100%")

});

