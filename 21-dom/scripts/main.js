// ### Exercise: Level 1

// 1. Create an index.html file and put four p elements as above: Get the first paragraph by using **_document.querySelector(tagname)_** and tag name
const firstParagraph = document.querySelector("p");

console.log(firstParagraph);

// 2. Get each of the the paragraph using **_document.querySelector('#id')_** and by their id
const secondParagraph = document.querySelector("#second-paragraph");

console.log(secondParagraph);

// 3. Get all the p as nodeList using **_document.querySelectorAll(tagname)_** and by their tag name
const allParagraphs = document.querySelectorAll("p");

console.log(allParagraphs);

// 4. Loop through the nodeList and get the text content of each paragraph
const paragraphsTextContent = [];

for (const paragraph of allParagraphs) {
  paragraphsTextContent.push(paragraph.textContent);
}

console.log(paragraphsTextContent);

// 5. Set a text content to paragraph the fourth paragraph,**_Fourth Paragraph_**
const fourthParagraph = document.querySelector("#fourth-paragraph");

fourthParagraph.textContent = "Fourth Paragraph";

// 6. Set id and class attribute for all the paragraphs using different attribute setting methods
const thirdParagraph = document.querySelector("#third-paragraph");
firstParagraph.classList.add("first-paragraph");
secondParagraph.classList = "second-paragraph";
thirdParagraph.setAttribute("name", "third-paragraph");
fourthParagraph.setAttribute("class", "fourth-paragraph");

console.log(firstParagraph, secondParagraph, thirdParagraph, fourthParagraph);

// ### Exercise: Level 2

// 1. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
firstParagraph.style.color = "red";
secondParagraph.style.background = "green";
thirdParagraph.style.border = "3px solid blue";
fourthParagraph.style.fontSize = "24px";

// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
allParagraphs.forEach((item, i) => {
  if (i % 2 === 0) {
    item.style.color = "red";
  } else {
    item.style.color = "green";
  }
});

// 3. Set text content, id and class to each paragraph
allParagraphs.forEach((item, i) => {
  item.textContent = "30 Days Of JavaScript";
  item.id = `paragraph-${i}`;
  item.className = "paragraph";
});

// ### Exercise: Level 3

// #### DOM: Mini project 1

// 1. Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder.  Apply all the styles and functionality using JavaScript only.

//    - The year color is changing every 1 second
//    - The date and time background color is changing every on seconds
//    - Completed challenge has background green
//    - Ongoing challenge has background yellow
//    - Coming challenges have background red

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <title>JavaScript for Everyone:DOM</title>
//   </head>
//   <body>
//     <div class="wrapper">
//         <h1>Asabeneh Yetayeh challenges in 2020</h1>
//         <h2>30DaysOfJavaScript Challenge</h2>
//         <ul>
//             <li>30DaysOfPython Challenge Done</li>
//             <li>30DaysOfJavaScript Challenge Ongoing</li>
//             <li>30DaysOfReact Challenge Coming</li>
//             <li>30DaysOfFullStack Challenge Coming</li>
//             <li>30DaysOfDataAnalysis Challenge Coming</li>
//             <li>30DaysOfReactNative Challenge Coming</li>
//             <li>30DaysOfMachineLearning Challenge Coming</li>
//         </ul>
//     </div>
//   </body>
// </html>

// The project is in the folder "mini-project"


