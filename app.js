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
   $(".advice").html(response.slip.advice)
   $(".btn").removeClass("active")
  }
 });
})
