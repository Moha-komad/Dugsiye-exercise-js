//  const car = {
//      make: "Toyota",
//      model: "Corolla",
//      year: 2023,

// }
// console.log(car.model);
// console.log(car.year);
// console.log(car.make);

// console.log("exercise 9 wakan method lgu darayo")
//full code 8+9 exercise 8+9
// Create an object named car
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2023,

  // Add a method 
  start: function () {
    console.log("The car has started");
  }
};

// Log each property to the console
console.log("Make:", car.make);
console.log("Model:", car.model);
console.log("Year:", car.year);

// Call the start method
car.start();