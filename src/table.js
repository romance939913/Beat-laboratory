class Table {
  createTable() {

    // const measureInput = document.getElementById("measure-input");
    // measureInput.addEventListener("change", () => {
    //   this.cells = measureInput.value * 4
    //   this.createTable();
    // })

    let CELLS = 33;
    const beatTable = document.getElementById("beat-table")
    const sounds = document.getElementById("sounds")
    const checkboxes = document.getElementById("instrument-checkboxes")

    // creating table
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

    // checkboxes
    for (let i = 0; i < checkboxes.children.length; i++) {
      checkboxes.children[i].addEventListener("change", () => {
        
        let row = document.getElementsByClassName(`sound-${checkboxes.children[i].value}`)
        if (!checkboxes.children[i].checked) {
          for (let j = 0; j < row.length; j++) {
            row[j].classList.add("disabled")
          }
        } else {
          for (let j = 0; j < row.length; j++) {
            row[j].classList.remove("disabled")
          }
        }
      })
    }
  }
}

module.exports = Table