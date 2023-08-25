import { Recette } from "./Recette.js";

export class Liste {
  constructor(recipes) {
    this.all = recipes;
  }

  displayRecipes(recipes) {
    //Print the recipes
    recipes.forEach(element => {
      const ficheRecette = new Recette(element);
      ficheRecette.print();
    });
  }

  countRecipes(recipes) {
    const nbrRecettes = document.querySelector(".nbr_recettes");
    if (recipes.length <= 1) {
      nbrRecettes.innerText = recipes.length + " " + "recette";
    } else {
      nbrRecettes.innerText = recipes.length + " " + "recettes";
    }
  }

  filter(element, recipes) {
    element.start();
    element.hydrate(recipes);
  }

  printRecipes(newRecipes) {
    //Print the recipes by selected tag
    document.querySelector('.liste_recettes').innerHTML = ``;
    this.displayRecipes(newRecipes);

    ustensiles.hydrate(newRecipes);
    /* ingredients.hydrate(newRecipes); */
    /* appareils.hydrate(newRecipes); */
    this.countRecipes(newRecipes);
  }
}