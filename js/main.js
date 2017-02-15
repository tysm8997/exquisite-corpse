$(document).ready(function(){



$(".button").click(function(){
		$("body").animate({ scrollTop: 725 }, 'slow');


});

     $(window).scroll(function(){
          
        parallax();
       

      var scroll = $(window).scrollTop();
    if(scroll > 725){
    	$("header").hide();
    }
    if(scroll < 725){
    	$("header").show();
    }


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
        
        $('.tacoback').css('top', (scrolled * 0.25));

         $('.story').css('top', -700 + (scrolled * 0.15));

    // }
}









