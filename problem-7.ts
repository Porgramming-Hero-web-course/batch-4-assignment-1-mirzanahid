{
  //problem-7:

  class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    getCarAge() {
      const currentYear = new Date().getFullYear();      
      const carAge = currentYear - this.year;
      return console.log(carAge)
    }
  }
  // const car = new Car("Honda", "Civic", 2018);
  // car.getCarAge();
}
