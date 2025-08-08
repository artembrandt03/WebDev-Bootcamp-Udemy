//document.querySelector("button").addEventListener("click", handleClick);
//attaching event listener to every button
document.querySelectorAll(".drum").forEach(function(button) {
    button.addEventListener("click", function() {
        this.style.color = "white"; //change text color on click
        setTimeout(() => {this.style.color = "#DA0463";}, 100) //reset text color after 100ms

        switch (this.innerHTML) {
            case "w":
                var sound = new Audio("./sounds/crash.mp3");
                break;
            case "a":
                var sound = new Audio("./sounds/kick-bass.mp3");
                break;
            case "s":
                var sound = new Audio("./sounds/snare.mp3");
                break;
            case "d":
                var sound = new Audio("./sounds/tom-1.mp3");
                break;
            case "j":
                var sound = new Audio("./sounds/tom-2.mp3");
                break;
            case "k":
                var sound = new Audio("./sounds/tom-3.mp3");
                break;
            case "l":
                var sound = new Audio("./sounds/tom-4.mp3");
                break;
        }
        sound.play();
    });
});