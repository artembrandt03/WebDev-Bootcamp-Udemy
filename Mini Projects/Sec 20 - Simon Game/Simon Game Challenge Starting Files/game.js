//Test code to ensure the file is being loaded correctly
//alert("test");


$(document).keydown(function(event) {
    if (event.code === "Space") {
        var randomChosenColour = buttonColours[nextSequence()];
        gamePattern.push(randomChosenColour);
        console.log("Game Pattern: " + gamePattern);
        $("#" + randomChosenColour).fadeOut(150).fadeIn(150);
        playSound(randomChosenColour);
    }
});

// Array to hold the colours of the buttons
var buttonColours = ["red", "blue", "green", "yellow"];

//Array to hold the user's clicked pattern
var userClickedPattern = [];

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

//Using jQuery to add a click event listener to the buttons
$("button").click(function() {
    var userChosenColour = $(this).attr("id");
    console.log("User Chosen Colour: " + userChosenColour);
    playSound(userChosenColour);

    userClickedPattern.push(userChosenColour);
    console.log("User Clicked Pattern: " + userClickedPattern);


})
