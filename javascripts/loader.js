/*

Be Load Script
Version 1.0
Made by Themanoid
Modified by Hector

*/


(function($) {

    "use strict"; // Strict mode

    // Variables
    var loader = $('<div class="loader"><div class="bar-container"><div class="bar"></div></div></div>'),
     	bar = loader.find('.bar');
	
 /*    // Prepend the loader to the body (not use anymore)
    $('body').prepend(loader);

    // Animate the load bar
    animateLoadBar();
*/
   // On load
    $(window).load(function(){
    	finishLoadBar();
    	loader.delay(0).fadeOut(0, function(){
	    	$(this).remove();
	    	$('.container-fluid').addClass('loaded');
	    });
    });

    function animateLoadBar(){
    	bar.animate({
    		'width' : '60%'
    	}, 0, 'easeInOutQuart');
    }

    function finishLoadBar(){
    	bar.animate({
    		'width' : '100%'
    	}, 0, 'easeInOutQuart');
    }
    
})(jQuery);
