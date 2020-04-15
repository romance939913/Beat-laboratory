# Beat-laboratory

This project offered a great opportunity to test my skills using just the bare necessities. No package.json anywhere in the repo, just HTML, CSS and vanillaJS!

Here's the live site if you want to try it out yourself [live site](https://romance939913.github.io/Beat-laboratory/)
<br/>
<br/>
![app-screenshot](assets/beatlab.gif)
<br/>
<br/>

Leveraged Object-Oriented Javascript to build out the three main features: the beat table, the tempo bar and the index class which sets event listeners and executes methods it requires. 

The Table class has a createTable method which generates the cells and adds a class of clicked when the user clicks, which will also play the audio 

```js
class Table {
  createTable() {
    let CELLS = 32;
    const beatTable = document.getElementById("beat-table")
    const sounds = document.getElementById("sounds")
    const checkboxes = document.getElementById("instrument-checkboxes")

    for (let i = 0; i < sounds.children.length; i++) {
      const ul = document.createElement("ul");
      ul.classList.add(`${sounds.children[i].id}`, `beat-row`)
      
      for (let j = 0; j < CELLS; j++) {
        const li = document.createElement("li");
        li.classList.add(`col-${j}`, `${sounds.children[i].id}`)

        li.addEventListener("click", () => {
          li.classList.toggle("clicked");

          let soundsCl = Array.prototype.slice.call(sounds.classList)
          if (Array.prototype.slice.call(li.classList).includes("clicked") && !soundsCl.includes("muted")) {
            sounds.children[i].currentTime = 0;
            sounds.children[i].play();
          }
        })

        ul.appendChild(li)
      } 

      beatTable.appendChild(ul)
    }
```

The Tempobar class increments across the beat table playing the notes if they are clicked by the user and if the board is unmuted. The primary method begin takes in a tempo from index.js and plays the notes that it crosses which are clicked. It then waits the allocated time before removing the active class from the current column, then increments to the next column.  

```js
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
```

The index.js class is what the document listens to and it requires the other two script files. It immediatly calls the createTable and begin methods to generate the table, initialize the tampoBar get the party started.

```js
var Table = require('./table.js')
var TempoBar = require('./tempoBar.js')

window.addEventListener('DOMContentLoaded', () => {
  const soundTable = new Table();
  soundTable.createTable();
  const tempoBar = new TempoBar();
  tempoBar.begin();
```
