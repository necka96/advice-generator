$.ajaxSetup({
    cache: false
});

$(".btn").click(()=>{
 $(".btn").addClass("active")
 $.ajax({
  type: "GET",
  url: "https://api.adviceslip.com/advice",
  dataType: "json",
  success: function (response) {
   $(".id").animate({letterSpacing: "+=10px", opacity: 0}, 400,function(){
       $(this).html("Advice #" + response.slip.id ).animate({letterSpacing: "-=10px", opacity: 1}, 400)
   })
   $(".advice").animate({'opacity': 0}, 400, function(){
        $(this).html('"'+ response.slip.advice + '"').animate({'opacity': 1}, 400);    
    });
   $(".btn").removeClass("active")
  }
 });
})
$(document).ready(function () {
   
 $.ajax({
  type: "GET",
  url: "https://api.adviceslip.com/advice",
  dataType: "json",
  success: function (response) {
   $(".id").animate({letterSpacing: "+=10px", opacity: 0}, 400,function(){
       $(this).html("Advice #" + response.slip.id ).animate({letterSpacing: "-=10px", opacity: 1}, 400)
   })
   $(".advice").animate({'opacity': 0}, 400, function(){
        $(this).html('"'+ response.slip.advice + '"').animate({'opacity': 1}, 400);    
    });
  }
 });
});