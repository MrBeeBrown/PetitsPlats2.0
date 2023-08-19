import { Recette } from "./class/Recette.js";
import { Ustensils } from "./class/Ustensils.js";
import { Ingredients } from "./class/Ingredients.js";
import { Appareils } from "./class/Appareils.js";
import { countRecipes } from "./functions/countRecipes.js";

//Print the recipes
recipes.forEach(element => {
  const ficheRecette = new Recette(element);
  ficheRecette.print();
});

//Count and print number of recipes
countRecipes(recipes);

//Create the ustensils filter
const ustensiles = new Ustensils(recipes);
ustensiles.start();
ustensiles.hydrate(recipes);

/* //Create the ingredients filter
const ingredients = new Ingredients(recipes);
ingredients.start();
ingredients.hydrate(recipes);

//Create the appliance filter
const appareils = new Appareils(recipes);
appareils.start();
appareils.hydrate(recipes); */

/* console.log(recipes); */