const message = "Я брошу клики сам";
const button = document.querySelector("button");
const input = document.querySelector(".password");
const text = document.querySelector(".text") ;

let clicks = 0;
input.oninput = function () {
  clicks++;
}
button.addEventListener("click" , () => {
  if (input.value == message ) {
    if (clicks > 7) {
      
    } else {
      
    }
  }
});