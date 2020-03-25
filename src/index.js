var Table = require('./table.js')
var TempoBar = require('./tempoBar.js')

window.addEventListener('DOMContentLoaded', () => {
  const soundTable = new Table();
  const tempoBar = new TempoBar();
  tempoBar.begin();
  
  const sounds = document.getElementById("sounds");
  const audio = sounds.children;
  const unmute = document.getElementById("unmute");
  const mute = document.getElementById("mute");
  const unpause = document.getElementById("unpause");
  const pause = document.getElementById("pause");
  const tempoInput = document.getElementById("tempo-input");

  unmute.classList.add("off");
  unpause.classList.add("off");

  let playing = true;
  let tempo = tempoInput.value
  
  tempoInput.addEventListener("change", (e) => {
    tempo = e.target.value
    console.log(tempo)
  })

  pause.addEventListener("click", () => {
    clearInterval(playLoop);
    playing = false;
    pause.classList.add("off");
    unpause.classList.remove("off");
  });

  unpause.addEventListener("click", () => {
    playing = true;
    play();
    unpause.classList.add("off");
    pause.classList.remove("off");
  });

//   $("#reset").click(() => {
//     activeSlider.reset();
//   });

  mute.addEventListener("click", () => {

    Array.prototype.slice.call(audio).forEach((sound) => {
      sound.classList.add("muted");
    })
    unmute.classList.remove("off");
    mute.classList.add("off");
  });

  unmute.addEventListener("click", () => {

    Array.prototype.slice.call(audio).forEach((sound) => {
      sound.classList.remove("muted");
    })
    unmute.classList.remove("off");
    mute.classList.remove("off");
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