/* this function will display play song button, when user click
it will display pause button. when user clicked pause, it will trigger 
isPlaying() to pause the song, will do it vice versa. 
*/ 
function PlaybackButton() {
  this.x = CONSTANT_X;
  this.y = CONSTANT_Y;
  this.width = CONSTANT_WIDTH;
  this.height = CONSTANT_HEIGHT;

  this.playing = false;

  this.draw = function () {
    if (sound.isPlaying()) {
      this.playing = true;
    } else {
      this.playing = false;
    }
    if (this.playing) {
      noStroke();
      fill(108, 138, 155);
      rect(this.x, this.y, this.width / 2 - 2, this.height);
      rect(
        this.x + (this.width / 2 + 2),
        this.y,
        this.width / 2 - 2,
        this.height
      );
    } else {
      noStroke();
      fill(230, 230, 228);
      ellipse(this.x + 6, this.y + 10, this.width + 25, this.height + 25);
      fill(108, 138, 155);
      triangle(
        this.x,
        this.y,
        this.x + this.width,
        this.y + this.height / 2,
        this.x,
        this.y + this.height
      );
    }
  };

  this.hitCheck = function () {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.width &&
      mouseY > this.y &&
      mouseY < this.y + this.height
    ) {
      if (sound.isPlaying()) {
        sound.pause();
      } else {
        sound.play();
      }
      this.playing = !this.playing;
    }
  };
}
