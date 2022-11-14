// Generating the keyboard code code using even listener.
const container = document.querySelector(".container");

const showPressedKey = (e) => {
  container.innerHTML = `<div class='key-wrapper'>
  <p class='text'>You pressed <span class='key'>${e.key}</span></p>
  </div>
  <div class='key-number-wrapper'>
  <p class='key-number'>${e.keyCode}</p>
  </div>`;
};

document.addEventListener("keyup", (e) => {
  showPressedKey(e);
  console.log(e);
});
