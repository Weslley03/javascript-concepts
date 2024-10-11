class Animal {
  constructor(type){
    this.type = type;
  };

  speak() {
    console.log(`im a ${this.type}`);
  };
};

class Lobo extends Animal {
  constructor(name) {
    super('lobão');
    this.name = name;
  };

  uivar() {
    console.log(`im ${this.type} and my name is ${this.name}`);
  };
};

const weslley = new Lobo('weslley');

weslley.speak();
weslley.uivar();


