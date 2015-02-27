// StopWatch Example Pure JS
function stopWatch() {			
	var timer = document.querySelector('#timer');		
	var t = [0, 0, 0, 0, 0, 0, 0, 0];
			
	format = function(ms) {		
		var d = new Date(ms + t[5]).toString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
		var x = String(ms % 1000);
		while (x.length < 3) {
			x = '0' + x;
		}
		d += '.' + x;
		return d.substr(0, d.length - 1);
	};
	
	
}


