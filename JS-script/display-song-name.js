//this function display song name in the song name list
function DisplaySongName() {
  this.x = CONSTANT_X;
  this.y = CONSTANT_Y;

  this.playing = false;

  this.draw = function () {
    textSize(15);
    textStyle(ITALIC);
    fill(0, 0, 0);
    text(songNameList[songIndex], this.x + 165, this.y + 14);
  };
}
