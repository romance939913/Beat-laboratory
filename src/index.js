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