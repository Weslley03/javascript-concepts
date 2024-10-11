const animal = {
  type: 'Animal',
  speak() {
    console.log(`${this.type} spekando`);
  },
};

const bidu = Object.create(animal, {
  type: { value: 'cachorrão', writable: true, configurable: true, enumerable: true },
  age: { value: 20, writable: false,  configurable: false, enumerable: true },
  walking: {
    value: function() {
      console.log(`${this.type} walking`); 
    },
    writable: true,
    configurable: true,
    enumerable: true,
  }
});

/*
const alterAnimalproto = Object.getPrototypeOf(bidu);
alterAnimalproto.type = 'cachorrão'; 

alterAnimalproto.walking = function() {
  console.log(`${this.type} walking`);
} */ 

bidu.walking();
bidu.speak();
console.log(bidu.age)