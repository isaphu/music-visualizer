function VisualsPanel() {
    this.x = CONSTANT_X;
    this.y = CONSTANT_Y;
    this.radio = createRadio("select-wave-pattern");

    this.radio.option("spectrum", "Spectrum");
    this.radio.option("wavepattern", "Wave Pattern");
    this.radio.option("needles", "Needles");
    this.radio.option("circle-wave", "Circle Wave");
    this.radio.selected("spectrum");

    this.draw = function() {
        this.radio.position(this.x + 330, this.y);
    };

    this.mousePressed = function() {
        vis.selectVisual(this.radio.value());
    };
}