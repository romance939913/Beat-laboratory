class Table {
  
  constructor() {
    this.createTable();
  }

  createTable() {
    let CELLS = 33;
    const beatTable = document.getElementById("beat-table")
    const sounds = document.getElementById("sounds")
    
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
  }
}

module.exports = Table