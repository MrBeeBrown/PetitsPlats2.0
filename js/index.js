import { Recette } from "./class/recette.js";
import { Filter } from "./class/filterMenu.js";
import { countRecipes } from "./functions/countRecipes.js";

//Affichage du nombre de recettes
countRecipes(recipes);

//Affichage des recettes
recipes.forEach(element => {
  const ficheRecette = new Recette(element);
  ficheRecette.print();
});

//Création du filtre ustensiles
const ustensiles = new Filter("ustensils", recipes);
ustensiles.hydrate(recipes, "ustensils");
ustensiles.start();
ustensiles.addTag();

/* //Création du filtre ingrédients
const ingredients = new Filter("ingredients", recipes);
ingredients.hydrate(recipes, "ingredients");
ingredients.start();
ingredients.addTag(); */