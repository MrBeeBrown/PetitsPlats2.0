import { Recette } from "./classe/recette.js";
import { Filter } from "./classe/Filter.js";

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

const ustensiles = new Filter("ustensils");
ustensiles.hide();
ustensiles.show();
ustensiles.hydrate(recipes);
ustensiles.search();

/* //Recherche des ustensiles
searchUstensiles(recipes); */

console.log(recipes)