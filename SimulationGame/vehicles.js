function Vehicle(brand,model,speed,fuelType){

    this.brand = brand;
    this.model = model;
    this.speed = speed || 0;
    this.fuelType = fuelType;
    
}

Vehicle.prototype.accelerate = function(speed){
    this.speed += speed;
    console.log(`${this.brand} ${this.model} is accelerating current speed: ${this.speed}`)

}

Vehicle.prototype.brake= function(speed){

    this.speed -= speed;

}

Vehicle.prototype.refuel = function(){

    console.log("Vehicle refueling")

}

// Vehicle.prototype.brake = function(speed){
//     this.speed -= speed;

// }

// Vehicle.prototype.refuel = function(){
//     console.log("The vehicle is refueling")
// }

function Car(brand,model,speed,fuelType,numberOfWheels){
    Vehicle.call(this,brand,model,speed,fuelType,numberOfWheels)
    
    this.numberOfWheels = numberOfWheels || 4
}

Car.prototype.honksound = function(){
    console.log("honksound")
} 

Object.setPrototypeOf(Car.prototype,Vehicle.prototype)

function Airplane(brand,model,speed,fuelType,numberOfEngine,gears){
    
    Vehicle.call(this,brand,model,speed,fuelType)
    this.numberOfEngine = numberOfEngine
    this.gears = gears

}

Airplane.prototype.TakeOff = function()
{

    console.log("Airplane Take Off")

}

Object.setPrototypeOf(Airplane.prototype,Vehicle.prototype)

let vehicle = new Vehicle("Bajaj","NS200",200,"petrol")
let car = new Car("BMW","7 Series",'155mph',"diesel",4)
let plan = new Airplane("Indigo", 1000, " BioJet fuel", 2, 500)

console.log(vehicle)

console.log(car)

console.log(plan)

car.honksound()

