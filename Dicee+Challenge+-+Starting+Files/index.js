var randomNum1 = Math.ceil(Math.random() * 6);
var image1 = document.querySelector(".img1");
image1.src = "./images/dice" + randomNum1 + ".png";

var randomNum2 = Math.ceil(Math.random() * 6);
var image2 = document.querySelector(".img2");
image2.src = "./images/dice" + randomNum2 + ".png";

if (randomNum1 > randomNum2){
    document.getElementsByClassName("container")[0].firstElementChild.innerHTML = "Player 1 Wins";
}
else if(randomNum1 < randomNum2){
    document.getElementsByClassName("container")[0].firstElementChild.innerHTML = "Player 2 Wins";
}
else{
    document.getElementsByClassName("container")[0].firstElementChild.innerHTML = "Draw!";
}