/*
	Paradigm Shift by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		default: ['1681px', null],
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: ['361px', '480px'],
		xxsmall: [null, '360px']
	});

	// Play initial animations on page load.
	class introLoader {
		constructor(element, delay) {
			this.open = function (callback) {
				setTimeout(function () {
					$(element).fadeIn(500, function () {
						if (callback !== undefined)
							callback();
					});
				}, delay);

			};
			this.close = function (callback) {
				setTimeout(function () {
					$(element).fadeOut(500, function () {
						$body.removeClass('is-preload');
						if (callback !== undefined)
							callback();
					});
				}, delay);
			};
		}
	}
	var LOADER = new introLoader('#introLoader', 500);
	$(window).on('load', function () {
		LOADER.close(_=> {
			// action to do when load finish
			$body.removeClass('is-preload');
		});
	});

	// Hack: Enable IE workarounds.
	if (browser.name == 'ie')
		$body.addClass('is-ie');

	// Mobile?
	if (browser.mobile)
		$body.addClass('is-mobile');

	// Scrolly.
	$('.scrolly')
		.scrolly({
			offset: 100
		});

	// Polyfill: Object fit.
	if (!browser.canUse('object-fit')) {

		$('.image[data-position]').each(function () {

			var $this = $(this),
				$img = $this.children('img');

			// Apply img as background.
			$this
				.css('background-image', 'url("' + $img.attr('src') + '")')
				.css('background-position', $this.data('position'))
				.css('background-size', 'cover')
				.css('background-repeat', 'no-repeat');

			// Hide img.
			$img
				.css('opacity', '0');

		});

		$('.gallery > a').each(function () {

			var $this = $(this),
				$img = $this.children('img');

			// Apply img as background.
			$this
				.css('background-image', 'url("' + $img.attr('src') + '")')
				.css('background-position', 'center')
				.css('background-size', 'cover')
				.css('background-repeat', 'no-repeat');

			// Hide img.
			$img
				.css('opacity', '0');

		});

	}

	// Gallery.
	$('.gallery')
		.on('click', 'a', function (event) {

			var $a = $(this),
				$gallery = $a.parents('.gallery'),
				$modal = $gallery.children('.modal'),
				$modalImg = $modal.find('img'),
				href = $a.attr('href');

			// Not an image? Bail.
			if (!href.match(/\.(jpg|gif|png|mp4)$/))
				return;

			// Prevent default.
			event.preventDefault();
			event.stopPropagation();

			// Locked? Bail.
			if ($modal[0]._locked)
				return;

			// Lock.
			$modal[0]._locked = true;

			// Set src.
			$modalImg.attr('src', href);

			// Set visible.
			$modal.addClass('visible');

			// Focus.
			$modal.focus();

			// Delay.
			setTimeout(function () {

				// Unlock.
				$modal[0]._locked = false;

			}, 600);

		})
		.on('click', '.modal', function (event) {

			var $modal = $(this),
				$modalImg = $modal.find('img');

			// Locked? Bail.
			if ($modal[0]._locked)
				return;

			// Already hidden? Bail.
			if (!$modal.hasClass('visible'))
				return;

			// Stop propagation.
			event.stopPropagation();

			// Lock.
			$modal[0]._locked = true;

			// Clear visible, loaded.
			$modal
				.removeClass('loaded')

			// Delay.
			setTimeout(function () {

				$modal
					.removeClass('visible')

				setTimeout(function () {

					// Clear src.
					$modalImg.attr('src', '');

					// Unlock.
					$modal[0]._locked = false;

					// Focus.
					$body.focus();

				}, 475);

			}, 125);

		})
		.on('keypress', '.modal', function (event) {

			var $modal = $(this);

			// Escape? Hide modal.
			if (event.keyCode == 27)
				$modal.trigger('click');

		})
		.on('mouseup mousedown mousemove', '.modal', function (event) {

			// Stop propagation.
			event.stopPropagation();

		})
		.prepend('<div class="modal" tabIndex="-1"><div class="inner"><img src="" /></div></div>')
		.find('img')
		.on('load', function (event) {

			var $modalImg = $(this),
				$modal = $modalImg.parents('.modal');

			setTimeout(function () {

				// No longer visible? Bail.
				if (!$modal.hasClass('visible'))
					return;

				// Set loaded.
				$modal.addClass('loaded');

			}, 275);

		});

	// Scroll

	$('#slide-content').scroll(function () {
		var scroll = $(this).scrollTop();
		var scroll_height = $(this).get(0).scrollHeight;
		var height = $(this).height();
		var percent = scroll / (scroll_height - height) * 100;

		$("#progressbar").attr('value', percent);
	});

	$(window).scroll(function () {
		if (isOnScreen($("#slide-content"))) {
			$("#progressbar").show();
			console.log("dikhgya");
		} else {
			$("#progressbar").hide();
			console.log("nhi");
		}

	});
	var para = document.createElement("Progress");
	para.setAttribute('id', 'progressbar');
	para.setAttribute('value', 0);
	para.setAttribute('max', 100);
	document.getElementById("slide-content").appendChild(para);

	// End Scroll

	// Scroll suave


	// End Scroll suave

})(jQuery);



$(function () {

	$(this).impulse();

	$('#slide-content').impulse({ effect: 'easeOutBack', fluid: false });
});

// ataredo.com/morphology/lucidscroll - documentation

(function ($, nib) {

	$.fn.impulse = function (options) {

		var set = $.extend({}, $.fn.impulse.default, options), gate = $(nib),
			vessel = this, object = $(set.target), area = {}, edge = [],
			fad = {}, entity, brink = [], outset = [], quit = [], morph,
			way, speed, destined = [], pour = 'requestAnimationFrame',
			use = $.extend({ novel: pour in nib, turned: 0 }, set);

		elementAnalysis();

		vessel.each(function (hit) {

			use = $.extend({}, use);

			$(this).data('impulse', use).on('wheel.excite', function (act, info) {

				if (!use.keen && !act.mien) return;

				if (act.mien) {
					fad = $.extend({}, use, info);
					use.annul = fad.delay == true;
					var loom = act.mien;
					fad.fluid = false;
				}
				else {
					if (use.annul) return;
					fad = use;
					loom = act.originalEvent.deltaY;
				}

				loom = loom / Math.abs(loom);

				if (use.crux) {
					entity = $(this);
					brink[0] = edge[hit];
				}
				else {
					entity = object;
					brink = edge;
				}

				$.each({ range: 'orbit', tempo: 'pace' }, function (slot, mate) {
					if (typeof fad[slot] === 'function') fad[mate] = fad[slot]();
					else fad[mate] = fad[slot];
				});

				if (loom != use.zeal || act.mien) use.turned = 1;
				else use.turned = Math.min(use.curb, use.turned + 1);

				if (!fad.delay && fad.fluid && use.turned == 1) morph = 'curve';
				else morph = fad.effect;

				way = loom * fad.orbit * Math.pow(use.leap, use.turned - 1);
				speed = fad.pace * Math.pow(use.sloth, use.turned - 1) || 1;
				use.zeal = loom;

				entity.each(function (part) {
					outset[part] = $(this).scrollTop();
					destined[part] = outset[part] + way;
					quit[part] = onFringe(this, part, outset[part]);
				});

				use.waive = ceaseOperation();

				if (!way) speed = 1;
				if (use.novel) {
					if (use.motion) {
						cancelAnimationFrame(use.motion);
						use.initial = use.present;
					}
					else use.initial = Date.now();
					use.motion = nib[pour](streamCore);
				}
				else inciteSource();
			});

			this.addEventListener('wheel', function (tick) {

				if (!use.keen) return;
				if (use.annul) return denyRise(tick);
				else if (fad.delay == true && !use.waive) use.annul = true;
				if (!(use.waive && use.occur)) denyRise(tick);

			}, hasQuiet() ? { passive: false } : false);
		});

		$.easing['curve'] = $.easing['easeInOutSine'];

		gate.resize(function () {
			clearTimeout(use.bound);
			use.bound = setTimeout(detectOverflow, 100);
		});

		return this;

		function streamCore() {
			use.present = Date.now();
			var advance = Math.min(use.present - use.initial, speed) / speed,
				increase = $.easing[morph](advance);
			entity.each(function (key) {
				if (!quit[key]) {
					$(this).scrollTop(outset[key] + increase * way);
					checkLimits(this, key, advance);
				}
			});
			if (advance < 1 && !use.waive) use.motion = nib[pour](streamCore);
			else hindStage();
		}

		function inciteSource() {
			entity.each(function (beat) {
				if (!quit[beat]) {
					$(this).stop().animate({ scrollTop: destined[beat] }, {
						duration: speed,
						easing: morph,
						progress: function (current, sequence) {
							checkLimits(this, beat, sequence);
						},
						complete: hindStage
					});
				}
			});
		}

		function checkLimits(essence, rank, factor) {
			if (100 * factor >= fad.reset) use.turned = 0;
			if (onFringe(essence, rank)) {
				quit[rank] = true;
				if (!use.novel) $(essence).stop(true, true);
				use.waive = ceaseOperation();
			}
		}

		function onFringe(matter, cue, genesis) {
			var put = Math.round(genesis || $(matter).scrollTop()),
				above = destined[cue] < 0 && !put,
				below = destined[cue] > brink[cue] && put == brink[cue] && fad.orbit > 0;
			return above || below;
		}

		function ceaseOperation() {
			return quit.every(function (flag) { return flag });
		}

		function hindStage() {
			use.turned = use.annul = use.motion = 0;
		}

		function denyRise(jab) {
			jab.preventDefault();
			jab.stopPropagation();
		}

		function elementAnalysis() {
			var item = $();
			if (!object.length) {
				use.crux = true;
				object = vessel;
			}
			object.each(function () {
				if ($.zenith(this)) {
					if (!use.main) {
						if (use.novel) use.main = nib;
						else use.main = baseTag();
						item = item.add(use.main);
					}
				}
				else item = item.add(this);
			});
			use.target = object = item;
			object.each(function (zest) {
				if ($.zenith(this)) area[zest] = 'hub';
				else area[zest] = 'sub';
			});
			if (use.crux && use.main) vessel = object;
			detectOverflow();
		}

		function baseTag() {
			var origin = gate.scrollTop();
			gate.scrollTop(1);
			if ($('html').scrollTop()) var root = 'html';
			else if ($('body').scrollTop()) root = 'body';
			else root = 'html, body';
			gate.scrollTop(origin);
			return root;
		}

		function detectOverflow() {
			object.each(function (peg) {
				if (area[peg] == 'hub') var teem = $(document).height() - gate.height();
				else teem = this.scrollHeight - $(this).height();
				edge[peg] = Math.round(teem);
			});
		}

		function hasQuiet() {
			var cold = false,
				hike = function () { };
			try {
				var aid = Object.defineProperty({}, 'passive', {
					get: function () { cold = true }
				});
				nib.addEventListener('test', hike, aid);
				nib.removeEventListener('test', hike, aid);
			} catch (e) { }
			return cold;
		}
	};

	$.zenith = function (sample) {

		var peak = [nib, document, 'HTML', 'BODY'], facet;
		if (sample) return peak.indexOf(sample) > -1 || peak.indexOf(sample.tagName) > -1;
		$.each(peak, function (spot, detail) {
			facet = $(detail).data('impulse');
			if (facet) return false;
		});
		return facet;
	};

	$.fn.impulse.default = {

		target: '',
		range: 135,
		leap: 1.35,
		tempo: 500,
		sloth: 1.1,
		curb: 5,
		reset: 85,
		effect: 'easeOutSine',
		keen: true,
		delay: false,
		occur: true,
		fluid: true
	};

	$.fn.demit = function () {

		return this.each(function () {
			if ($.zenith(this)) var habit = $.zenith();
			else habit = $(this).data('impulse');
			if (habit) {
				if (habit.novel) cancelAnimationFrame(habit.motion);
				else habit.target.stop();
				habit.turned = habit.annul = habit.motion = 0;
			}
		});
	};

	$.fn.amend = function (gist) {

		return this.each(function () {
			if ($.zenith(this)) var quirk = $.zenith();
			else quirk = $(this).data('impulse');
			if (quirk) {
				$.each(gist, function (sign, rate) {
					if (sign in quirk) quirk[sign] = rate;
				});
			}
		});
	};

	$.fn.evoke = function (unit) {

		var lot = $.Event('wheel.excite', { mien: true }), bulk;
		return this.each(function () {
			if ($.zenith(this)) {
				if (!bulk) {
					bulk = $.zenith();
					if (bulk) $(bulk.main).trigger(lot, unit);
				}
			}
			else $(this).trigger(lot, unit);
		});
	};
}(jQuery, window));

(function ($) { var b = {}; $.each(['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'], function (i, n) { b[n] = function (p) { return Math.pow(p, i + 2) } }); $.extend(b, { Sine: function (p) { return 1 - Math.cos(p * Math.PI / 2) }, Circ: function (p) { return 1 - Math.sqrt(1 - p * p) }, Elastic: function (p) { return p === 0 || p === 1 ? p : -Math.pow(2, 8 * (p - 1)) * Math.sin(((p - 1) * 80 - 7.5) * Math.PI / 15) }, Back: function (p) { return p * p * (3 * p - 2) }, Bounce: function (p) { var f, h = 4; while (p < ((f = Math.pow(2, --h)) - 1) / 11) { } return (1 / Math.pow(4, 3 - h) - 7.5625 * Math.pow((f * 3 - 2) / 22 - p, 2)) } }); $.each(b, function (n, e) { $.easing['easeIn' + n] = e; $.easing['easeOut' + n] = function (p) { return 1 - e(1 - p) }; $.easing['easeInOut' + n] = function (p) { return p < 0.5 ? e(p * 2) / 2 : 1 - e(p * -2 + 2) / 2 } }) })(jQuery);
