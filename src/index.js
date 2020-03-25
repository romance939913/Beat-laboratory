var Table = require('./table.js')
var TempoBar = require('./tempoBar.js')

window.addEventListener('DOMContentLoaded', () => {
  const soundTable = new Table();
  const tempoBar = new TempoBar();
  tempoBar.begin();
  
  const sounds = document.getElementById("sounds");
  const volume = document.getElementById("volume");
  const mute = document.getElementById("mute");
  const play = document.getElementById("play");
  const pause = document.getElementById("pause");
  const tempoInput = document.getElementById("tempo-input");

  volume.classList.add("off");
  play.classList.add("off");

  let playing = true;
  let tempo = tempoInput.value
  
  tempoInput.addEventListener("change", (e) => {
    tempo = e.target.value
  })

  pause.addEventListener("click", () => {
    clearInterval(playLoop);
    playing = false;
    pause.classList.add("off");
    play.classList.remove("off");
  });

  play.addEventListener("click", () => {
    playing = true;
    play();
    play.classList.add("off");
    pause.classList.remove("off");
  });

//   $("#reset").click(() => {
//     activeSlider.reset();
//   });

  mute.addEventListener("click", () => {
    audio.classList.add("muted");
    volume.classList.remove("off");
    mute.classList.add("off");
  });

  volume.addEventListener("click", () => {
    audio.classList.remove("muted");
    volume.classList.remove("off");
    mute.classList.remove("off");
  });

//   let playLoop;

//   const play = () => {
//     playLoop = setTimeout(() => {
//       activeSlider.init(tempo);
//       if (playing) {
//         play();
//       }
//     }, tempo);
//   };

//   var cssSelector = anime({
//     targets: '#cssSelector .el',
//     rotate: 360,
//     translateX: -300,
//     delay: 1000,
//     easing: 'easeInOutQuart'
//   });
//   //
//   // const buzz = new Audio('./lib/beats/MustardVoxOnTheBeat.wav');
//   // buzz.play();

//   play();

// });

});