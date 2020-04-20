/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Table = __webpack_require__(/*! ./table.js */ \"./src/table.js\")\nvar TempoBar = __webpack_require__(/*! ./tempoBar.js */ \"./src/tempoBar.js\")\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  const soundTable = new Table();\n  soundTable.createTable();\n  const tempoBar = new TempoBar();\n  tempoBar.begin();\n  \n  const sounds = document.getElementById(\"sounds\");\n  const unmute = document.getElementById(\"unmute\");\n  const mute = document.getElementById(\"mute\");\n  const unpause = document.getElementById(\"unpause\");\n  const pause = document.getElementById(\"pause\");\n  const reset = document.getElementById(\"reset\");\n  const tempoInput = document.getElementById(\"tempo-input\");\n\n  unmute.classList.add(\"disabled\");\n  unpause.classList.add(\"disabled\");\n\n  let playing = true;\n  let tempo = tempoInput.value\n\n  let measureCount = document.getElementById(\"measure-input\");\n  measureCount.addEventListener(\"change\", (e) => {\n    const uls = document.querySelectorAll(\"ul\");\n    for (let i = 0; i < uls.length; i++) {\n      let ulsArray = Array.prototype.slice.call(uls[i].children)\n      let slicedOff = ulsArray.slice(e.target.value * 8);\n      let kept = ulsArray.slice(0, e.target.value * 8)\n      for (let j = 0; j < slicedOff.length; j++) {\n        slicedOff[j].classList.add(\"minimized\")\n      }\n      for (let j = 0; j < kept.length; j++) {\n        kept[j].classList.remove(\"minimized\")\n      }\n    }\n    tempoBar.measureChange(parseInt(e.target.value))\n  })\n  \n  tempoInput.addEventListener(\"change\", (e) => {\n    tempo = e.target.value\n  })\n\n  pause.addEventListener(\"click\", () => {\n    clearInterval(playLoop);\n    playing = false;\n    pause.classList.add(\"disabled\");\n    unpause.classList.remove(\"disabled\");\n  });\n\n  unpause.addEventListener(\"click\", () => {\n    playing = true;\n    play();\n    unpause.classList.add(\"disabled\");\n    pause.classList.remove(\"disabled\");\n  });\n\n  reset.addEventListener(\"click\", () => {\n    tempoBar.reset();\n  });\n\n  mute.addEventListener(\"click\", () => {\n    sounds.classList.add(\"muted\")\n    unmute.classList.remove(\"disabled\");\n    mute.classList.add(\"disabled\");\n  });\n\n  unmute.addEventListener(\"click\", () => {\n    sounds.classList.remove(\"muted\")\n    unmute.classList.add(\"disabled\");\n    mute.classList.remove(\"disabled\");\n  });\n\n  let playLoop;\n\n  const play = () => {\n    playLoop = setTimeout(() => {\n      tempoBar.begin(tempo);\n      if (playing) {\n        play();\n      }\n    }, tempo);\n  };\n\n  play();\n\n  particlesJS(\"particles-js\", { \"particles\": { \"number\": { \"value\": 85, \"density\": { \"enable\": true, \"value_area\": 800 } }, \"color\": { \"value\": \"#ffffff\" }, \"shape\": { \"type\": \"circle\", \"stroke\": { \"width\": 0, \"color\": \"#000000\" }, \"polygon\": { \"nb_sides\": 5 }, \"image\": { \"src\": \"img/github.svg\", \"width\": 100, \"height\": 100 } }, \"opacity\": { \"value\": 0.5, \"random\": false, \"anim\": { \"enable\": false, \"speed\": 1, \"opacity_min\": 0.1, \"sync\": false } }, \"size\": { \"value\": 3, \"random\": true, \"anim\": { \"enable\": false, \"speed\": 40, \"size_min\": 0.1, \"sync\": false } }, \"line_linked\": { \"enable\": true, \"distance\": 150, \"color\": \"#ffffff\", \"opacity\": 0.4, \"width\": 1 }, \"move\": { \"enable\": true, \"speed\": 6, \"direction\": \"none\", \"random\": false, \"straight\": false, \"out_mode\": \"out\", \"bounce\": false, \"attract\": { \"enable\": false, \"rotateX\": 600, \"rotateY\": 1200 } } }, \"interactivity\": { \"detect_on\": \"canvas\", \"events\": { \"onhover\": { \"enable\": true, \"mode\": \"repulse\" }, \"onclick\": { \"enable\": true, \"mode\": \"push\" }, \"resize\": true }, \"modes\": { \"grab\": { \"distance\": 400, \"line_linked\": { \"opacity\": 1 } }, \"bubble\": { \"distance\": 400, \"size\": 40, \"duration\": 2, \"opacity\": 8, \"speed\": 3 }, \"repulse\": { \"distance\": 200, \"duration\": 0.4 }, \"push\": { \"particles_nb\": 4 }, \"remove\": { \"particles_nb\": 2 } } }, \"retina_detect\": true }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.display = 'none'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;\n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/table.js":
/*!**********************!*\
  !*** ./src/table.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Table {\n  createTable() {\n    let CELLS = 32;\n    const beatTable = document.getElementById(\"beat-table\")\n    const sounds = document.getElementById(\"sounds\")\n    const checkboxes = document.getElementById(\"instrument-checkboxes\")\n\n    for (let i = 0; i < sounds.children.length; i++) {\n      const ul = document.createElement(\"ul\");\n      ul.classList.add(`${sounds.children[i].id}`, `beat-row`)\n      \n      for (let j = 0; j < CELLS; j++) {\n        const li = document.createElement(\"li\");\n        li.classList.add(`col-${j}`, `${sounds.children[i].id}`)\n\n        li.addEventListener(\"click\", () => {\n          li.classList.toggle(\"clicked\");\n\n          let soundsCl = Array.prototype.slice.call(sounds.classList)\n          if (Array.prototype.slice.call(li.classList).includes(\"clicked\") && !soundsCl.includes(\"muted\")) {\n            sounds.children[i].currentTime = 0;\n            sounds.children[i].play();\n          }\n        })\n\n        ul.appendChild(li)\n      } \n\n      beatTable.appendChild(ul)\n    }\n\n    for (let i = 0; i < checkboxes.children.length; i++) {\n      checkboxes.children[i].addEventListener(\"change\", () => {\n        \n        let row = document.getElementsByClassName(`sound-${checkboxes.children[i].value}`)\n        if (!checkboxes.children[i].checked) {\n          for (let j = 0; j < row.length; j++) {\n            row[j].classList.add(\"disabled\")\n          }\n        } else {\n          for (let j = 0; j < row.length; j++) {\n            row[j].classList.remove(\"disabled\")\n          }\n        }\n      })\n    }\n  }\n}\n\nmodule.exports = Table\n\n//# sourceURL=webpack:///./src/table.js?");

/***/ }),

