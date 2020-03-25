class TempoBar {
  constructor() {
    this.currentCol = 0;
  }

  begin(tempo) {
    let tempoBar = document.getElementsByClassName(`col-${this.currentCol}`);

    for (let i = 0; i < tempoBar.length; i++) {
      tempoBar[i].classList.add("active")
    }
    
    for (let i = 0; i < tempoBar.length; i++) {
      let cl = Array.prototype.slice.call(tempoBar[i].classList)

      if (cl[3] === "active" && cl[2] === "clicked" /* and not muted */) {
        let audio = document.getElementById(`${cl[1]}`)
        this.stopPlay(audio);
        audio.play()
      }
    }

    for (let i = 0; i < tempoBar.length; i++) {
      setTimeout(() => tempoBar[i].classList.remove("active"), tempo);
    }
    
    this.currentCol ++;

    if(this.currentCol >= 33) {
      this.currentCol = 0;
    }
  }

  stopPlay(sound) {
    sound.pause();
    sound.currentTime = 0;
  }

  // reset() {
  //   this.currentCol = 0;
  //   let lis = document.getElementsByTagName("li")
  //   // loop through lis and remove clicked class
  // }
}


module.exports = TempoBar;