function WavePattern() {
	this.name = "wavepattern";

	this.draw = function() {
		push();
		noFill();
		stroke(255, 0, 0);
		strokeWeight(2);

		beginShape();

		var wave = fourier.waveform();
		for (var i = 0; i < wave.length; i++) {
			var x = map(i, 0, wave.length, 0, width);
			var y = map(wave[i], -1, 1, 0, height);

			vertex(x, y);
		}

		endShape();
		pop();
	};
}