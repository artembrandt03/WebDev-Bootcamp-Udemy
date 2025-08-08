//Creating object
var houseKeeper1 = {
    name: "Artem",
    yearsOfExperience: 10,
    cleaningRepertoire: ["kitchen", "bathroom", "bedroom"],
    greet: function() {
        console.log("Hello, my name is " + this.name + " and I have " + this.yearsOfExperience + " years of experience.");
    }
}

//Constructor function
function HouseKeeper(name, yearsOfExperience, cleaningRepertoire) {
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;
    this.greet = function() {
        console.log("Hello, my name is " + this.name + " and I have " + this.yearsOfExperience + " years of experience.");
    }
}
//Creating an object using the constructor function
var houseKeeper2 = new HouseKeeper("Talon", 5, ["living room", "kitchen"]);

//Callback functions
//Function that takes a callback function as an argument
function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); // run the function that was passed in
}

function afterGreeting() {
    console.log("Nice to meet you!");
}

greet("Artem", afterGreeting);