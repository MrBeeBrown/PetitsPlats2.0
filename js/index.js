import { Recette } from "./class/Recette.js";
import { Ustensils } from "./class/Ustensils.js";
import { Ingredients } from "./class/Ingredients.js";
import { Appareils } from "./class/Appareils.js";
import { countRecipes } from "./functions/countRecipes.js";
import { hydrateAllFilter } from "./functions/hydrateAllFilter.js";

//Print the recipes
recipes.forEach(element => {
  const ficheRecette = new Recette(element);
  ficheRecette.print();
});

//Count and print number of recipes
countRecipes(recipes);

//Create the ustensils filter
const ustensiles = new Ustensils("ustensils", recipes);
ustensiles.start();

//Create the ingredients filter
const ingredients = new Ingredients("ingredients", recipes);
ingredients.start();

//Create the appliance filter
/* const appareils = new Appareils("appareils", recipes);
appareils.start(); */

//Hydrate all filter
hydrateAllFilter(recipes);

//Active research in filter
ustensiles.filter();
ingredients.filter();
/* appareils.filter(); */

//Active the AddTag elements
ustensiles.tagItem();
ingredients.tagItem();
/* appareils.tagItem(); */

/* console.log(recipes); */