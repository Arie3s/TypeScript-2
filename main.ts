abstract class Vehicle {
    private _make: string;
    private _model: string;
    private _year: number;
    private _rented: boolean;
  
    constructor(make: string, model: string, year: number, rented: boolean = false) {
      this._make = make;
      this._model = model;
      this._year = year;
      this._rented = rented;
    }
  
    get make(): string {
      return this._make;
    }
  
    get model(): string {
      return this._model;
    }
  
    get year(): number {
      return this._year;
    }
  
    get rented(): boolean {
      return this._rented;
    }
  
    set rented(value: boolean) {
      this._rented = value;
    }
  
    abstract rentalRate(): number;
  
    rent(): string {
      if (this._rented) {
        return `Sorry, the ${this._make} ${this._model} is already rented.`;
      } else {
        this._rented = true;
        return `You have rented the ${this._make} ${this._model}.`;
      }
    }
  
    returnVehicle(): string {
      if (this._rented) {
        this._rented = false;
        return `Thank you for returning the ${this._make} ${this._model}.`;
      } else {
        return `The ${this._make} ${this._model} has not been rented yet.`;
      }
    }
  }
  
  class Car extends Vehicle {
    private _numSeats: number;
  
    constructor(make: string, model: string, year: number, numSeats: number, rented: boolean = false) {
      super(make, model, year, rented);
      this._numSeats = numSeats;
    }
  
    get numSeats(): number {
      return this._numSeats;
    }
  
    rentalRate(): number {
      // Calculation of rental rate for car
      return 50;
    }
  }
  
  class Truck extends Vehicle {
    private _cargoCapacity: number;
  
    constructor(make: string, model: string, year: number, cargoCapacity: number, rented: boolean = false) {
      super(make, model, year, rented);
      this._cargoCapacity = cargoCapacity;
    }
  
    get cargoCapacity(): number {
      return this._cargoCapacity;
    }
  
    rentalRate(): number {
      // Calculation of rental rate for truck
      return 100;
    }
  }
  
  class Motorcycle extends Vehicle {
    private _engineCapacity: number;
  
    constructor(make: string, model: string, year: number, engineCapacity: number, rented: boolean = false) {
      super(make, model, year, rented);
      this._engineCapacity = engineCapacity;
    }
  
    get engineCapacity(): number {
      return this._engineCapacity;
    }
  
    rentalRate(): number {
      // Calculation of rental rate for motorcycle
      return 30;
    }
  }
  
 
  const car = new Car("Toyota", "Corolla", 2020, 5);
  console.log(car.rent()); 
  console.log(car.rent());
  console.log(car.returnVehicle()); 
  console.log(car.returnVehicle());
  
  const truck = new Truck("Ford", "F-150", 2018, 1500);
  console.log(truck.rent());
  console.log(truck.returnVehicle());
  