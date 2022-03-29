var controls = null;
var vis = null;
var sound = null;
var fourier;
var songNameList = [
    "heal-you.mp3",
    "rooster.mp3",
    "thats-what-it-takes.mp3",
    "til-i-hear-them-say.mp3",
];
var songIndex = 0;
var songList = [];
var x = 750;
var y = 850;

//play songs in the folder media/songs
function preload() {
    for (var songName of songNameList) {
        songList.push(loadSound("./media/songs/" + songName));
    }
    sound = songList[0];
}

//play the next song by using index
var nextSongWith = (k) => {
    var nextSongIndex = (songIndex + k) % songNameList.length;
    if (nextSongIndex < 0) {
        nextSongIndex = 3;
    }
    songIndex = nextSongIndex;
    var isOldSongPlayed = sound.isPlaying();
    if (isOldSongPlayed) {
        sound.pause();
    }
    sound = songList[songIndex];
    if (isOldSongPlayed) {
        sound.play();
    }
}

//setting up the project with different visualizations
function setup() {
    createCanvas(windowWidth, windowHeight);

    CONSTANT_X = windowWidth / 2 - 325;
    CONSTANT_Y = windowHeight - 100;

    controls = new ControlsAndInput();
    controls.setup();
    fourier = new p5.FFT();

    vis = new Visualisations();
    vis.add(new Spectrum());
    vis.add(new WavePattern());
    vis.add(new Needles());
    vis.add(new CircleWave());
}

function draw() {
    background(0,0,0);
    vis.selectedVisual.draw();
    fill(255);
    stroke(62, 66, 75);
    strokeWeight(8);
    rect(CONSTANT_X - 25, CONSTANT_Y - 25, 750, 70, 20);
    controls.draw();
}

function mouseClicked() {
    controls.mousePressed();
}

//to have visualization responsive to window width and height
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    CONSTANT_X = windowWidth / 2 - 325;
    CONSTANT_Y = windowHeight - 100;

    controls.onResize();

    for (var v of vis.visuals) {
        if (v.hasOwnProperty("onResize")) {
            v.onResize();
        }
    }
}