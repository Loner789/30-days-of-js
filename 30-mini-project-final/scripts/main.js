// Create animation using (HTML, CSS, JS)
// Validate the following form using regex.

const countries = JSON.parse(JSON.stringify(countries_data));
const graphContainer = document.querySelector(".graphs");
const cardsContainer = document.querySelector(".cards");
const graphInfo = document.querySelector(".graph-title");
const populationButton = document.querySelector(".population");
const languagesButton = document.querySelector(".languages");
const worldPopulation = countries.reduce((prev, cur) => {
  return prev + cur.population;
}, 0);
const searchInput = document.querySelector(".search__input");
const nameBtn = document.querySelector(".checkbox-name");
const capitalBtn = document.querySelector(".checkbox-capital");
const populationBtn = document.querySelector(".checkbox-population");

// Functions:
const searchByName = (arr) => {
  if (!searchInput.value) return;

  const result = arr.filter((country) =>
    country.name.toLowerCase().includes(searchInput.value.toLowerCase())
  );

  return nameBtn.checked === true ? result : result.reverse();
};

const searchByCapital = (arr) => {
  if (!searchInput.value) return;

  let newArr = [];

  arr.forEach((country) => {
    if (country.capital) {
      newArr.push(country);
    }
  });

  const result = newArr
    .filter((country) =>
      country.capital.toLowerCase().includes(searchInput.value.toLowerCase())
    )
    .sort((a, b) => {
      const capitalA = a.capital.toLowerCase();
      const capitalB = b.capital.toLowerCase();

      if (capitalA < capitalB) return -1;
      if (capitalA > capitalB) return 1;
      return 0;
    });

  return capitalBtn.checked === true ? result : result.reverse();
};

const searchByPopulation = (arr) => {
  if (!searchInput.value || typeof parseInt(searchInput.value) !== "number")
    return;

  const result = arr
    .filter(
      (country) => parseInt(country.population) < parseInt(searchInput.value)
    )
    .sort((a, b) => a.population - b.population);

  return populationBtn.checked === true ? result : result.reverse();
};

const disableCheckboxes = () => {
  nameBtn.checked = false;
  nameBtn.indeterminate = true;
  capitalBtn.checked = false;
  capitalBtn.indeterminate = true;
  populationBtn.checked = false;
  populationBtn.indeterminate = true;
};

const handleSearch = (e) => {
  if (e.target.id === "name") {
    capitalBtn.checked = false;
    capitalBtn.indeterminate = true;
    populationBtn.checked = false;
    populationBtn.indeterminate = true;
    cardsContainer.innerHTML = "";
    searchByName(countries).forEach((item) =>
      renderElement(createCard(item), cardsContainer)
    );
    showFilteredCountriesPopulationInfo(searchByName(countries));
  } else if (e.target.id === "capital") {
    nameBtn.checked = false;
    nameBtn.indeterminate = true;
    populationBtn.checked = false;
    populationBtn.indeterminate = true;
    cardsContainer.innerHTML = "";
    searchByCapital(countries).forEach((item) =>
      renderElement(createCard(item), cardsContainer)
    );
    showFilteredCountriesPopulationInfo(searchByCapital(countries));
  } else if (e.target.id === "population") {
    nameBtn.checked = false;
    nameBtn.indeterminate = true;
    capitalBtn.checked = false;
    capitalBtn.indeterminate = true;
    cardsContainer.innerHTML = "";
    searchByPopulation(countries).forEach((item) =>
      renderElement(createCard(item), cardsContainer)
    );
    showFilteredCountriesPopulationInfo(searchByPopulation(countries));
  }
};

const numberWithComas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const mostPopulatedCountries = (arr, num) => {
  let newArr = [],
    obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj.country = arr[i].name;
    obj.population = arr[i].population;
    newArr.push(obj);
    obj = {};
  }

  return newArr.sort((a, b) => b.population - a.population).slice(0, num);
};

const mostSpokenLanguages = (arr, num) => {
  let newArr = [],
    obj = {},
    lang = "";

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].languages.length; j++) {
      lang = arr[i].languages[j];
      if (!newArr.some((item) => item.language === lang)) {
        obj.language = lang;
        obj.count = 1;
        newArr.push(obj);
        obj = {};
      } else {
        newArr.find((item) => item.language === lang).count++;
      }
    }
  }

  return newArr.sort((a, b) => b.count - a.count).slice(0, num);
};

