// Create the project using HTML, CSS, and JavaScript.

// Constants:
const container = document.querySelector(".items");
const submitButton = document.querySelector(".form__submit");
const firstName = document.querySelector("input[name='first-name']");
const lastName = document.querySelector("input[name='last-name']");
const country = document.querySelector("input[name='country']");
const score = document.querySelector("input[name='score']");
const span = document.querySelector(".span");

// Functions:
const getDate = () => {
  const date = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let hours = date.getHours();
  let mins = date.getMinutes();

  if (day < 10) {
    day = "0" + day;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }

  return `${months[month]} ${day}, ${year} ${hours}:${mins}`;
};

const updateItemsList = (container) => {
  container.innerHTML = "";
  sortData(initialData).forEach((item) =>
    renderItem(createItem(item), container)
  );
};

const deleteItem = (e) => {
  const element = initialData.findIndex(
    (item) =>
      `${item.firstName} ${item.lastName}` ===
      e.target.closest(".item").querySelector(".name").textContent
  );

  initialData.splice(element, 1);
  updateItemsList(container);
};

const addPoints = (e) => {
  let currentScore = e.target
    .closest(".item")
    .querySelector(".score").textContent;
  const newScore = parseInt(currentScore) + 5;
  const element = initialData.find(
    (item) =>
      `${item.firstName} ${item.lastName}` ===
      e.target.closest(".item").querySelector(".name").textContent
  );

  element.score = newScore;
  updateItemsList(container);
};

const removePoints = (e) => {
  let currentScore = e.target
    .closest(".item")
    .querySelector(".score").textContent;
  const newScore = parseInt(currentScore) - 5;
  const element = initialData.find(
    (item) =>
      `${item.firstName} ${item.lastName}` ===
      e.target.closest(".item").querySelector(".name").textContent
  );

  element.score = newScore;
  updateItemsList(container);
};

const createItem = (element) => {
  const { firstName, lastName, country, score } = element;
  const item = document
    .querySelector("#item-template")
    .content.querySelector(".item")
    .cloneNode(true);
  const deleteButton = item.querySelector(".delete-button");
  const addPointsButton = item.querySelector(".add-points-button");
  const removePointsButton = item.querySelector(".remove-points-button");

  item.querySelector(".name").textContent = `${firstName} ${lastName}`;
  item.querySelector(".date").textContent = getDate();
  item.querySelector(".country").textContent = country;
  item.querySelector(".score").textContent = score;

  deleteButton.addEventListener("click", deleteItem);
  addPointsButton.addEventListener("click", addPoints);
  removePointsButton.addEventListener("click", removePoints);

  return item;
};

const renderItem = (item, container) => {
  container.append(item);
};

const createNewPlayer = (array) => {
  const element = {
    firstName: firstName.value,
    lastName: lastName.value,
    country: country.value,
    score: score.value,
  };

  array.push(element);
};

const addNewPlayer = () => {
  if (!firstName.value || !lastName.value || !country.value || !score.value) {
    span.textContent = "All fields are required";
  } else {
    span.textContent = "";
    createNewPlayer(initialData);
    updateItemsList(container);
  }
};

const sortData = (array) => array.sort((a, b) => b.score - a.score);

sortData(initialData).forEach((item) =>
  renderItem(createItem(item), container)
);

// Event listeners:
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  addNewPlayer();
});
