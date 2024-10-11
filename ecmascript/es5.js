
/**
 * 
 * @param {string} type 
 */
function Animal(type) {
  this.type = type;  
};  

Animal.prototype.speak = function() {
  console.log(`im a ${this.type}`);
};

/**
 * 
 * @param {string} name 
 */
function Dog(name) {
  Animal.call(this, 'cachorrão');
  this.name = name; 
};

Dog.prototype = Object.create(Animal.prototype);

const weslley = new Dog('latera');
console.log(weslley)
weslley.speak();