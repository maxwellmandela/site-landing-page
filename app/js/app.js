/* jslint browser: true*/
/* global $, jQuery, WOW, location*/
'use strict';

var app = (function (document, $) {
	var docElem = document.documentElement;
	var _userAgentInit = function () {
		docElem.setAttribute('data-useragent', navigator.userAgent);
	};
	var _init = function () {
		$(document)
			.foundation();
		// needed to use joyride
		// doc: http://foundation.zurb.com/docs/components/joyride.html
		$(document)
			.on('click', '#start-jr', function () {
				$(document)
					.foundation('joyride', 'start');
			});
		_userAgentInit();
	};
	return {
		init: _init
	};
})(document, jQuery);

(function () {
	app.init();
})();

$(function () {
	$('a[href*=#]:not([href=#])')
		.click(function () {
			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body')
						.animate({
							scrollTop: target.offset()
								.top
						}, 1500);
					return false;
				}
			}
		});
});

new WOW()
	.init();
// var wow = new WOW();
