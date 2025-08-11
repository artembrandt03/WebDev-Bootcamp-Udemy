// game.js

// Preparing variables
var buttonColours = ["red", "blue", "green", "yellow"]; // Array of button colors
var gamePattern = []; // Array to hold the game sequence
var userClickedPattern = []; // Array to hold the user's sequence
var started = false; // Flag to check if the game has started
var level = 0;  // Variable to track the current level

// Event listeners for starting the game
$(document).keydown(function(event) {
    if (event.code === "Space" && !started) {
        startGame();
    }
});

// Event listener for button click to start the game
$("#level-title button").click(function() {
    if (!started) {
        startGame();
    }
});

// Function to start the game
function startGame() {
    started = true;
    level = 0;
    $("#level-title").addClass("fade-out");
    $("body").addClass("game-start");

    setTimeout(function() {
        $("#level-title").remove();
        $("#footer-text").text("Round: " + level);
        nextSequence();
        enableUserClicks(); // Enable button clicks after first sequence
    }, 800);
}

// Function to generate the next sequence
function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#footer-text").text("Round: " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    // Play the full sequence
    playSequence();
}

// Function to play sound
function playSound(color) {
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}

// Function to animate button press
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

// Function to play the entire game pattern sequence with delays
function playSequence() {
    // Disable clicking during playback
    $(".btn").off("click");

    gamePattern.forEach(function(color, index) {
        setTimeout(function() {
            $("#" + color).fadeOut(150).fadeIn(150);
            playSound(color);

            // When last in sequence, re-enable clicks
            if (index === gamePattern.length - 1) {
                setTimeout(function() {
                    enableUserClicks();
                }, 300); // slight delay after last flash
            }
        }, 600 * index); // 600ms delay between flashes
    });
}

// Function to enable user button clicks
function enableUserClicks() {
    $(".btn").off("click").on("click", function() {
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);

        animatePress(userChosenColour);

        checkAnswer(userClickedPattern.length - 1);
    });
}

// Function to check the user's answer
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
        $("#footer-text").html(
            "Game Over!<br><br>" +
            "Score: " + (level - 1) + "<br><br>" +
            "Refresh the page to Restart"
          );  
    }
}