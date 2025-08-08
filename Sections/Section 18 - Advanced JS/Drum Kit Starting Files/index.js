//document.querySelector("button").addEventListener("click", handleClick);
//attaching event listener to every button
document.querySelectorAll(".drum").forEach(function(button) {
    button.addEventListener("click", function() {
        this.style.color = "white"; 
        setTimeout(() => { this.style.color = "#DA0463"; }, 100);

        makeSound(this.innerHTML); // reuse the same function
    });
});

document.addEventListener("keydown", function(event) {
    makeSound(event.key); // detect and play sound for key press
});

function makeSound(key) {
    let sound;
    switch (key) {
        case "w": sound = new Audio("./sounds/crash.mp3"); break;
        case "a": sound = new Audio("./sounds/kick-bass.mp3"); break;
        case "s": sound = new Audio("./sounds/snare.mp3"); break;
        case "d": sound = new Audio("./sounds/tom-1.mp3"); break;
        case "j": sound = new Audio("./sounds/tom-2.mp3"); break;
        case "k": sound = new Audio("./sounds/tom-3.mp3"); break;
        case "l": sound = new Audio("./sounds/tom-4.mp3"); break;
        default: return; // ignore other keys
    }
    sound.play();
}