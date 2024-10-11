class Car {
  drive() {
    console.log('Driving...');
  }
}

class ElectricCar extends Car {
  drive() {
    super.drive();
    console.log('Using electric power...');
  }
}

const tesla = new ElectricCar();
tesla.drive();
