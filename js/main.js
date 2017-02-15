$(document).ready(function(){



$(".button").click(function(){
		$("body").animate({ scrollTop: 975 }, 'slow');


});

     $(window).scroll(function(){
          
        parallax();
       

    });



});

function parallax(){
        var scrolled = $(window).scrollTop();
        
        $('.tacoback').css('top',  (scrolled * 0.25));
        // if(scrolled < 700){
        // $('.tacoback').css('top', (scrolled * 0.45));



         $('.story').css('top', -800 + (scrolled * 0.1));

    // }



}






