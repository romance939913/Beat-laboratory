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

eval("var Table = __webpack_require__(/*! ./table.js */ \"./src/table.js\")\nvar TempoBar = __webpack_require__(/*! ./tempoBar.js */ \"./src/tempoBar.js\")\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  const soundTable = new Table();\n  const tempoBar = new TempoBar();\n  tempoBar.begin();\n  \n  const sounds = document.getElementById(\"sounds\");\n  const volume = document.getElementById(\"volume\");\n  const mute = document.getElementById(\"mute\");\n  const play = document.getElementById(\"play\");\n  const pause = document.getElementById(\"pause\");\n  const tempoInput = document.getElementById(\"tempo-input\");\n\n  volume.classList.add(\"off\");\n  play.classList.add(\"off\");\n\n  let playing = true;\n  let tempo = tempoInput.value\n  \n  tempoInput.addEventListener(\"change\", (e) => {\n    tempo = e.target.value\n  })\n\n  pause.addEventListener(\"click\", () => {\n    clearInterval(playLoop);\n    playing = false;\n    pause.classList.add(\"off\");\n    play.classList.remove(\"off\");\n  });\n\n  play.addEventListener(\"click\", () => {\n    playing = true;\n    play();\n    play.classList.add(\"off\");\n    pause.classList.remove(\"off\");\n  });\n\n//   $(\"#reset\").click(() => {\n//     activeSlider.reset();\n//   });\n\n  mute.addEventListener(\"click\", () => {\n    audio.classList.add(\"muted\");\n    volume.classList.remove(\"off\");\n    mute.classList.add(\"off\");\n  });\n\n  volume.addEventListener(\"click\", () => {\n    audio.classList.remove(\"muted\");\n    volume.classList.remove(\"off\");\n    mute.classList.remove(\"off\");\n  });\n\n//   let playLoop;\n\n//   const play = () => {\n//     playLoop = setTimeout(() => {\n//       activeSlider.init(tempo);\n//       if (playing) {\n//         play();\n//       }\n//     }, tempo);\n//   };\n\n//   var cssSelector = anime({\n//     targets: '#cssSelector .el',\n//     rotate: 360,\n//     translateX: -300,\n//     delay: 1000,\n//     easing: 'easeInOutQuart'\n//   });\n//   //\n//   // const buzz = new Audio('./lib/beats/MustardVoxOnTheBeat.wav');\n//   // buzz.play();\n\n//   play();\n\n// });\n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/table.js":
/*!**********************!*\
  !*** ./src/table.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Table {\n  \n  constructor() {\n    this.createTable();\n  }\n\n  createTable() {\n    let CELLS = 15;\n    const beatTable = document.getElementById(\"beat-table\")\n    const sounds = document.getElementById(\"sounds\")\n    \n    for (let i = 0; i < sounds.children.length; i++) {\n      console.log(sounds.children[i].id)\n      const ul = document.createElement(\"ul\");\n      ul.classList.add(`${sounds.children[i].id}`, `beat-row`)\n      \n      for (let j = 0; j < CELLS; j++) {\n        const li = document.createElement(\"li\");\n        li.classList.add(`col-${j}`, `${sounds.children[i].id}`)\n\n        li.addEventListener(\"click\", () => {\n          li.classList.toggle('clicked');\n\n          if (Array.prototype.slice.call(li.classList).includes(\"clicked\") /* and not muted */) {\n            sounds.children[i].currentTime = 0;\n            sounds.children[i].play();\n          }\n        })\n\n        ul.appendChild(li)\n      } \n\n      beatTable.appendChild(ul)\n    }\n  }\n}\n\nmodule.exports = Table\n\n//# sourceURL=webpack:///./src/table.js?");

/***/ }),

/***/ "./src/tempoBar.js":
/*!*************************!*\
  !*** ./src/tempoBar.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class TempoBar {\n  constructor() {\n    this.currentCol = 0;\n  }\n\n  begin() {\n    let tempoBar = document.getElementsByClassName(`col-0`);\n\n    for (let i = 0; i < tempoBar.length; i++) {\n      tempoBar[i].classList.add(\"active\")\n    }\n    // setTimeout(() => tempoBar.classList.remove(\"active\"), tempo);\n\n    for (let i = 0; i < tempoBar.length; i++) {\n      const classes = tempoBar[i].classList;\n      const audioId = Array.prototype.slice.call(classes)[1]\n      const audio = document.getElementById(audioId)\n      if (Array.prototype.slice.call(audio.classList).includes(\"clicked\") /* and not muted */) {\n        this.stopPlay(audio);\n        audio.play()\n      }\n    }\n    this.currentCol ++;\n\n    if(this.currentCol > 15) {\n      this.currentCol = 0;\n    }\n  }\n\n  stopPlay(sound) {\n    sound.pause();\n    sound.currentTime = 0;\n  }\n\n  reset() {\n    this.currentCol = 0;\n    let lis = document.getElementsByTagName(\"li\")\n    // loop through lis and remove clicked class\n  }\n}\n\n\nmodule.exports = TempoBar;\n\n//# sourceURL=webpack:///./src/tempoBar.js?");

/***/ })

/******/ });