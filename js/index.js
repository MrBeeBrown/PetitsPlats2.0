import { Recette } from "./class/Recette.js";
import { Ustensils } from "./class/Ustensils.js";
import { Ingredients } from "./class/Ingredients.js";
import { Appareils } from "./class/Appareils.js";
import { countRecipes } from "./functions/countRecipes.js";
import { Liste } from "./class/Liste.js";


const list = new Liste(recipes);
list.displayRecipes(recipes);
list.countRecipes(recipes);

//Create the ustensils filter
const ustensiles = new Ustensils(recipes);
list.filter(ustensiles, recipes);

/* //Create the ingredients filter
const ingredients = new ingredients(recipes);
list.filter(ingredients, recipes); */

/* //Create the appliance filter
const appareils = new appareils(recipes);
list.filter(appareils, recipes); */

export function printRecipes(newRecipes) {
  //Print the recipes by selected tag
  const espaceRecipes = document.querySelector('.liste_recettes');
  espaceRecipes.innerHTML = ``;
  newRecipes.forEach(item => {
    const ficheRecette = new Recette(item);
    ficheRecette.print();
  })
  ustensiles.hydrate(newRecipes);
  /* ingredients.hydrate(newRecipes); */
  /* appareils.hydrate(newRecipes); */
  countRecipes(newRecipes);
}