const createPopulationGraph = (obj) => {
  const { country, population } = obj;
  const graph = document
    .querySelector("#graph-template")
    .content.querySelector(".graph-wrapper")
    .cloneNode(true);

  graph.querySelector(".text").textContent = country;
  graph.querySelector(".numbers").textContent = numberWithComas(population);
  graph.querySelector(".span").style.width = `${Math.floor(
    population / (worldPopulation / 100)
  )}%`;

  return graph;
};

const createLanguagesGraph = (obj, arr) => {
  const { language, count } = obj;
  const allLanguages = mostSpokenLanguages(arr).length;
  const graph = document
    .querySelector("#graph-template")
    .content.querySelector(".graph-wrapper")
    .cloneNode(true);

  graph.querySelector(".text").textContent = language;
  graph.querySelector(".numbers").textContent = count;
  graph.querySelector(".span").style.width = `${Math.floor(
    count / (allLanguages / 100)
  )}%`;

  return graph;
};

const renderElement = (element, node) => {
  node.append(element);
};

const showPopulationInfo = () => {
  const noneSearch =
    nameBtn.indeterminate === true &&
    capitalBtn.indeterminate === true &&
    populationBtn.indeterminate === true;

  if (noneSearch) {
  graphInfo.textContent = "10 Most populated countries in the world";
  graphContainer.innerHTML = "";
  renderElement(
    createPopulationGraph({ country: "World", population: worldPopulation }),
    graphContainer
  );
  mostPopulatedCountries(countries, 10).forEach((item) => {
    renderElement(createPopulationGraph(item), graphContainer);
  });
} else {
  if (nameBtn.indeterminate === false) {
    showFilteredCountriesPopulationInfo(searchByName(countries));
  }
  else if (capitalBtn.indeterminate === false) {
    showFilteredCountriesPopulationInfo(searchByCapital(countries));
  }
  else if (populationBtn.indeterminate === false) {
    showFilteredCountriesPopulationInfo(searchByPopulation(countries));
  }
}
};

const showLanguagesInfo = () => {
  const noneSearch =
  nameBtn.indeterminate === true &&
  capitalBtn.indeterminate === true &&
  populationBtn.indeterminate === true;

if (noneSearch) {
  graphInfo.textContent = "10 Most Spoken languages in the world";
  graphContainer.innerHTML = "";
  mostSpokenLanguages(countries, 10).forEach((item) => {
    renderElement(createLanguagesGraph(item, countries), graphContainer);
  });
} else {
  if (nameBtn.indeterminate === false) {
    showFilteredCountriesLanguagesInfo(searchByName(countries));
  }
  else if (capitalBtn.indeterminate === false) {
    showFilteredCountriesLanguagesInfo(searchByCapital(countries));
  }
  else if (populationBtn.indeterminate === false) {
    showFilteredCountriesLanguagesInfo(searchByPopulation(countries));
  }
}
};

const showFilteredCountriesPopulationInfo = (filteredCountries) => {
  graphInfo.textContent = "World population";
  graphContainer.innerHTML = "";
  renderElement(
    createPopulationGraph({ country: "World", population: worldPopulation }),
    graphContainer
  );

  const len = filteredCountries.length < 10 ? filteredCountries.length : 10;

  mostPopulatedCountries(filteredCountries, len).forEach(
    (item) => {
      renderElement(createPopulationGraph(item), graphContainer);
    }
  );
};

const showFilteredCountriesLanguagesInfo = (filteredCountries) => {
  graphInfo.textContent = "Most Spoken languages";
  graphContainer.innerHTML = "";

  const len = filteredCountries.length < 10 ? filteredCountries.length : 10;

  mostSpokenLanguages(filteredCountries, len).forEach(
    (item) => {
      renderElement(createLanguagesGraph(item, filteredCountries), graphContainer);
    }
  );
}

const createCard = (array) => {
  const { name, capital, languages, population, flag } = array;
  const cardElement = document
    .querySelector("#card-template")
    .content.querySelector(".card")
    .cloneNode(true);

  cardElement.querySelector(
    ".card__flag"
  ).style.backgroundImage = `url(${flag})`;
  cardElement.querySelector(".card__name").textContent = name;
  cardElement.querySelector(".card-capital").textContent = `Capital: ${
    capital ? capital : "Unknown"
  }`;
  cardElement.querySelector(
    ".card-languages"
  ).textContent = `Languages: ${languages.join(", ")}`;
  cardElement.querySelector(
    ".card-population"
  ).textContent = `Population: ${population}`;

  return cardElement;
};

disableCheckboxes();
countries.forEach((item) => renderElement(createCard(item), cardsContainer));

// Event listeners:
document.addEventListener("click", (e) => {
  handleSearch(e);
});
populationButton.addEventListener("click", showPopulationInfo);
languagesButton.addEventListener("click", showLanguagesInfo);
