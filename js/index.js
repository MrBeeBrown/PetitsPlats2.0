import { Recette } from "./class/recette.js";
import { Filter } from "./class/filter.js";
import { countRecipes } from "./functions/countRecipes.js";

//Affichage du nombre de recettes
countRecipes(recipes);

//Affichage des recettes
recipes.forEach(element => {
  const ficheRecette = new Recette(element);
  ficheRecette.print();
});

const ustensiles = new Filter("ustensils");
ustensiles.hide();
ustensiles.show();
ustensiles.hydrate(recipes);
ustensiles.select();

/* console.log(recipes) */