/***/ "./src/tempoBar.js":
/*!*************************!*\
  !*** ./src/tempoBar.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class TempoBar {\n  constructor(count = 4) {\n    this.currentCol = 0;\n    this.measureCount = count;\n  }\n\n  begin(tempo) {\n    let tempoBar = document.getElementsByClassName(`col-${this.currentCol}`);\n    const sounds = document.getElementById(\"sounds\");\n    let soundsCl = Array.prototype.slice.call(sounds.classList);\n    for (let i = 0; i < tempoBar.length; i++) {\n      tempoBar[i].classList.add(\"active\")\n    }\n    for (let i = 0; i < tempoBar.length; i++) {\n      let cl = Array.prototype.slice.call(tempoBar[i].classList)\n\n      if (cl[3] === \"active\" && cl[2] === \"clicked\" && !soundsCl.includes(\"muted\")) {\n        let audio = document.getElementById(`${cl[1]}`)\n        this.stopPlay(audio);\n        audio.play()\n      }\n    }\n    for (let i = 0; i < tempoBar.length; i++) {\n      setTimeout(() => tempoBar[i].classList.remove(\"active\"), tempo);\n    }\n    this.currentCol ++;\n    if(this.currentCol >= this.measureCount * 8) {\n      this.currentCol = 0;\n    }\n  }\n\n  stopPlay(sound) {\n    sound.pause();\n    sound.currentTime = 0;\n  }\n\n  measureChange(count) {\n    this.currentCol = 0;\n    this.measureCount = count\n  }\n\n  reset() {\n    this.currentCol = 0;\n    this.measureCount = 4\n    let lis = document.getElementsByTagName(\"li\")\n\n    for (let i = 0; i < lis.length; i++) {\n      let licl = Array.prototype.slice.call(lis[i].classList)\n      if (licl.includes(\"clicked\")) {\n        lis[i].classList.remove(\"clicked\")\n      }\n    }\n    const checkboxes = document.getElementsByClassName(\"checkbox\")\n    for (let i = 0; i < checkboxes.length; i++) {\n      checkboxes[i].checked = true;\n    }\n    for (let i = 0; i < checkboxes.length; i++) {\n      let row = document.getElementsByClassName(`sound-${checkboxes[i].value}`)\n      for (let j = 0; j < row.length; j++) {\n        row[j].classList.remove(\"disabled\")\n      }\n    }\n  }\n}\n\n\nmodule.exports = TempoBar;\n\n//# sourceURL=webpack:///./src/tempoBar.js?");

/***/ })

/******/ });