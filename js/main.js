$(document).ready(function(){



$(".button").click(function(){
		$("body").animate({ scrollTop: 975 }, 'slow');


});

     $(window).scroll(function(){
          
        parallax();
        // showP();

      var scroll = $(window).scrollTop();

	if(scroll > 1800){
		$(".two").fadeTo("slow", 1.0);
	}
	if(scroll > 1950){
		$(".three").fadeTo("slow", 1.0);
		$(".four").delay(1000).fadeTo("slow", 1.0);
		$(".five").delay(3000).fadeTo("slow", 1.0);
		$(".six").delay(5000).fadeTo("slow", 1.0);
	}       

    });



});

function parallax(){
        var scrolled = $(window).scrollTop();
        
        $('.tacoback').css('top',  (scrolled * 0.25));
        // if(scrolled < 700){
        // $('.tacoback').css('top', (scrolled * 0.45));



         // $('.story').css('top', -1030 + (scrolled * 0.1));
         $('.story').css('top', -430 + (scrolled * 0.1));

    // }
}
function showP(){
	// var scroll = $(window).scrollTop();

	// if(scroll > 1800){
	// 	// $(".two").css("opacity",  (1.0));
	// 	$(".two").fadeIn("slow");
	// }
	// if(scroll > 1820){
	// 	$(".three").fadeIn("slow");


}







