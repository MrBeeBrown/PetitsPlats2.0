import { Recette } from "./class/recette.js";
import { Filter } from "./class/filter.js";
import { showRecipes } from "./functions/showRecipes.js";

//Affichage du nombre de recettes
showRecipes(recipes);

//Affichage des recettes
recipes.forEach(element => {
  const ficheRecette = new Recette(element);
  ficheRecette.print();
});

const ustensiles = new Filter("ustensils");
ustensiles.hide();
ustensiles.show();
ustensiles.hydrate(recipes);
ustensiles.search();

console.log(recipes)