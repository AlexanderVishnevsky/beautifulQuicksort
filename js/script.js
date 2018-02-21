jQuery(document).ready(function() {
	function close_accordion_section() {
		jQuery('.script .script-section-title').removeClass('active');
		jQuery('.script .script-section-content').slideUp(300).removeClass('open');
	}

	jQuery('.script-section-title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Open up the hidden content panel
			jQuery('.script ' + currentAttrValue).slideDown(300).addClass('open');

			randomFill();

            sortArray();
		}

		e.preventDefault();
	});
});