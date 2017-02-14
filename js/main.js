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
        
        // if(scrolled < 700){
        $('.tacoback').css('top', (scrolled * 0.45));



        $('.story').css('top', -900 + (scrolled * 0.1));

    // }



}






