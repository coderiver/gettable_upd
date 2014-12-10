head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
	// console.log($('body').html());
});

function ShowHideSlider(){
	var slider = document.getElementById("header__slider");
	var block = document.getElementById("header__main");
		
	if (block.style.display == "none") {			
		slider.style.display = "none";
		block.style.display = "block";			
	}
	else {			
		block.style.display = "none";
		slider.style.display = "block";
	}		
}

$('.slideshow').cycle({
    	manualSpeed: 600,    
});