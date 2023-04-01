var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year, rented) {
        if (rented === void 0) { rented = false; }
        this._make = make;
        this._model = model;
        this._year = year;
        this._rented = rented;
    }
    Object.defineProperty(Vehicle.prototype, "make", {
        get: function () {
            return this._make;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "year", {
        get: function () {
            return this._year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "rented", {
        get: function () {
            return this._rented;
        },
        set: function (value) {
            this._rented = value;
        },
        enumerable: false,
        configurable: true
    });
    Vehicle.prototype.rent = function () {
        if (this._rented) {
            return "Sorry, the ".concat(this._make, " ").concat(this._model, " is already rented.");
        }
        else {
            this._rented = true;
            return "You have rented the ".concat(this._make, " ").concat(this._model, ".");
        }
    };
    Vehicle.prototype.returnVehicle = function () {
        if (this._rented) {
            this._rented = false;
            return "Thank you for returning the ".concat(this._make, " ").concat(this._model, ".");
        }
        else {
            return "The ".concat(this._make, " ").concat(this._model, " has not been rented yet.");
        }
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year, numSeats, rented) {
        if (rented === void 0) { rented = false; }
        var _this = _super.call(this, make, model, year, rented) || this;
        _this._numSeats = numSeats;
        return _this;
    }
    Object.defineProperty(Car.prototype, "numSeats", {
        get: function () {
            return this._numSeats;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.rentalRate = function () {
        // Calculation of rental rate for car
        return 50;
    };
    return Car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(make, model, year, cargoCapacity, rented) {
        if (rented === void 0) { rented = false; }
        var _this = _super.call(this, make, model, year, rented) || this;
        _this._cargoCapacity = cargoCapacity;
        return _this;
    }
    Object.defineProperty(Truck.prototype, "cargoCapacity", {
        get: function () {
            return this._cargoCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Truck.prototype.rentalRate = function () {
        // Calculation of rental rate for truck
        return 100;
    };
    return Truck;
}(Vehicle));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(make, model, year, engineCapacity, rented) {
        if (rented === void 0) { rented = false; }
        var _this = _super.call(this, make, model, year, rented) || this;
        _this._engineCapacity = engineCapacity;
        return _this;
    }
    Object.defineProperty(Motorcycle.prototype, "engineCapacity", {
        get: function () {
            return this._engineCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Motorcycle.prototype.rentalRate = function () {
        // Calculation of rental rate for motorcycle
        return 30;
    };
    return Motorcycle;
}(Vehicle));
var car = new Car("Toyota", "Corolla", 2020, 5);
console.log(car.rent());
console.log(car.rent());
console.log(car.returnVehicle());
console.log(car.returnVehicle());
var truck = new Truck("Ford", "F-150", 2018, 1500);
console.log(truck.rent());
console.log(truck.returnVehicle());
