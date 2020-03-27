class TempoBar {
  constructor(count = 4) {
    this.currentCol = 0;
    this.measureCount = count;
  }

  begin(tempo) {
    let tempoBar = document.getElementsByClassName(`col-${this.currentCol}`);
    const sounds = document.getElementById("sounds");
    let soundsCl = Array.prototype.slice.call(sounds.classList);
    for (let i = 0; i < tempoBar.length; i++) {
      tempoBar[i].classList.add("active")
    }
    for (let i = 0; i < tempoBar.length; i++) {
      let cl = Array.prototype.slice.call(tempoBar[i].classList)

      if (cl[3] === "active" && cl[2] === "clicked" && !soundsCl.includes("muted")) {
        let audio = document.getElementById(`${cl[1]}`)
        this.stopPlay(audio);
        audio.play()
      }
    }
    for (let i = 0; i < tempoBar.length; i++) {
      setTimeout(() => tempoBar[i].classList.remove("active"), tempo);
    }
    this.currentCol ++;
    if(this.currentCol >= this.measureCount * 8) {
      this.currentCol = 0;
    }
  }

  stopPlay(sound) {
    sound.pause();
    sound.currentTime = 0;
  }

  measureChange(count) {
    this.currentCol = 0;
    this.measureCount = count
  }

  reset() {
    this.currentCol = 0;
    this.measureCount = 4
    let lis = document.getElementsByTagName("li")

    for (let i = 0; i < lis.length; i++) {
      let licl = Array.prototype.slice.call(lis[i].classList)
      if (licl.includes("clicked")) {
        lis[i].classList.remove("clicked")
      }
    }
    const checkboxes = document.getElementsByClassName("checkbox")
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = true;
    }
    for (let i = 0; i < checkboxes.length; i++) {
      let row = document.getElementsByClassName(`sound-${checkboxes[i].value}`)
      for (let j = 0; j < row.length; j++) {
        row[j].classList.remove("disabled")
      }
    }
  }
}


module.exports = TempoBar;