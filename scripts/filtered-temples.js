// Assign all temple objects to array.
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-daylight-1416668-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Bountiful Utah Temple",
    location: "Bountiful, Utah",
    dedicated: "1995, January, 8",
    area: 104000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x250/bountiful-temple-lds-1059079-wallpaper.jpg",
  },
  {
    templeName: "Oquirrh Mountain Utah Temple",
    location: "South Jordan, Utah",
    dedicated: "2009, August, 21",
    area: 60000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oquirrh-mountain-utah/400x250/oquirrh-mountain-utah-temple-1110597-wallpaper.jpg",
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/1-Rome-Temple-2160936.jpg",
  },
];

// Render all temple cards inside the HTML temple container.
const renderTemples = (templeArr) => {
  const templeContainer = document.getElementById("temples");
  let templeCards = "";
  templeArr.forEach((temple) => {
    templeCards += `
    <section class="temple-card">
      <h2>${temple.templeName}</h2>
      <ul class="temple-info">
        <li><b>Location:</b> ${temple.location}</li>
        <li><b>Dedicated:</b> ${temple.dedicated}</li>
        <li><b>Size:</b> ${temple.area} sq feet</li>
      </ul>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="300" height="188">
    </section>
    `;
  });
  // Render in html.
  templeContainer.innerHTML = templeCards;
};

// Return array of temples built before 1900.
const filterOldTemples = (temples) =>
  temples.filter((temple) => new Date(temple.dedicated).getFullYear() < 1900);

// Return array of temples built after 2000.
const filterNewTemples = (temples) =>
  temples.filter((temple) => new Date(temple.dedicated).getFullYear() > 2000);

// Return array of temples larger than 90000 sq feet.
const filterLargeTemples = (temples) =>
  temples.filter((temple) => temple.area > 90000);

// Return array of temples smaller than 10000 sq feet.
const filterSmallTemples = (temples) =>
  temples.filter((temple) => temple.area < 10000);

// Caching the DOM.
const navigationBar = document.getElementById("navigation");
const filterTitle = document.getElementById("filter-title");

navigationBar.addEventListener("click", (event) => {
  const target = event.target;
  event.preventDefault();

  switch (target.id) {
    case "home":
      filterTitle.textContent = "Home";
      renderTemples(temples);
      break;
    case "old":
      filterTitle.textContent = "Old";
      const oldTemples = filterOldTemples(temples);
      renderTemples(oldTemples);
      break;
    case "new":
      filterTitle.textContent = "New";
      const newTemples = filterNewTemples(temples);
      renderTemples(newTemples);
      break;
    case "large":
      filterTitle.textContent = "Large";
      const largeTemples = filterLargeTemples(temples);
      renderTemples(largeTemples);
      break;
    case "small":
      filterTitle.textContent = "Small";
      const smallTemples = filterSmallTemples(temples);
      renderTemples(smallTemples);
      break;
  }
});

renderTemples(temples);
