import { Recette } from "./recette.js";
import { ustensiles, recipesUstensiles, searchUstensiles } from "../functions/ustensiles.js";
import { Filter } from "./Filter.js";

//Affichage du nombre de recettes
const nbrRecettes = document.querySelector(".nbr_recettes");
if (recipes.length <= 1) {
  nbrRecettes.innerText = recipes.length + " " + "recette";
} else {
  nbrRecettes.innerText = recipes.length + " " + "recettes";
}

//Affichage des recettes
recipes.forEach(element => {
  const ficheRecette = new Recette(element);
  ficheRecette.print();
});

const ustensils = new Filter("ustensiles");
ustensils.hide();
ustensils.show();
ustensils.hydrate(recipes);

/* //Ajout des events pour les filtres
ustensiles();

//Ajout des ustensiles dans la recherche ustensiles
recipesUstensiles(recipes);

//Recherche des ustensiles
searchUstensiles(recipes); */

console.log(recipes)