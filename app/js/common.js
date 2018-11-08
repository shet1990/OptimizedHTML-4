$(function() {

	$('.menu-1 a').hover(function(){
		$('.menu-1 a').not(this).css('opacity','.5')
	},
		function(){
			$('.menu-1 a').css('opacity','1')
	});
	
	$('.block-2 .col-lg-4 p').click(function(){
		$(this).parent().find('ul').toggleClass('active');
		$(this).find('img').toggleClass('minus');
	});

});
