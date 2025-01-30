// Get the current year
const currentYear = new Date().getFullYear();

// Update the first paragraph in the footer with the current year
document.getElementById("currentyear").textContent = currentYear;

// Get the document's last modified date
const lastModified = document.lastModified;

// Update the second paragraph in the footer with the last modified date
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

// navigation event click and toggle show
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "6 April 1893",
        area: 253000,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/92c33bcbf9cf85483e008d6871f8ced5f6d7b661/full/320%2C/0/default"
    },
    {
        templeName: "Laie Hawaii",
        location: "Laie Hawaii",
        dedicated: "27 November 1919",
        area: 47224,
        imageUrl: 
        "https://www.churchofjesuschrist.org/imgs/809f567ccf240d2f1c8e457e8c81fbd94ef96759/full/800%2C/0/default"
    },
    {
        templeName: "Bangkok Thailand",
        location: "Bangkok, Thailand",
        dedicated: "22 October 2023",
        area: 48525,
        imageUrl: 
        "https://images-us-prod.cms.commerce.dynamics.com/cms/api/fswvqbgntk/imageFileData/search?fileName=/Products%2FPI85086975%5E00147%5E%5E%5E000_000_001.png&fallback=/Products/PI85086975_000_001.jpg,/Products/PI85086975_000_001.png,/Products/PI85086975_000_001.webp&w=0&h=772&q=80&m=6&f=jpg&cropfocalregion=true"
    }
  ];

  document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");

    // Function to create temple cards
    function displayTemples(templesArray) {
        main.innerHTML = "<h2>Home</h2>"; // Clear previous content

        templesArray.forEach((temple) => {
            // Create figure
            const figure = document.createElement("figure");

            // Create image
            const img = document.createElement("img");
            img.src = temple.imageUrl;
            img.alt = temple.templeName;
            img.loading = "lazy";

            // Create figcaption with details
            const figcaption = document.createElement("figcaption");
            figcaption.innerHTML = `
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area} sq ft</p>
            `;

            // Append elements
            figure.appendChild(img);
            figure.appendChild(figcaption);
            main.appendChild(figure);
        });
    }

    // Initial display of all temples
    displayTemples(temples);

    // Function to filter temples based on category
    function filterTemples(category) {
        let filteredTemples;

        switch (category) {
            case "old":
                filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
                break;
            case "new":
                filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
                break;
            case "large":
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case "small":
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            default:
                filteredTemples = temples;
            }

            displayTemples(filteredTemples);

        }

        // Event Listeners for menu items
        document.querySelectorAll(".navigation a").forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault();

                // Remove active class from all links
                document.querySelectorAll(".navigation a").forEach(item => item.classList.remove("active"));

                // Add active class to clicked link
                event.target.classList.add("active");
                
                const category = event.target.textContent.toLowerCase();
                filterTemples(category);
            });
        });
  });