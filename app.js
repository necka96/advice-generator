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
   $(".id").html(response.slip.id)
   $(".advice").animate({'opacity': 0}, 400, function(){
        $(this).html(response.slip.advice).animate({'opacity': 1}, 400);    
    });
   $(".btn").removeClass("active")
  }
 });
})
