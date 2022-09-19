// Use the countries array to display all the countries. See the design

const wrapper = document.querySelector(".countries-wrapper");
wrapper.style.width = "700px";
wrapper.style.display = "flex";
wrapper.style.flexWrap = "wrap";
wrapper.style.margin = "0 auto";

for (let i = 0; i < countries.length; i++) {
  let country = wrapper.appendChild(document.createElement("div"));
  country.style.width = `calc((100% / 6) - (5px * 2))`;
  country.style.aspectRatio = "1/1";
  country.style.color = "black";
  country.style.margin = "2.5px";
  country.style.padding = "5px";
  country.style.boxSizing = "border-box";
  country.style.borderRadius = "4px";
  country.style.boxShadow = "0 0 20px rgba(128 128 128 / 17%)";
  country.style.fontSize = "10px";
  country.style.fontFamily = "arial";
  country.style.fontWeight = "bold";
  country.style.lineHeight = "1.2";
  country.style.display = "flex";
  country.style.justifyContent = "center";
  country.style.alignItems = "center";
  country.style.textAlign = "center";
  country.style.backgroundColor = "white";
  country.style.border = "2px solid #8080802b";

  country.textContent = countries[i].toUpperCase();
}
