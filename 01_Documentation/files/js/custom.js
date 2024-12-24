jQuery(document).ready(function(){
			
	jQuery(".mainul li.toclevel-1 > a").click(function() {
		jQuery(".mainul li.toclevel-1 > a").removeClass("active");
	  	jQuery(this).addClass("active");
	});
	
	 jQuery('a[href*=#]').bind('click', function (e) {
		e.preventDefault(); // prevent hard jump, the default behavior
		var target = jQuery(this).attr("href"); // Set the target as variable
		
		// perform animated scrolling by getting top-position of target-element and set it as scroll target
		jQuery('html, body').stop().animate({
			scrollTop: jQuery(target).offset().top
		}, 600, function () {
			location.hash = target; //attach the hash (#jumptarget) to the pageurl
		});
		return false;
	});
	
});