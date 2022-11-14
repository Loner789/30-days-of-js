// Generating numbers and marking evens, odds and prime numbers with three different colors.
const searchForm = document.querySelector(".search");
const number = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-btn");
const wrapper = document.querySelector(".wrapper");

const printNumbers = (number) => {
  for (let i = 0; i <= number; i++) {
    let num = wrapper.appendChild(document.createElement("div"));
    num.style.width = `calc(100% / 9 - (2px * 2))`;
    num.style.height = "50px";
    num.style.color = "white";
    num.style.margin = "2px";
    num.style.fontSize = "32px";
    num.style.display = "flex";
    num.style.justifyContent = "center";
    num.style.alignItems = "center";

    num.textContent = i;

    // find prime numbers
    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && j < i) {
        break;
      } else if (j === i) {
        num.style.backgroundColor = "red";
      }
    }

    if (i % 2 === 0 && num.style.backgroundColor !== "red") {
      num.style.backgroundColor = "green";
    }
    if (i % 2 === 1 && num.style.backgroundColor !== "red") {
      num.style.backgroundColor = "yellow";
    }
  }
};

searchButton.addEventListener("click", (e) => {
  e.preventDefault();

  wrapper.innerHTML = "";
  printNumbers(number.value);
});
