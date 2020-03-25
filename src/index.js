var Table = require('./table.js')
var TempoBar = require('./tempoBar.js')

window.addEventListener('DOMContentLoaded', () => {
  const soundTable = new Table();
  const tempo = new TempoBar();
  tempo.begin()
});