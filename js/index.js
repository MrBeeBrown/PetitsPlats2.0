import { Recette } from "./recette.js";
import { ustensiles, recipesUstensiles, searchUstensiles } from "../functions/ustensiles.js";
import { appareils, recipesAppareils } from "../functions/appareils.js";
import { ingredients, recipesIngredients } from "../functions/ingredients.js";

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

//Ajout des ustensiles dans la recherche ustensiles
recipesUstensiles(recipes);

//Ajout des appareils dans la recherche appareils
recipesAppareils(recipes);

//Ajout des ingredients dans la recherche ingredients
recipesIngredients(recipes);

searchUstensiles();

console.log(recipes)