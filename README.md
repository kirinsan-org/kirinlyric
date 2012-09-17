kirinlyric
==========

This is jQuery plugin that sync automatically .lrc lyrics with HTML5 audio tag.

========== USAGE ==========

--- HTML ---

&gt;link href="kirinlyric.css" rel="stylesheet" type="text/css"&lt;

...

&gt;audio id="myAudio" controls src="xxx.ogg"&lt;&gt;/audio&lt;
&gt;div id="lyrics"&lt;&gt;/div&lt;

--- JavaScript ---

var lrcText = [
	'[00:01.22]Text 1',
	'[00:03.42]Text 2',
	'[00:06.88]Text 3'
].join('\r\n');

$('#myAudio').kirinlyric({
	target : '#lyrics',
	lrc : lrcText
});