head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
	// console.log($('body').html());
});
	
$('.is-popup').click(function(event) {
	if($(this).parent().find('.feature').css('display') == 'none') {
		$(this).find('span').removeClass('icon-arrow-right');
		$(this).find('span').addClass('icon-arrow-down');			
		$(this).parent().find('.feature').show();
	}
	else {
		$(this).find('span').removeClass('icon-arrow-down');
		$(this).find('span').addClass('icon-arrow-right');			
		$(this).parent().find('.feature').hide();
	}		
	return false;
});

$('.social__yandex').click(function(event) {
	if($(this).parent().find('.yandex').css('display') == 'none') {
		$(this).removeClass('icon-sm-arrrow-down');
		$(this).addClass('icon-sm-arrrow-up');
		$(this).parent().find('.yandex').show();
	}
	else {
		$(this).removeClass('icon-sm-arrrow-up');
		$(this).addClass('icon-sm-arrrow-down');
		$(this).parent().find('.yandex').hide();			
	}		
	return false;
});

$('.yandex__hide').click(function(event) {
	$(this).parent().hide();
	$(this).parents().find('.social__yandex').removeClass('icon-sm-arrrow-up');
	$(this).parents().find('.social__yandex').addClass('icon-sm-arrrow-down');
	return false;
});

$('.quote__expand').click(function(event) {
	$(this).hide();
	$(this).parent().parent().find('.ext').show();
	$(this).parent().find('.quote__turn').show();
	$(this).parent().find('.content__img').hide();
	$(this).parent().find('.content__img2').show();
	return false;
});

$('.quote__turn').click(function(event) {
	$(this).hide();
	$(this).parent().parent().find('.ext').hide();
	$(this).parent().find('.quote__expand').show();	
	$(this).parent().find('.content__img').show();
	$(this).parent().find('.content__img2').hide();
	return false;
});

$('.slideshow').cycle({
   	manualSpeed: 600,
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