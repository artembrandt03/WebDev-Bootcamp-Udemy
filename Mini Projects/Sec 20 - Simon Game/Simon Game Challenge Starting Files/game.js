var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0; // this will be the round counter

$(document).keydown(function(event) {
    if (event.code === "Space" && !started) {
        startGame();
    }
});

$("#level-title button").click(function() {
    if (!started) {
        startGame();
    }
});

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

function playSound(color) {
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
});