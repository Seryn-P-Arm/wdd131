// myInfo = {
//     name: "Brother T",
//     photo: "images/photo.png",
//     favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
//     hobbies: ["Reading", "Fishing", "Camping"],
//     placesLived: [
//         {
//             place: "Rexburg, ID",
//             length: "5 years",
//         },
//         {
//           place: "Ammon, ID",
//           length: "3 years",
//         },
//         {
//           place: "Sandy, UT",
//           length: "1 year",
//         },
//     ],
// };

// const foodsElement = document.querySelector("#favorite-foods");
// const placesElement = document.querySelector("#places-lived");
// // requires a list, and a callback that will produce an html string for each item in the list
// // returns a string of html
// function generateListMarkup(list, templateCallback) {
//   const htmlList = list.map(templateCallback);
//   return htmlList.join("");
// }
// // requires an food string
// // returns that string embedded in HTML markup
// function foodsTemplate(food) {
//   return `<li>${food}</li>`;
// }

// // requires an place string
// // returns that string embedded in HTML markup
// function placesTemplate(place) {
//   return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
// }

// foodsElement.innerHTML = generateListMarkup(myInfo.favoriteFoods, foodsTemplate);
// placesElement.innerHTML = generateListMarkup(myInfo.placesLived, placesTemplate);



// JS DOM activities practice
const article = document.querySelector("article");

// manipulating elements and style and attributes in html
article.innerHTML = "innerHTML supports <strong>HTML</strong> tags. The textContent property does not.";
article.style.textAlign = "right";
article.setAttribute("class", "acive");
// or more preferred
articleElement.classList.add("active");

// creates p element and stores in variable
const paragraph = document.createElement("p");

// append an element with additional content or elements at the end of the element
article.appendChild(paragraph);
article.append(paragraph, "Hello World Addition!");

// remove an element from the document
article.removeChild(paragraph);
article.remove();