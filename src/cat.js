var Cat = function (name) {
  this.name = name;
}

Cat.prototype.meow = function () {
  console.log("meow, I am" + this.name);
};

module.exports = Cat