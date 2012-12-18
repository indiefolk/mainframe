(function ($, _) {

var MF = MF || {};

MF = (function () {

	var settings = {};

	function init() {
		var s = settings;

		// setup blink
		s.blink = $('#blink');

		s.main = $('#mainframe');

		setInterval(function () {

			s.blink.toggleClass('show');

		}, 500);

		// initial simulated loading delay
		_.delay(function () {

			writeLines([
				'> Select option:',
				'>	 1. Get shoes',
				'>	 2. Find Hans'
			]);

		}, 1000);
	}

	function writeLines(arrLines) {
		var wait = 0;

		for(var line in arrLines) {
			_.delay(typeLetters, (100*wait), arrLines[line]);

			wait++;
		}

		cursorToEnd();

	}

	function typeLetters(message) {

		var s = settings;

		var newLine = document.createElement('span');

		s.main.append(newLine);

		var wait = 0;

		for (var m in message) {

			_.delay(addLetter, (10*wait), {newLine: newLine, message: message, m: m});

			wait++;
		}

		s.main.append('<br /><br />');

		// move cursor to end
		cursorToEnd();
	}

	function addLetter(params) {
		var s = settings,
			p = params;

		var entry = $(p.newLine);

		entry.text(entry.text() + p.message[p.m]);

	}

	function cursorToEnd() {
		var s = settings;

		var b = s.blink;

		s.blink.remove();

		s.main.append(b);
	}

	return {
		init: init
	};

})();

$(document).ready(function () {

	MF.init();

});

})(jQuery, _);
