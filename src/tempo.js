var Dog = function (name) {
  this.name = name;
}

Dog.prototype.woof = function () {
  console.log("woof, I am" + this.name);
};

module.exports = Dog