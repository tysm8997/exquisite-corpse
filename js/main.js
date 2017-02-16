$(document).ready(function(){

// $(".button").hover(function(){
// 	$("#taco").css("opacity", "0.0");
// }, function(){
// 	$("#arrow").css("opacity", "1.0");
// 	});



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


	if(scroll > 975){
		$(".two").fadeTo("slow", 1.0);
	}
	if(scroll > 1500){
		$(".three").fadeTo("slow", 1.0);
	}
	if(scroll > 1850){
		$(".four").fadeTo("slow", 1.0);
	}
	if(scroll > 2550){
		$(".five").fadeTo("slow", 1.0);
	}
	if(scroll > 3000){
		$(".six").fadeTo("slow", 1.0);
	}




    });



});

function parallax(){
        var scrolled = $(window).scrollTop();

        $('.tacoback').css('top', (scrolled * 0.25));

         $('.story').css('top', -700 + (scrolled * 0.15));

    // }
}
