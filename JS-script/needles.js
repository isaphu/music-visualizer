function Needles() {
	
	this.name = "needles";

	var minAngle = PI + PI / 10;
	var maxAngle = TWO_PI - PI / 10;

	this.plotsAcross = 2;
	this.plotsDown = 2;

	this.frequencyBins = ["bass", "lowMid", "highMid", "treble"];

	this.onResize = function() {
		this.pad = width / 20;
		this.plotWidth = (width - this.pad) / this.plotsAcross;
		this.plotHeight = (height - this.pad) / this.plotsDown;
		this.dialRadius = (this.plotWidth - this.pad) / 2 - 5;
	};

	this.onResize();

	this.draw = function() {
		var spectrum = fourier.analyze();
		var currentBin = 0;
		push();
		fill('#f0f2d2');
		for (var i = 0; i < this.plotsDown; i++) {
			for (var j = 0; j < this.plotsAcross; j++) {

				var x = this.pad + j * this.plotWidth;
				var y = this.pad + i * this.plotHeight;
				var w = this.plotWidth - this.pad;
				var h = this.plotHeight - this.pad;

				rect(x, y, w, h);
				this.ticks(x + w / 2, y + h, this.frequencyBins[currentBin]);

				var energy = fourier.getEnergy(this.frequencyBins[currentBin]);

				this.needle(energy, x + w / 2, y + h);
				currentBin++;
			}
		}

		pop();
	};

	this.needle = function(energy, centreX, bottomY) {
		push();
		stroke('#333333');
		translate(centreX, bottomY);
		theta = map(energy, 0, 255, minAngle, maxAngle);
		var x = this.dialRadius * cos(theta);
		var y = this.dialRadius * sin(theta);
		line(0, 0, x, y);
		pop();
	};

	this.ticks = function(centreX, bottomY, freqLabel) {
		var nextTickAngle = minAngle;
		push();
		stroke('#333333');
		fill('#333333');
		translate(centreX, bottomY);
		arc(0, 0, 20, 20, PI, 2 * PI);
		textAlign(CENTER);
		textSize(12);
		text(freqLabel, 0, -(this.plotHeight / 2));

		for (var i = 0; i < 9; i++) {
			var x = this.dialRadius * cos(nextTickAngle);
			var x1 = (this.dialRadius - 5) * cos(nextTickAngle);

			var y = (this.dialRadius) * sin(nextTickAngle);
			var y1 = (this.dialRadius - 5) * sin(nextTickAngle);

			line(x, y, x1, y1);
			nextTickAngle += PI / 10;
		}
		pop();
	};

}