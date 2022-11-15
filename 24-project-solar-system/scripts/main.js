// Develop a small application which calculate a weight of an object in a certain planet.

// Constants:
const planets = [
  { name: "Earth", value: "earth", coef: 1, src: "./images/earth.png" },
  { name: "Jupiter",value: "jupiter",coef: 2.442,src: "./images/jupiter.png" },
  { name: "Mars", value: "mars", coef: 0.378, src: "./images/mars.png" },
  { name: "Mercury",value: "mercury",coef: 0.38,src: "./images/mercury.png" },
  { name: "Moon", value: "moon", coef: 0.165, src: "./images/moon.png" },
  { name: "Neptune",value: "neptune",coef: 1.131,src: "./images/neptune.png" },
  { name: "Pluto", value: "pluto", coef: 0.063, src: "./images/pluto.png" },
  { name: "Saturn", value: "saturn", coef: 1.065, src: "./images/saturn.png" },
  { name: "Uranus", value: "uranus", coef: 0.903, src: "./images/uranus.png" },
  { name: "Venus", value: "venus", coef: 0.96, src: "./images/venus.png" },
];
const calcButton = document.querySelector(".calc-btn");
const container = document.querySelector(".flex-container");


// Functions:
const addThePlanet = (planet) => {
  const element = document.createElement("option");

  element.setAttribute.value = planet.value;
  element.textContent = planet.name;

  document.querySelector(".planet-select").appendChild(element);
};

const insertPlanetInfo = (planet, mass) => {
  if (!planet) {
    container.innerHTML = `<p class='text'>You did not choose a planet yet</p>`;
  }
  if (!mass.value) {
    container.innerHTML = `<p class='text'>Mass is required</p>`;
  }
  if (planet) {
    container.innerHTML =
    `<div class="planet-image" style="background-image: url(${planet.src})"></div>
    <div class="description">
      <p class="text">The weight of the object on <span class="text-span">${planet.name.toUpperCase()}</span></p>
      <div class="mass-wrapper">
        <p class="mass">${(mass.value * planet.coef).toFixed(2)} N</p>
      </div>
    </div>`;
  }
}

planets.forEach((item) => addThePlanet(item));


// Event listeners:
calcButton.addEventListener("click", (e) => {
  e.preventDefault();

  const selectedPlanet = document.querySelector(".planet-select").value;
  const planet = planets.find((item) => item.name === selectedPlanet);
  const mass = document.querySelector(".mass-input");

  insertPlanetInfo(planet, mass);
});
