export const recipes = [
  {
    id: "1",
    title: "Spaghetti Carbonara",
    image: "images/carbonara.jpg", 
    description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
    ingredients: [
      "Spaghetti",
      "Eggs",
      "Parmesan Cheese",
      "Pancetta",
      "Black Pepper"
    ],
    steps: [
      "Cook spaghetti according to package instructions.",
      "In a bowl, whisk eggs and cheese.",
      "Cook pancetta until crispy.",
      "Combine spaghetti, pancetta, and egg mixture.",
      "Serve with extra cheese and pepper."
    ]
  },
  {
    id: "2",
    title: "Avocado Toast",
    image: "images/avocadotoast.jpg",
    description: "A quick and healthy breakfast option with avocado and toast.",
    ingredients: [
      "Bread",
      "Avocado",
      "Salt",
      "Pepper",
      "Lemon Juice"
    ],
    steps: [
      "Toast the bread to your liking.",
      "Mash avocado with salt, pepper, and lemon juice.",
      "Spread avocado on toast and serve."
    ]
  },
  {
    id: "3",
    title: "Chicken Alfredo",
    image: "images/chickenalfredo.jpg",
    description: "Creamy Alfredo sauce over tender chicken and fettuccine.",
    ingredients: [
      "Fettuccine",
      "Chicken Breast",
      "Heavy Cream",
      "Parmesan Cheese",
      "Garlic",
      "Butter"
    ],
    steps: [
      "Cook fettuccine and set aside.",
      "Cook chicken until golden brown.",
      "Prepare Alfredo sauce with cream, garlic, butter, and cheese.",
      "Combine sauce with pasta and chicken.",
      "Serve hot with extra cheese."
    ]
  },
  {
    id: "4",
    title: "Caprese Salad",
    image: "images/capresesalad.jpg",
    description: "A fresh and simple Italian salad with mozzarella, tomatoes, and basil.",
    ingredients: [
      "Fresh Mozzarella",
      "Tomatoes",
      "Fresh Basil",
      "Olive Oil",
      "Balsamic Glaze",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Slice mozzarella and tomatoes.",
      "Layer slices with basil leaves.",
      "Drizzle with olive oil and balsamic glaze.",
      "Sprinkle with salt and pepper."
    ]
  },
  {
    id: "5",
    title: "Chocolate Chip Cookies",
    image: "images/cookies.jpg",
    description: "Classic cookies with gooey chocolate chips.",
    ingredients: [
      "All-Purpose Flour",
      "Butter",
      "Brown Sugar",
      "White Sugar",
      "Chocolate Chips",
      "Eggs",
      "Vanilla Extract",
      "Baking Soda",
      "Salt"
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Mix wet and dry ingredients separately.",
      "Combine ingredients and fold in chocolate chips.",
      "Scoop dough onto baking sheet.",
      "Bake for 10-12 minutes."
    ]
  },
  {
    id: "6",
    title: "Vegetable Stir Fry",
    image: "images/stirfry.jpg",
    description: "A quick and healthy vegetable stir fry with soy sauce and garlic.",
    ingredients: [
      "Broccoli",
      "Carrots",
      "Bell Peppers",
      "Snap Peas",
      "Soy Sauce",
      "Garlic",
      "Ginger",
      "Sesame Oil"
    ],
    steps: [
      "Heat sesame oil in a wok or skillet.",
      "Add garlic and ginger, sauté briefly.",
      "Add vegetables and stir fry until tender-crisp.",
      "Add soy sauce and toss to coat.",
      "Serve hot over rice or noodles."
    ]
  },
  {
    id: "7",
    title: "Margherita Pizza",
    image: "images/pizza.jpg",
    description: "Classic pizza with fresh mozzarella, basil, and tomato sauce.",
    ingredients: [
      "Pizza Dough",
      "Tomato Sauce",
      "Fresh Mozzarella",
      "Fresh Basil",
      "Olive Oil"
    ],
    steps: [
      "Preheat oven to 475°F (245°C).",
      "Roll out pizza dough.",
      "Spread tomato sauce evenly.",
      "Top with mozzarella slices and basil leaves.",
      "Bake for 10-15 minutes until golden brown."
    ]
  },
  {
    id: "8",
    title: "Beef Tacos",
    image: "images/tacos.jpg",
    description: "Flavorful beef tacos with fresh toppings.",
    ingredients: [
      "Ground Beef",
      "Taco Seasoning",
      "Taco Shells",
      "Lettuce",
      "Tomatoes",
      "Cheddar Cheese",
      "Sour Cream"
    ],
    steps: [
      "Cook ground beef with taco seasoning.",
      "Warm taco shells in the oven.",
      "Assemble tacos with beef and toppings.",
      "Serve with lime wedges."
    ]
  },
  {
    id: "9",
    title: "Lemonade",
    image: "images/lemonade.jpg",
    description: "Refreshing homemade lemonade.",
    ingredients: [
      "Lemons",
      "Sugar",
      "Water",
      "Ice"
    ],
    steps: [
      "Juice the lemons.",
      "Dissolve sugar in water to make a syrup.",
      "Mix lemon juice, syrup, and water.",
      "Serve over ice."
    ]
  },
  {
    id: "10",
    title: "Banana Pancakes",
    image: "images/bananapancakes.jpg",
    description: "Fluffy pancakes with ripe bananas.",
    ingredients: [
      "All-Purpose Flour",
      "Bananas",
      "Eggs",
      "Milk",
      "Butter",
      "Sugar",
      "Baking Powder",
      "Salt"
    ],
    steps: [
      "Mash bananas and mix with wet ingredients.",
      "Combine with dry ingredients to form batter.",
      "Cook pancakes on a griddle.",
      "Serve with syrup and butter."
    ]
  }
];


