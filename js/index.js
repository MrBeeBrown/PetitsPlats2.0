import { Recette } from "./class/recette.js";
import { Filter } from "./class/filterMenu.js";
import { countRecipes } from "./functions/countRecipes.js";
import { removeFilter } from "./functions/removeFilter.js";

//Affichage du nombre de recettes
countRecipes(recipes);

//Affichage des recettes
recipes.forEach(element => {
  const ficheRecette = new Recette(element);
  ficheRecette.print();
});

//Création du filtre ustensiles
const ustensiles = new Filter("ustensils");
ustensiles.hide();
ustensiles.show();
ustensiles.hydrate(recipes);
ustensiles.select();

//Suppression des éléments du filtre
removeFilter();