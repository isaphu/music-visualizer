/* this PrevButton function will display previous button and 
check if the its clicked the songs with play the previous song by using 
nextSongWith(-1)
*/
function PrevButton() {
  this.x = CONSTANT_X;
  this.y = CONSTANT_Y;
  this.width = CONSTANT_WIDTH;
  this.height = CONSTANT_HEIGHT;

  this.playing = false;

  this.draw = function () {
    fill(230, 230, 228);
    ellipse(this.x + 60, this.y + 10, this.width + 25, this.height + 25);
    noStroke();
    fill(108, 138, 155);
    triangle(
      this.x + 70,
      this.y,
      this.x + 35 + this.width,
      this.y + this.height / 2,
      this.x + 70,
      this.y + this.height
    );
    fill(108, 138, 155);
    rect(this.x + 50, this.y + 3, 5, 15);
  };

  this.hitCheck = function () {
    if (
      mouseX > this.x + 60 - this.width / 2 - 25 / 2 &&
      mouseX < this.x + 60 + this.width / 2 + 25 / 2 &&
      mouseY > this.y + 10 - this.height / 2 - 25 / 2 &&
      mouseY < this.y + 10 + this.height / 2 + 25 / 2
    ) {
      nextSongWith(-1);
    }
  };
}
