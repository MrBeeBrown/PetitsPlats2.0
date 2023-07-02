import { Recette } from "./recette.js";

recipes.forEach(element => {
  const ficheRecette = new Recette(element);
  ficheRecette.print();
});
