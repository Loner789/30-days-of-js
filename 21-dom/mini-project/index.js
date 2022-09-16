// Develop the following application, use the following HTML elements to get started with.
// You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.
// The year color is changing every 1 second
// The date and time background color is changing every on seconds
// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red

// Constants of DOM nodes
const wrapper = document.querySelector(".wrapper");
const strWithYear = document.querySelector("h1");
const strWithDescription = document.querySelector("h2");
const list = document.querySelector("ul");
const listItems = list.querySelectorAll("li");

// Wrapper styles
wrapper.style.display = "flex";
wrapper.style.flexDirection = "column";
wrapper.style.alignItems = "center";
wrapper.style.fontFamily = "arial";
wrapper.style.width = "max-content";
wrapper.style.margin = "0 auto";
// Styles of unordered list
list.style.listStyle = "none";
list.style.width = "100%";
list.style.margin = "0";
list.style.padding = "0";
// Styles of description
strWithDescription.style.textDecoration = "underline";
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
  item.style.padding = "15px";
  item.style.margin = "2px";
});

// Changing of string with year
const strWithYearText = strWithYear.textContent;
const yearStr = strWithYearText.match(/\d+/g).toString();
const strWithoutYear = strWithYearText.replace(yearStr, "");
const newStringWithYear = `${strWithoutYear}<span class="year">${new Date().getFullYear()}</span>`;
// Insertaition of new string with year to DOM
strWithYear.innerHTML = newStringWithYear;
// Span "year" of the string with year
const year = document.querySelector(".year");
year.style.fontSize = "80px";

// New paragraph with date
let dateNode = document.createElement("p");
dateNode.style.padding = "10px";
// Insertation of date string into a DOM
wrapper.insertBefore(dateNode, wrapper.children[2]);

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

  dateNode.textContent = result;
}

// Intervals for changing colors of DOM elements
setInterval(() => {
  year.style.color = hexacolorGenerator();
}, 1000);

setInterval(() => {
  dateNode.style.backgroundColor = hexacolorGenerator();
  setDate();
}, 1000);

