$(document).ready(function(){

  $(".pep").hide();
  $(".mushroom").hide();
  $(".green-pepper").hide();
  $(".sauce").removeClass("sauce-white");
  $(".crust").removeClass("crust-gluten-free");
  $(".btn").removeClass("active");
  $("li:contains(w)").hide();
  $("li:contains(gl)").hide();



  $(".btn-pepperonni").click(function(){
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
  });

  $(".btn-mushrooms").click(function(){
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
  });

  $(".btn-green-peppers").click(function(){
    $('.green-pepper').toggle();
    $(".btn-green-peppers").toggleClass("active");
  });

  $(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
  });

  $('.btn-crust').click(function(){
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
  });

});
