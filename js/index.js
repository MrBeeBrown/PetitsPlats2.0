import { Recette } from "./recette.js";

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
  console.log(recipes);
});
