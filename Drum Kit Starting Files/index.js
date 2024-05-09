//document.getElementsByTagName("button")[0].addEventListener("click", bnClick);
var buttons = document.getElementsByTagName("button");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", bnClick);
})

function bnClick(){
    alert("i got clicked");
}