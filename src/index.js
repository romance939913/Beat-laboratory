var Table = require('./table.js')
var TempoBar = require('./tempoBar.js')

window.addEventListener('DOMContentLoaded', () => {
  const soundTable = new Table();
  soundTable.createTable();
  const tempoBar = new TempoBar();
  tempoBar.begin();
  
  const sounds = document.getElementById("sounds");
  const unmute = document.getElementById("unmute");
  const mute = document.getElementById("mute");
  const unpause = document.getElementById("unpause");
  const pause = document.getElementById("pause");
  const reset = document.getElementById("reset");
  const tempoInput = document.getElementById("tempo-input");

  unmute.classList.add("disabled");
  unpause.classList.add("disabled");

  let playing = true;
  let tempo = tempoInput.value

  let measureCount = document.getElementById("measure-input");
  measureCount.addEventListener("change", (e) => {
    const uls = document.querySelectorAll("ul");
    for (let i = 0; i < uls.length; i++) {
      let ulsArray = Array.prototype.slice.call(uls[i].children)
      let slicedOff = ulsArray.slice(e.target.value * 8);
      let kept = ulsArray.slice(0, e.target.value * 8)
      for (let j = 0; j < slicedOff.length; j++) {
        slicedOff[j].classList.add("disabled")
      }
      for (let j = 0; j < kept.length; j++) {
        kept[j].classList.remove("disabled")
      }
    }
    tempoBar.measureChange(parseInt(e.target.value))
  })
  
  tempoInput.addEventListener("change", (e) => {
    tempo = e.target.value
  })

  pause.addEventListener("click", () => {
    clearInterval(playLoop);
    playing = false;
    pause.classList.add("disabled");
    unpause.classList.remove("disabled");
  });

  unpause.addEventListener("click", () => {
    playing = true;
    play();
    unpause.classList.add("disabled");
    pause.classList.remove("disabled");
  });

  reset.addEventListener("click", () => {
    tempoBar.reset();
  });

  mute.addEventListener("click", () => {
    sounds.classList.add("muted")
    unmute.classList.remove("disabled");
    mute.classList.add("disabled");
  });

  unmute.addEventListener("click", () => {
    sounds.classList.remove("muted")
    unmute.classList.add("disabled");
    mute.classList.remove("disabled");
  });

  let playLoop;

  const play = () => {
    playLoop = setTimeout(() => {
      tempoBar.begin(tempo);
      if (playing) {
        play();
      }
    }, tempo);
  };

  play();

});