// Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
// Even numbers background is green
// Odd numbers background is yellow
// Prime numbers background is red

const wrapper = document.querySelector(".wrapper");
wrapper.style.width = "800px";
wrapper.style.display = "flex";
wrapper.style.flexWrap = "wrap";
wrapper.style.margin = "0 auto";

for (let i = 0; i <= 101; i++) {
  let num = wrapper.appendChild(document.createElement("div"));
  num.style.width = `calc((100% / 6) - (2px * 2))`;
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
