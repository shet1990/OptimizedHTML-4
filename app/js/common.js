$(function() {

	$('.menu-1 a').hover(function(){
		$('.menu-1 a').not(this).css('opacity','.5')
	},
		function(){
			$('.menu-1 a').css('opacity','1')
	});
	
});
