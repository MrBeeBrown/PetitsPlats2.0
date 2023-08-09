import { Recette } from "./class/Recette.js";
import { Ustensils } from "./class/Ustensils.js";
import { Ingredients } from "./class/Ingredients.js";
import { Appareils } from "./class/Appareils.js";
import { countRecipes } from "./functions/countRecipes.js";

//Affichage du nombre de recettes
countRecipes(recipes);

//Affichage des recettes
recipes.forEach(element => {
  const ficheRecette = new Recette(element);
  ficheRecette.print();
});

//Création du filtre ustensiles
const ustensiles = new Ustensils("ustensils", recipes);
ustensiles.hydrate(recipes);
ustensiles.start();
ustensiles.addTag();

//Création du filtre ingrédients
const ingredients = new Ingredients("ingredients", recipes);
ingredients.hydrate(recipes);
ingredients.start();
ingredients.addTag();

//Création du filtre appareils
const appareils = new Appareils("appareils", recipes);
appareils.hydrate(recipes);
appareils.start();
appareils.addTag();

/* console.log(recipes); */