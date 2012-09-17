jQuery.fn.kirinlyric = function(conf) {

	var cls = '.kirinlyric';
	var farPrev = conf.farPrev || 'far-prev';
	var prev = conf.prev || 'prev';
	var current = conf.current || 'current';
	var next = conf.next || 'next';
	var farNext = conf.farNext || 'far-next';
	var $audio = $(this);
	var lrc = parseLRC(conf.lrc);
	var $target = $(conf.target).html('<span class="kirinlyric blank-row ' + farPrev + '"></span><span class="kirinlyric blank-row ' + prev + '"></span>');

	// generate HTML
	var html = [];
	$.each(lrc, function(idx, row) {
		if (/^raw/.test(row.time)) {
			html.push(row.text);
		} else {
			html.push('<span class="kirinlyric" data-time="' + row.time + '">' + row.text + '<br></span>');
		}
	});
	$target.append(html.join('')).append('<span class="kirinlyric blank-row"></span><span class="kirinlyric blank-row"></span>');

	// monitoring
	function loop() {
		var currentTime = $audio.prop('currentTime');
		var $spans = $(cls);
		$spans.removeClass(prev).removeClass(current).removeClass(next).removeClass(farPrev).removeClass(farNext).each(function(idx, span) {
			var $farPrev = $(($spans[idx - 2]));
			var $prev    = $(($spans[idx - 1]));
			var $span    = $(span);
			var $next    = $(($spans[idx + 1]));
			var $farNext = $(($spans[idx + 2]));
			var time     = $span.data('time');
			var nextTime = $next.data('time');

			if (currentTime > time && typeof nextTime == 'undefined' || currentTime < nextTime) {
				$farPrev.addClass(farPrev);
				$prev.addClass(prev);
				$span.addClass(current);
				$next.addClass(next);
				$farNext.addClass(farNext);
				return false;
			}
		});
	}

	setInterval(loop, 300);

	// convert lrc string to object
	function parseLRC(lrcStr) {
		var lrc = [];
		var arr = lrcStr.split(/\r\n|\r|\n/);
		$.each(arr, function(idx, row) {
			var time = row.match(/^\[(\d{2}):(\d{2})\.(\d{2})\](.*)$/);
			if (time && time.length == 5) {
				var sec = (Number(time[1]) * 60 + Number(time[2])) + Number(time[3]) / 100;
				lrc.push({
					time : sec,
					text : time[4]
				});
			} else {
				lrc.push({
					time : 'raw' + idx,
					text : row
				});
			}
		});
		return lrc;
	}

};
