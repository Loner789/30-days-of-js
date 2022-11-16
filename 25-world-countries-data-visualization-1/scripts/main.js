// Visualize the ten most populated countries and the ten most spoken languages in the world using DOM(HTML, CSS, JS).

// Constants:
const countries = JSON.parse(JSON.stringify(countries_data));
const container = document.querySelector(".graphs");
const graphInfo = document.querySelector('.graph-title');
const populationButton = document.querySelector('.population');
const languagesButton = document.querySelector('.languages');
const worldPopulation = countries.reduce((prev, cur) => {
  return prev + cur.population
}, 0);

// Functions:
const numberWithComas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

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
    .querySelector("#graph")
    .content.querySelector(".graph-wrapper")
    .cloneNode(true);

  graph.querySelector(".text").textContent = country;
  graph.querySelector(".numbers").textContent = numberWithComas(population);
  graph.querySelector(".span").style.width = `${Math.floor(population / (worldPopulation / 100))}%`;

  return graph;
};

const createLanguagesGraph = (obj) => {
  const { language, count } = obj;
  const allLanguages = mostSpokenLanguages(countries).length;
  const graph = document
    .querySelector("#graph")
    .content.querySelector(".graph-wrapper")
    .cloneNode(true);

  graph.querySelector(".text").textContent = language;
  graph.querySelector(".numbers").textContent = count;
  graph.querySelector(".span").style.width = `${Math.floor(count / (allLanguages / 100))}%`;

  return graph;
};

const renderGraph = (element, node) => {
  node.append(element);
};

const showPopulationInfo = () => {
  graphInfo.textContent = '10 Most populated countries in the world';
  container.innerHTML = '';
  renderGraph(createPopulationGraph({ country: 'World', population: worldPopulation }), container);
  mostPopulatedCountries(countries, 10).forEach((item) => {
    renderGraph(createPopulationGraph(item), container);
  });
}

const showLunguagesInfo = () => {
  graphInfo.textContent = '10 Most Spoken languages in the world';
  container.innerHTML = '';
  mostSpokenLanguages(countries, 10).forEach((item) => {
    renderGraph(createLanguagesGraph(item), container);
  });
}

// Event listeners:
populationButton.addEventListener('click', showPopulationInfo);
languagesButton.addEventListener('click', showLunguagesInfo);