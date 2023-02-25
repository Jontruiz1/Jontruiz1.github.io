(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);

$(function () {
	$("#databaseShow").hover(
		function () {
			$(this).attr("src", "images/Database_Showcase.gif");
		},
		function () {
			$(this).attr("src", "images/Database_Showcase_Static.gif");
		}
	);

	$("#weatherShow").hover(
		function () {
			$(this).attr("src", "images/Weather_Showcase.gif");
		},
		function () {
			$(this).attr("src", "images/Weather_Showcase_Static.gif");
		}
	);

	$("#roshamboShow").hover(
		function () {
			$(this).attr("src", "images/Roshambo_Showcase.gif");
		},
		function () {
			$(this).attr("src", "images/Roshambo_Showcase_Static.gif");
		}
	);

	$("#searchShow").hover(
		function () {
			$(this).attr("src", "images/SearchShowcase.gif");
		},
		function () {
			$(this).attr("src", "images/SearchShow_Static.png");
		}
	);

});