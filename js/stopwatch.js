// StopWatch Example Pure JS
function stopWatch() {			
	var timer = document.querySelector('.sec-big');
	var timerSm = document.querySelector('.sec-small');
	var t = [0, 0, 0, 0, 0, 0, 0, 0];		
	
	this.startStop = function() {				
		t[t[2]] = (+new Date()).valueOf();
		t[2] = 1 - t[2];
		
		if (t[2] == 0) {
			clearInterval(t[4]);
			t[3] += t[1] - t[0];
						
			t[7]++;
			
			t[4] = t[1] = t[0] = 0;
			
			document.querySelector('#startTimer').innerHTML = "Start";
			document.querySelector('#startTimer').style.color = "green";
			document.querySelector('#reset').style.display = "block";
			
			display();
		}
		else {			
			document.querySelector('#startTimer').innerHTML = "Stop";
			document.querySelector('#startTimer').style.color = "red";
			document.querySelector('#reset').style.display = "none";
			t[4] = setInterval(display, 40);
		}
		
		return false;
	};	
	
	this.reset = function() {
		if (t[2]) {
			startStop();
		}
		
		t[4] = t[3] = t[2] = t[1] = t[0] = 0;
		
		display();
		
		t[7] = 0;
		
		return false;
	};
	
	var format = function(ms) {		
		var d = new Date(ms + t[5]).toString().replace(/.*(\d{2}:\d{2}).*/, '$1');
		var x = String(ms % 1000);
		while (x.length < 3) {
			x = '0' + x;
		}
		d += '.' + x;
		return d.substr(0, d.length - 1);
	};		
	
	var display = function() {		
		if (t[2]) {
			t[1] = (new Date()).valueOf();
		}
		
		timer.innerHTML = format(t[3] + t[1] - t[0]);
		timerSm.innerHTML = format(t[3] + t[1] - t[0]);
	};					
}

var start = new stopWatch();


