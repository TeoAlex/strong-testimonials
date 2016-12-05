/**
 * Slider Handler for Max Mega Menu plugin.
 */

jQuery(document).ready(function( $ ) {

	// Find Mega Menu items
	var megaMenuItems = $('li.mega-menu-item');

	// Load up our slideshows
	var strongSlideshows = $('.strong-view.slider-container');

	if( megaMenuItems.length ) {
		// Add class to not auto-start and set height to zero to avoid flash
		// when full background shrinks to max height of slideshow.
		megaMenuItems.find('.strong-view.slider-container').addClass('noinit');
		// and underlay other slideshows (edge case).
		strongSlideshows.not('.noinit').css('opacity', '.99');
	}

	// Start normal slideshows.
	strongSlideshows.not('.noinit').each(function () {
		var $this = $(this);
		$this.imagesLoaded( function () {
			$this.strongSlider();
		});
	});

	// Start slideshow when menu item opens.
	megaMenuItems.on('open_panel', function () {
		$(this).find('.strong-view.slider-container').each(function () {
			$(this).strongSlider();
		});
	});

});
