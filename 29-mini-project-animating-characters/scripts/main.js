// Create animation using (HTML, CSS, JS)

// Constants:
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const fonts = [
  "Aldrich",
  "Lato",
  "Montserrat",
  "Nunito",
  "Oswald",
  "Raleway",
  "Roboto",
];
const fontWeights = [300, 400, 500, 600, 700];
const sentence = "30 Days Of JavaScript challenge 2020 Asabeneh Yetayeh";
const letters = sentence.split("");

// Functions:
const hexacolorGenerator = () => {
  let res = "",
    chars = "abcde0123456789";

  for (let i = 0; i < 6; i++) {
    res += chars[Math.floor(Math.random() * chars.length)];
  }

  return `#${res}`;
};

const randomizer = (array) => array[Math.floor(Math.random() * array.length)];

const createLetter = (element) => {
  const span = document.createElement("span");

  span.classList.add("letter");
  span.style.color = hexacolorGenerator();
  span.textContent = element;

  return span;
};

const renderLetter = (item, container) => {
  container.append(item);
};

const changeStyles = () => {
  container.style.background = hexacolorGenerator();
  title.style.fontWeight = randomizer(fontWeights);
  title.style.fontFamily = randomizer(fonts);
  title.innerHTML = "";
  letters.forEach((letter) => {
    renderLetter(createLetter(letter), title);
  });
};

changeStyles();

setInterval(() => changeStyles(), 4000);
