import { Ustensils } from "./class/Ustensils.js";
import { Ingredients } from "./class/Ingredients.js";
import { Appareils } from "./class/Appareils.js";
import { Liste } from "./class/Liste.js";


const list = new Liste(recipes);
list.display(recipes);
list.countRecipes(recipes);

//Create the ustensils filter
const ustensiles = new Ustensils(recipes, list);
list.addFilter(ustensiles);

//Create the ingredients filter
const ingredients = new Ingredients(recipes, list);
list.addFilter(ingredients);

//Create the appliance filter
const appareils = new Appareils(recipes, list);
list.addFilter(appareils);