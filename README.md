Kirinlyric
==========
![logo](http://world.kirinsan.org/kirinlyric-demo/djetz.jpg "")

This is jQuery plugin that sync automatically .lrc lyrics with HTML5 audio tag.

# USAGE

## HTML side

    <link href="kirinlyric.css" rel="stylesheet" type="text/css">
    ...
    <audio id="myAudio" controls src="xxx.ogg"&gt;&lt;/audio>
    <div id="lyrics"&gt;&lt;/div>

## JavaScript side

    // require loading jQuery above
    var lrcText = [
      '[00:01.22]Text 1',
      '[00:03.42]Text 2',
      '[00:06.88]Text 3'
    ].join('\r\n');
    $('#myAudio').kirinlyric({
      target : '#lyrics',
      lrc : lrcText
    });

# DEMO
* http://world.kirinsan.org/kirinlyric-demo/ simple usage
* http://kirinsan.org/kirinsan.html use with BigVideo.js