const favorites = [];

export function renderRecipes(listRecipes) {
  const recipesHTML = listRecipes
  .map((recipe) => { 
    
    
    const recipeStepsArray = recipe.steps.map((step) => {
      return `
      <li>${step}</li>
      `
    })
    
    
    return `
  <div class="recipe-container">
      <div class="recipe-image-container">
      <img class="recipe-image" src="${recipe.image}" alt="${recipe.title}" style="width:50%">
      </div>
      <div class="recipe-title">
      ${recipe.title}
      </div>
      <div class="recipe-description">
          ${recipe.description}
          </div>
      <div class="recipe-details"> 
        <div class="recipe-ingredients">   
          Ingredients: ${recipe.ingredients.join(', ')}
          </div>
          <div class="recipe-steps">
          Preparation:
          <ol>
            ${recipeStepsArray.join('')}
         </ol>
          </div>
          </div>
          <button class="add-to-favorites-button button-primary js-add-to-favorites"
          data-recipe-id="${recipe.id}">
          Add to Favourites
          </button>
          </div>
  `}).join("");

  
  const recipesGrid = document.querySelector('.js-recipes-grid');
  recipesGrid.innerHTML = recipesHTML;
}

export function stepsHandler () {
const recipeCard = document.querySelectorAll('.recipe-container')
recipeCard.forEach((div) => {
  div.addEventListener("click", () => {
    
    // div.removeAttribute('hidden');
  })
})}

export function handleAddToFavorites(event) {
   if(!event.target.classList.contains('js-add-to-favorites')) return;

    const recipeId = event.target.dataset.recipeId;
    const favoritesCount = document.getElementById('js-favorites-count');

            const alreadyFavorite = favorites.some((fav) => fav.recipeId === recipeId);
            if (!alreadyFavorite) {
                favorites.push({ recipeId });
          
                console.log('Added to favourites!')
            } else {
                console.log('Recipe is already in favourites')
            }
};

export function getFavorites() {
  return favorites;
};

export function handleSearchRecipe() {
  const searchInput = document.querySelector('.search-bar');
  const searchValue = searchInput.value.trim().toLowerCase();

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchValue)
  );

  renderRecipes(filteredRecipes);
}
