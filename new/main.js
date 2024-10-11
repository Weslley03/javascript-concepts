function Animal(type) {
  this.type = type;
};

Animal.prototype.speak = function() {
  console.log(`${this.type} spekando`);
};

const bidu = new Animal('cat');

console.log(bidu)

bidu.type = 'cachorrão';

console.log(bidu)

