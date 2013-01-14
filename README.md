kirinlyric
==========
![logo](http://world.kirinsan.org/kirinlyric-demo/djetz.jpg "")
This is jQuery plugin that sync automatically .lrc lyrics with HTML5 audio tag.

========== USAGE ==========

--- HTML ---

&lt;link href="kirinlyric.css" rel="stylesheet" type="text/css"&gt;

...

&lt;audio id="myAudio" controls src="xxx.ogg"&gt;&lt;/audio&gt;
&lt;div id="lyrics"&gt;&lt;/div&gt;

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