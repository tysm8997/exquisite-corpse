$(document).ready(function(){



$(".button").click(function(){
		$("body").animate({ scrollTop: 700 }, 'slow');


});

     $(window).scroll(function(){
          
        parallax();
       

    });



});

function parallax(){
        var scrolled = $(window).scrollTop();
        
        // $('.tacoback').css('top', 600+ (scrolled * 0.5));
        // if(scrolled < 700){
        // $('.tacoback').css('top', (scrolled * 0.45));



         $('.story').css('top', -1100 + (scrolled * 0.25));

    // }



}






