import { Recette } from "./class/recette.js";
import { Filter } from "./class/filter.js";

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

console.log(recipes)