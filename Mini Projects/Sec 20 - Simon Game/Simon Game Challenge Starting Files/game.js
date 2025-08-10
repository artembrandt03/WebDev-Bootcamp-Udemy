// game.js

//Preparing variables
var buttonColours = ["red", "blue", "green", "yellow"]; //Array of button colors
var gamePattern = []; //Array to hold the game sequence
var userClickedPattern = []; //Array to hold the user's sequence
var started = false; //Flag to check if the game has started
var level = 0;  //Variable to track the current level

//Event listeners for starting the game
$(document).keydown(function(event) {
    if (event.code === "Space" && !started) {
        startGame();
    }
});

//Event listener for button click to start the game
$("#level-title button").click(function() {
    if (!started) {
        startGame();
    }
});

//Function to start the game
function startGame() {
    started = true;
    level = 0;
    $("#level-title").addClass("fade-out");
    $("body").addClass("game-start");

    setTimeout(function() {
        $("#level-title").remove();
        $("#footer-text").text("Round: " + level);
        nextSequence();
    }, 800);
}

//Function to generate the next sequence
function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#footer-text").text("Round: " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(150).fadeIn(150);
    playSound(randomChosenColour);
}

//Function to play sound
function playSound(color) {
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}

//Function to check the user's answer
function checkAnswer(currentIndex) {
    if (userClickedPattern[currentIndex] === gamePattern[currentIndex]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#footer-text").text("Game Over! Refresh the page to Restart");  

        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
    }
}

// Function to animate button press
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

// Event listener for color button clicks
$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);

    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
});

