kirinlyric
==========

This is jQuery plugin that sync automatically .lrc lyrics with HTML5 audio tag.

========== USAGE ==========

--- HTML ---

<link href="kirinlyric.css" rel="stylesheet" type="text/css">

...

<audio id="myAudio" controls src="xxx.ogg"></audio>
<div id="lyrics"></div>

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