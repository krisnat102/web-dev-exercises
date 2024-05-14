//document.getElementsByTagName("button")[0].addEventListener("click", bnClick);
var buttons = document.getElementsByTagName("button");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", function(){
        playSound(this.innerHTML);

        buttonAnimation(this.innerHTML);
    });
})

document.addEventListener("keydown", function(event){
    playSound(event.key);

    buttonAnimation(event.key);
})

function playSound(letter){
    switch (letter){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            break;
        case "l":
            var audio = new Audio("sounds/crash.mp3");
            break;
        default:
            console.log(letter);
    }

    audio.play();

    var audio = new Audio("sounds/tom-1.mp3");
}

function buttonAnimation(currentKey) {
    var button = document.querySelector("." + currentKey);

    button.classList.add("pressed");

    setTimeout(function() {
        button.classList.remove("pressed");
    }, 150);
}

