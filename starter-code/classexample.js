$(document).ready(function(){
  //all the green peppers have a class of green pepper, same thing with mushrooms
  //same thing with pepperonnis(pep).
  //our Buttons are btn-topping

  //lets set defaults here.
  $('.sauce').removeClass('sauce-white');
  $('.crust').removeClass('crust-gluten-free');
  $('.btn-sauce').removeClass('active');
  $('.btn-crust').removeClass('active');
  $('.price ul li:nth-child(4)').toggle();
  $('.price ul li:last').toggle();
  // so these classes are 'removed' the other classes will be defaulted. ie. crust and sauce.

$('.btn-pepperoni').data('price', 1);
$('.btn-mushrooms').data('price', 1);
$('.btn-green-peppers').data('price', 1);
$('.btn-crust').data('price', 5);
$('.btn-sauce').data('price', 3);
//here we are storing the value of the prices into each Buttons
// I know that crust and sauce defaults are not the values associated
// but when the user clicks the button its because theyre upgrading (or downgrading)
// for a different type of crust.

function calculateTotalPrice(){
  var allTheButtons = $('.btn');
  var price = 10;

    for(var i=0; i < allTheButtons.length; i++){
      if(allTheButtons.eq(i).hasClass('active')){
        price += allTheButtons.eq(i).data('price');
      }
    }
    $('strong').text('$' + price);
  }

  $('.btn').click(function(){
    $(this).toggleClass('active');
    calculateTotalPrice();
  });
  //read below we will come back to this later
  //okay youre back, the top will set the active class on each btn click.


// lets start with Buttons
$('.btn-pepperoni').click(function(){
  // lets take all things with .pep
  $('.pep').toggle();
  // we can do fadetoggle to make it super fancy
  // lets replicate it two more times.
  $('.price ul li:first').toggle();
  // this will remove the price from the list when we click the button
  // here we can target the first element of the list, we wont be able to do that for all of these tho
});

$('.btn-mushrooms').click(function(){
  // lets take all things with shrooms
  $('.mushroom').toggle();
  // we can do fadetoggle to make it super fancy
  // lets replicate it two more times.
  $('.price ul li:nth-child(2)').toggle();
  // we select the second child using nth-child
});

  $('.btn-green-peppers').click(function(){
    // lets take all things with peppers
    $('.green-pepper').toggle();
    // we can do fadetoggle to make it super fancy
    // lets replicate it two more times.
  $('.price ul li:nth-child(3)').toggle();
  // just continue
  });

  $('.btn-crust').click(function(){
    //$('.crust').toggle();
    //this removes the entire pizza, we only want to change the crust.
    $('.crust').toggleClass('crust-gluten-free');
    // we want to find the crust class and toggle the crust gluten free class.
    // well do the same with sauce.
    $('.price ul li:nth-child(4)').toggle();
    // keep on
  });

  $('btn-sauce').click(function(){
    $('.sauce').toggleClass('sauce-white');
    $('.price ul li:last').toggle();
    //our last child
  });





});
