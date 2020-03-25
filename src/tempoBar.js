class TempoBar {
  constructor() {
    this.currentCol = 0;
  }

  begin() {
    let tempoBar = document.getElementsByClassName(`col-0`);

    for (let i = 0; i < tempoBar.length; i++) {
      tempoBar[i].classList.add("active")
    }
    // setTimeout(() => tempoBar.classList.remove("active"), tempo);

    for (let i = 0; i < tempoBar.length; i++) {
      const classes = tempoBar[i].classList;
      const audioId = Array.prototype.slice.call(classes)[1]
      const audio = document.getElementById(audioId)
      if (Array.prototype.slice.call(audio.classList).includes("clicked") /* and not muted */) {
        this.stopPlay(audio);
        audio.play()
      }
    }
    this.currentCol ++;

    if(this.currentCol > 15) {
      this.currentCol = 0;
    }
  }

  stopPlay(sound) {
    sound.pause();
    sound.currentTime = 0;
  }

  reset() {
    this.currentCol = 0;
    let lis = document.getElementsByTagName("li")
    // loop through lis and remove clicked class
  }
}


module.exports = TempoBar;