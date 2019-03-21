
$(window).load(function() {
  $(".img-slider").twentytwenty();
});


var typed = new Typed(".red", {
  strings: [
      "_android developer",
            "_frontEnd devloper",
           "_backEnd devloper"],
    typeSpeed:80,
    backSpeed:80,
    loop:true

});



$(document).ready(function(){
    $('.about').click(function(e){
     var ele=$(this).attr('href')
//     console.log($(ele).offset().top)
     var value= $(ele).offset().top;
     $('html,body').animate({
         scrollTop:value
     },1800);

        e.preventDefault();




    })
})
