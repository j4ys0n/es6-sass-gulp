class Exhibit {
	constructor($) {
		let selectors = {
			svgWithFallback: '.exhibit .infographic img[data-fallback]'
		};

		let fixUnsupportedSvgs = function() {
			if ($('html').hasClass('svg')) {
				return;
			}

			$(selectors.svgWithFallback).each(function () {
				var fallbackImg = $(this).data('fallback');
				$(this).attr('src', fallbackImg);
			});
		};

		this.firstLoad = function() {
			fixUnsupportedSvgs();
		};
	}

	name() {
		return "Exhibit";
	}

	init() {
		this.firstLoad();
	}
}

export default Exhibit;