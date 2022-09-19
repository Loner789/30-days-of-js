// Check the requirement of this project from both images(jpg and gif). All the data and CSS
// has been implemented using JavaScript only. The data is found on starter folder project_3.
// The drop down button has been created using details HTML element.

// Constants of DOM nodes
const wrapper = document.querySelector(".wrapper");
wrapper.style.display = "flex";
wrapper.style.flexDirection = "column";
wrapper.style.alignItems = "center";
wrapper.style.fontFamily = "arial";
wrapper.style.width = "max-content";
wrapper.style.margin = "0 auto";

wrapper.innerHTML = `<h1>${
  asabenehChallenges2022.challengeTitle
} in <span class="year">${asabenehChallenges2022.challengeYear}</span></h1>
<h2>${asabenehChallenges2022.challengeSubtitle}</h2>
<p class="date"></p>
<ul></ul>`;

const year = document.querySelector(".year");
year.style.fontSize = "80px";

const strWithDescription = document.querySelector("h2");
strWithDescription.style.textDecoration = "underline";
strWithDescription.style.margin = "0";

const list = document.querySelector("ul");
list.style.listStyle = "none";
list.style.width = "100%";
list.style.margin = "0";
list.style.padding = "0";

const dateString = document.querySelector(".date");
dateString.style.padding = "10px";

for (const item of asabenehChallenges2022.challenges) {
  let listItem = document.createElement("li");
  listItem.style.display = "flex";
  listItem.style.justifyContent = "space-between";
  listItem.style.alignItems = "center";
  listItem.style.padding = "15px 30px";
  listItem.style.margin = "2px";

  let topics = item.topics.map((item) => `<p>${item}</p>`);

  listItem.innerHTML = `<p>${item.name}</p>
    <details>
    <summary>${item.name.replace("30 Days Of ", "")}</summary>
    ${topics.join("")}
    </details>
    <p>${item.status}</p>`;

  list.appendChild(listItem);
}

const listItems = list.querySelectorAll("li");

// List items styling
listItems.forEach((item) => {
  if (item.textContent.includes("Done")) {
    item.style.backgroundColor = "green";
  }
  if (item.textContent.includes("Ongoing")) {
    item.style.backgroundColor = "yellow";
  }
  if (item.textContent.includes("Coming")) {
    item.style.backgroundColor = "red";
  }
});

// Functions
function hexacolorGenerator() {
  let res = "",
    chars = "abcde0123456789";

  for (let i = 0; i < 6; i++) {
    res += chars[Math.floor(Math.random() * chars.length)];
  }

  return `#${res}`;
}

function setDate() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let fullYear = date.getUTCFullYear();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let seconds = date.getSeconds();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (day < 10) {
    day = "0" + day;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  const result = `${months[month]} ${day}, ${fullYear} ${hours}:${mins}:${seconds}`;

  dateString.textContent = result;
}

// Intervals for changing colors of DOM elements
setInterval(() => {
  year.style.color = hexacolorGenerator();
}, 1000);

setInterval(() => {
  dateString.style.backgroundColor = hexacolorGenerator();
  setDate();
}, 1000);
