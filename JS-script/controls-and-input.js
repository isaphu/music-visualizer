function ControlsAndInput() {

    this.menuDisplayed = false;
    this.playbackButton = new PlaybackButton();
    this.nextButton = new NextButton();
    this.prevButton = new PrevButton();
    this.displaySongName = new DisplaySongName();
    this.visualsPanel = new VisualsPanel();

    this.mousePressed = function() {
        this.playbackButton.hitCheck()
        this.nextButton.hitCheck()
        this.prevButton.hitCheck()
        this.visualsPanel.mousePressed()
    };

    this.setup = function() {};

    this.draw = function() {
        push();
        this.playbackButton.draw();
        this.nextButton.draw();
        this.prevButton.draw();
        this.displaySongName.draw();
        this.visualsPanel.draw();
        pop();
    };

    this.onResize = function() {
        this.playbackButton.x = CONSTANT_X;
        this.playbackButton.y = CONSTANT_Y;

        this.nextButton.x = CONSTANT_X;
        this.nextButton.y = CONSTANT_Y;

        this.prevButton.x = CONSTANT_X;
        this.prevButton.y = CONSTANT_Y;

        this.displaySongName.x = CONSTANT_X;
        this.displaySongName.y = CONSTANT_Y;

        this.visualsPanel.x = CONSTANT_X;
        this.visualsPanel.y = CONSTANT_Y;
    }
}