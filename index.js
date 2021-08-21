const message = "Я брошу клики сам";
const button = document.querySelector("button");
const input = document.querySelector(".password");
const text_ = document.querySelector(".text") ;

let clicks = 0;
input.oninput = function () {
  clicks++;
}
button.addEventListener("click" , () => {
  if (input.value == message ) {
    if (clicks > 7) {
      text_.textContent = "Молодец.Просто отключи расширение Firefox SPEED NC";
      clicks = 0;
      setTimeout(() => {
        text_.textContent = "Текст подсказки";
      }, 3000);
    } else {
      text_.textContent = "Так сложно вводить буквами?";
    }
  }
});