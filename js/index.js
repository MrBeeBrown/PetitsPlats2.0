import { Recette } from "./recette.js";
import { ustensiles } from "../functions/ustensiles.js";
import { recipesUstensiles } from "../functions/ustensiles.js";
import { appareils } from "../functions/appareils.js";
import { ingredients } from "../functions/ingredients.js";

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

//Ajout des events pour les filtres
ustensiles();
appareils();
ingredients();

recipesUstensiles(recipes);