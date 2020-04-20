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
        slicedOff[j].classList.add("minimized")
      }
      for (let j = 0; j < kept.length; j++) {
        kept[j].classList.remove("minimized")
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

  particlesJS("particles-js", { "particles": { "number": { "value": 85, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); var count_particles, update;  count_particles = document.querySelector('.js-count-particles'); update = function () { if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

});