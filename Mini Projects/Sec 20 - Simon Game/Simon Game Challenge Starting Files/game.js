//Test code to ensure the file is being loaded correctly
//alert("test");

// Array to hold the colours of the buttons
var buttonColours = ["red", "blue", "green", "yellow"];

//Array to hold the game pattern
var gamePattern = [];

//Creating a new pattern
function nextSequence() {
    // Generate a random number between 0 and 3
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

function playSound(color) {
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}

//Choosing a random colour & adding it to the game pattern
var randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);
console.log("Game Pattern: " + gamePattern);
$("#" + randomChosenColour).fadeOut(150).fadeIn(150);
playSound(randomChosenColour);
