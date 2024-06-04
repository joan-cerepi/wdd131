const url = "https://api.edamam.com/api/recipes/v2";
const appId = "3bec2c69";
const appKey = "da3254f44a8b55cad3971a9c27def0ca";
const main = document.querySelector(".main");

const displayRandomRecipe = (recipeArr) => {
  let html = "";
  const randomIndex = Math.floor(Math.random() * recipeArr.length);
  html = `
    <section class="recipe">
      <h1>${recipeArr[randomIndex].recipe.label}</h1>
      <figure>
        <img src="${recipeArr[randomIndex].recipe.images.REGULAR.url}" alt="${recipeArr[randomIndex].recipe.label}" loading="lazy" width="300" height="300">
        <figcaption>
          <a href="${recipeArr[randomIndex].recipe.url}" target="_blank">${recipeArr[randomIndex].recipe.label}</a>
        </figcaption>
      </figure>
    </section>
  `;
  main.innerHTML += html;
};

const displayRecipes = async (url, appId, appKey, query = "chicken") => {
  const response = await fetch(
    `${url}?q=${query}&app_id=${appId}&app_key=${appKey}&type=public`
  );
  if (response.ok) {
    const data = await response.json();
    displayRandomRecipe(data.hits);
  }
};

displayRecipes(url, appId, appKey);
