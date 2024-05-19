var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var startTracker = false;
var level = 0;

$(document).on("keydown", function (e) {
    if (!startTracker) {
        startTracker = true;

        nextSequence();
        $("h1").html("Level 1");
    }
})

$(".btn").on("click", function (e) {
    if (!startTracker) {
        gameOver();
        return;
    }

    var userChosenColour = e.target.id;
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    for (let i = 0; i < userClickedPattern.length; i++) {
        if (userClickedPattern[i] != gamePattern[i]) {
            gameOver();
            return;
        }
    }

    if (userClickedPattern.length === gamePattern.length) {
        userClickedPattern.length = 0;
        nextSequence();
        console.log("next level");
    }
})

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    playSound(randomChosenColor);

    $("#" + randomChosenColor).animate({ opacity: 0 }, "fast").animate({ opacity: 1 }, "fast");

    level++;
    $("h1").html("Level " + level);
}

function playSound(name) {
    var buttonNoise = new Audio('./sounds/' + name + '.mp3');
    buttonNoise.play();
}

function animatePress(currentColour) {
    var button = $("#" + currentColour);
    button.toggleClass("pressed");
    setTimeout(function () {
        button.toggleClass("pressed");
    }, 100)
}

function gameOver() {
    console.log("game over");

    var gameOverSound = new Audio("./sounds/wrong.mp3");
    gameOverSound.play();

    $("body").toggleClass("game-over");
    setTimeout(function () {
        $("body").toggleClass("game-over");
    }, 200)

    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
}

function startOver(){
    startTracker = false;
    gamePattern.length = 0;
    userClickedPattern.length = 0;
    level = 0;
}