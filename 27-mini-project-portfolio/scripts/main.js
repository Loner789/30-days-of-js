// Create resume using HTML, CSS, and JavaScript.

// Constants:
const roleText = document.querySelector(".header__roles-text");
const roleImage = document.querySelector(".header__roles-image");
const cardsContainer = document.querySelector(".cards");
const descriptionSpan = document.querySelector(".description__technologies-span");

// Functions:
const crateCard = ({ challenge }) => {
  const cardElement = document
    .querySelector("#card-template")
    .content.querySelector(".card")
    .cloneNode(true);

  cardElement.querySelector(".card__text").textContent = challenge;

  return cardElement;
};

const renderCard = (card, container) => {
  container.append(card);
};

const hexacolorGenerator = () => {
  let res = "",
    chars = "abcde0123456789";

  for (let i = 0; i < 6; i++) {
    res += chars[Math.floor(Math.random() * chars.length)];
  }

  return `#${res}`;
};

const setTechnologyByInterval = (array) => {
  let count = 1;

  setInterval(() => {
    descriptionSpan.textContent = array[count];
    descriptionSpan.style.color = hexacolorGenerator();
    count === array.length - 1 ? (count = 0) : (count += 1);
  }, 4000);
};

const setRoleByInterval = (array) => {
  let count = 1;

  setInterval(() => {
    roleText.textContent = array[count].text;
    roleImage.textContent = array[count].img;
    count === array.length - 1 ? (count = 0) : (count += 1);
  }, 4000);
};

challenges.forEach((element) => renderCard(crateCard(element), cardsContainer));
setTechnologyByInterval(technologies);
setRoleByInterval(roles);
