$(document).ready(function() {
	$('ul li a').click(
		function(e) {
			e.preventDefault(); // prevent the default action
			e.stopPropagation; // stop the click from bubbling
			$(this).closest('ul').find('.nav-menu__item--active').removeClass('nav-menu__item--active');
			$(this).parent().addClass('nav-menu__item--active');
		});
  	$('select').selectric({
  		maxHeight: 200
  	});
});

