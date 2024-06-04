const url = "https://api.edamam.com/api/recipes/v2";
const appId = "3bec2c69";
const appKey = "da3254f44a8b55cad3971a9c27def0ca";
const searchBar = document.getElementById("recipe-search");
const recipeCards = document.getElementById("recipe-cards");

const renderRecipeHTML = (recipeArr) => {
  let html = "";
  recipeArr.forEach((recipe) => {
    html += `
      <div class='recipe'>
        <a href="${recipe.recipe.url}">
          <img src="${recipe.recipe.images.THUMBNAIL.url}" alt="${recipe.recipe.label}" loading="lazy" width="100" height="100">
          <span class="recipe-label">${recipe.recipe.label}</span>
        </a>
      </div>
    `;
  });
  recipeCards.innerHTML = html;
};

const getQuery = () => searchBar.value;

const getRecipes = async (url, appId, appKey, query = "chicken") => {
  const response = await fetch(
    `${url}?q=${query}&app_id=${appId}&app_key=${appKey}&type=public`
  );
  if (response.ok) {
    const data = await response.json();
    renderRecipeHTML(data.hits);
  }
};

let debounceTimer;
getRecipes(url, appId, appKey);

searchBar.addEventListener("keyup", () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    getRecipes(url, appId, appKey, getQuery());
  }, 500);
});
