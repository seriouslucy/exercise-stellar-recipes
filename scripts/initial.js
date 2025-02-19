import { recipes } from "../data/recipes.js";
import { renderRecipes, handleAddToFavorites, stepsHandler, handleSearchRecipe } from "../data/recipes.js";


function setupEventListeners() {
    const recipesGrid = document.querySelector('.js-recipes-grid');
    recipesGrid.addEventListener('click', handleAddToFavorites);
    
    const searchButton = document.querySelector('.search-icon');
    searchButton.addEventListener('click', handleSearchRecipe);
};



renderRecipes(recipes);
setupEventListeners();
stepsHandler();
