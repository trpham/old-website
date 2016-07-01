(function ($) {

	var settings = {

		// Parallax background effect?
		parallax: true,

		// Parallax factor (lower = more intense, higher = less intense).
		parallaxFactor: 20
	};

	skel
		.breakpoints({
			xlarge: '(max-width: 1680px)',
			large: '(max-width: 1280px)',
			medium: '(max-width: 980px)',
			small: '(max-width: 736px)',
			xsmall: '(max-width: 480px)'
		});

	$(function () {

		var $window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#banner'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
		$body.addClass('is-loading');

		$window.on('load', function () {
			window.setTimeout(function () {
				$body.removeClass('is-loading');
			}, 100);
		});

		// Mobile?
		if (skel.vars.mobile)
			$body.addClass('is-mobile');
		else
			skel
			.on('-medium !medium', function () {
				$body.removeClass('is-mobile');
			})
			.on('+medium', function () {
				$body.addClass('is-mobile');
			});

		// Fix: Placeholder polyfill.
		$('form').placeholder();

		// Prioritize "important" elements on medium.
		skel.on('+medium -medium', function () {
			$.prioritize(
				'.important\\28 medium\\29',
				skel.breakpoint('medium').active
			);
		});

		// Header

		// Parallax background

		//////////

		// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
		if (skel.vars.browser == 'ie' || skel.vars.mobile)
			settings.parallax = false;

		if (settings.parallax) {

			skel.on('change', function () {

				if (skel.breakpoint('medium').active) {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', 'top left, center center');

				} else {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function () {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
					});
				}
			});
		}
		
				// Scrolly.
 		$('.scrolly')
 			.scrolly({
 				speed: 1500,
 				offset: $header.outerHeight()
 			});


		// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

		// Header.
		if (skel.vars.IEVersion < 9)
			$header.removeClass('alt');

		if ($banner.length > 0 && $header.hasClass('alt')) {

			$window.on('resize', function () {
				$window.trigger('scroll');
			});

			$banner.scrollex({
				bottom: $header.outerHeight() + 1,
				terminate: function () {
					$header.removeClass('alt');
				},
				enter: function () {
					$header.addClass('alt');
				},
				leave: function () {
					$header.removeClass('alt');
				}
			});

		}
	});

})(jQuery);

particlesJS("particles-js", {
	"particles": {
		"number": {
			"value": 200,
			"density": {
				"enable": !0,
				"value_area": 800
			}
		},
		"color": {
			"value": "#d9d9d9"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#0000ff"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": 0.3,
			"random": !1,
			"anim": {
				"enable": !1,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": !1
			}
		},
		"size": {
			"value": 3,
			"random": !0,
			"anim": {
				"enable": !1,
				"speed": 40,
				"size_min": 0.1,
				"sync": !1
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 110,
			"color": "#d9d9d9",
			"opacity": 0.15,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 2,
			"direction": "none",
			"random": true,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "grab"
			},
			"onclick": {
				"enable": true,
				"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 130,
				"line_linked": {
					"opacity": .3
				}
			},
			"bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			},
			"repulse": {
				"distance": 200,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
});

$(function () {
	$('#two').poptrox({
    popupPadding: 0
	});
});

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function () {
	stats.begin();
	stats.end();
	if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
		count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
	}
	requestAnimationFrame(update);
};
requestAnimationFrame(update);;