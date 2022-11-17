// Visualize the countries array.

// Constants:
const container = document.querySelector(".cards");
const searchInput = document.querySelector(".search-input");
const checkbox = document.querySelector("#reverse-btn");
const span = document.querySelector(".header__span");
const radioButtons = document.querySelectorAll("input[type='radio'][name='search-params']");

// Functions:
const createCard = (element) => {
  const cardElement = document
    .querySelector("#card-template")
    .content.querySelector(".card")
    .cloneNode(true);

  cardElement.querySelector(".card__text").textContent = element;

  return cardElement;
};

const renderCard = (element, node) => {
  node.append(element);
};

const changeSpan = (node, input, count, text) => {
  if (!input.value) {
    node.innerHTML = "";
  } else {
    node.innerHTML = `Countries ${text} <span class="header__span_letter">${input.value}</span> are <span class="header__span_number">${count}</span>.`;
  }
};

const searchByFirstLetter = (arr, node, input) => {
  let count = 0;

  node.innerHTML = "";
  arr.forEach((item) => {
    if (item.toUpperCase().startsWith(input.value.toUpperCase())) {
      renderCard(createCard(item), node);
      count += 1;
    }
  });
  changeSpan(span, searchInput, count, "start with");
};

const searchByAnyLetter = (arr, node, input) => {
  let count = 0;

  node.innerHTML = "";
  arr.forEach((item) => {
    if (item.toUpperCase().includes(input.value.toUpperCase())) {
      renderCard(createCard(item), node);
      count += 1;
    }
  });
  changeSpan(span, searchInput, count, "containing");
};

const searchCountry = (array, node) => {
  const checkedRadio = document.querySelector(
    'input[name = "search-params"]:checked'
  );
  let arr = Array.from(array);

  if (checkbox.checked  && arr.length > 1) arr = arr.reverse();
  if (!checkedRadio) return;
  if (checkedRadio.id === "first-letter-btn") {
    searchByFirstLetter(arr, node, searchInput);

    return;
  }
  if (checkedRadio.id === "any-letter-btn") {
    searchByAnyLetter(arr, node, searchInput);

    return;
  }
};

const reverseCards = (nodeList, container) => {
  if (nodeList.length > 1) {
  container.innerHTML = "";
  nodeList.forEach((item) => container.prepend(item));
}
};

countries.forEach((item) => renderCard(createCard(item), container));

// Event listeners:
searchInput.addEventListener("input", () => {
  searchCountry(countries, container);
});

checkbox.addEventListener("change", () => {
  const cardsList = document.querySelectorAll(".card");

  reverseCards(cardsList, container);
});

radioButtons.forEach((item) =>
  item.addEventListener("change", () => searchCountry(countries, container))
);
