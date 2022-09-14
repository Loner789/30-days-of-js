const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

// ### Exercises: Level 1

// 1. Read the countries API using fetch and print the name of country, capital, languages, population and area.
fetch(countriesAPI)
  .then((res) => res.json())
  .then((data) =>
    data.forEach((item) => {
      console.log(
        item.name,
        item.capital,
        item.languages,
        item.population,
        item.area
      );
    })
  )
  .catch((err) => console.log(err));

// const printCountriesData = async () => {
//   try {
//     const res = await fetch(countriesAPI);
//     const data = await res.json();
//     data.forEach((item) => {
//       console.log(
//         item.name,
//         item.capital,
//         item.languages,
//         item.population,
//         item.area
//       );
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// printCountriesData();

// ### Exercises: Level 2

// 1. Print out all the cat names in to catNames variable.
const catNames = [];

fetch(catsAPI)
  .then((res) => res.json())
  .then((data) => data.forEach((item) => catNames.push(item.name)))
  .catch((err) => console.log(err));

console.log(catNames);

// const catNames = [];
// const cats = async () => {
//   try {
//     const res = await fetch(catsAPI);
//     const data = await res.json();
//     data.forEach((item) => {
//       catNames.push(item.name);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// cats();

// console.log(catNames);

// ### Exercises: Level 3

// 1. Read the cats api and find the average weight of cat in metric unit.
const catsWeight = [];

fetch(catsAPI)
  .then((res) => res.json())
  .then((data) =>
    data.forEach((item) =>
      catsWeight.push({ name: item.name, metricWeight: item.weight.metric })
    )
  )
  .catch((err) => console.error(err));

console.log(catsWeight);

// const catsWeight = [];
// const cats = async () => {
//   try {
//     const res = await fetch(catsAPI);
//     const data = await res.json();
//     data.forEach((item) => {
//       catsWeight.push({ name: item.name, metricWeight: item.weight.metric });
//     });
//   } catch (err) {
//     console.error(err);
//   }
// };

// cats();

// console.log(catsWeight);

// 2. Read the countries api and find out the 10 largest countries
function findLargestCountries(api, num) {
fetch(api)
  .then((res) => res.json())
  .then((data) => {
    let countriesArea = [];

    data.forEach((item) => {
      countriesArea.push({ country: item.name, area: item.area });
    });

    console.log(countriesArea.sort((a, b) => b.area - a.area).slice(0, num));
  })
  .catch((err) => console.error(err));
}

findLargestCountries(countriesAPI, 10);

// function findLargestCountries(api, num) {
//   const largestCountries = async () => {
//     try {
//       let countriesArea = [];
//       const res = await fetch(api);
//       const data = await res.json();

//       data.forEach((item) => {
//         countriesArea.push({ country: item.name, area: item.area });
//       });

//       console.log(countriesArea.sort((a, b) => b.area - a.area).slice(0, num));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   largestCountries();
// }

// findLargestCountries(countriesAPI, 10);

// 3. Read the countries api and count total number of languages in the world used as officials.
fetch(countriesAPI)
  .then((res) => res.json())
  .then((data) => {
    let langArr = [];
    data.forEach((item) => item.languages.forEach(item => langArr.push(item.name)));
    return langArr;
  })
  .then((arr) => {
    let languages = new Set(arr);
    console.log(languages.size);
  })
  .catch((err) => console.error(err));

// const totalNumberOfLanguages = async () => {
//   try {
//     const res = await fetch(countriesAPI);
//     const data = await res.json();
//     let langArr = [];

//     data.forEach((item) =>
//       item.languages.forEach((item) => langArr.push(item.name))
//     );

//     let languages = new Set(langArr);

//     console.log(languages.size);
//   } catch (err) {
//     console.error(err);
//   }
// };

// totalNumberOfLanguages();
