(function(){

// 	$(document).ready(function(){

// 	// Set the interval to be 5 seconds
// 	var t = setInterval(function(){
// 		$(".carousel ul").animate({marginLeft:-800},1000,function(){
// 			$(this).find("li:last").after($(this).find("li:first"));
// 			$(this).css({marginLeft:0});
// 		})
// 	},5000);
// });

/*$(function() {
  var currentIndex = 0,
      itemCount    = $('.carousel > li').length;

  // add the active class to the first item to hide all the others
  $('.carousel > li:eq(' + currentIndex + ')').addClass('active');

  $(document).ready(function(){
    var $active  = $('.carousel > li.active'),
        isNext   = $(this).hasClass('next');
    currentIndex = (currentIndex + (isNext ? 1 : -1)) % itemCount;

    // go back to the last item if we hit -1
    if (currentIndex === -1) {
      currentIndex = itemCount - 1;
    }

    var $next = $('.carousel > li:eq(' + currentIndex + ')');
    $active.addClass(isNext ? 'next-out' : 'prev-out');
    $next.addClass('active').addClass(isNext ? 'next-in' : 'prev-in');
    setTimeout(function() {
      $active.removeClass('active next-out prev-out');
      $next.removeClass('next-in prev-in');
    }, 500);
    return false;
  });
});*/

    $(document).ready(function() {

    $(".demo").owlCarousel({

    autoPlay: 3000, //Set AutoPlay to 3 seconds

    // $(this).owl.goTo(3);

    items : 2,
    itemsDesktop : [1199,2],
    itemsDesktopSmall : [979,2]

    });

    });




})();