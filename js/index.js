import { Recette } from "./recette.js";
import { clicUstensils } from "../functions/ustensiles.js";
import { clickAppareils } from "../functions/appareils.js";
import { clickIngredients } from "../functions/ingredients.js";

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

//Ajout des events sur les boutons de filtres
clicUstensils();
clickAppareils();
clickIngredients();