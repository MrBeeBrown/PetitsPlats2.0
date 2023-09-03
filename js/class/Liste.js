import { Recette } from "./Recette.js";

export class Liste {
  constructor(recipes) {
    this.all = recipes;
    this.filters = [];
  }

  display(recipes) {
    //Print the recipes
    const espaceRecipes = document.querySelector('.liste_recettes');
    espaceRecipes.innerHTML = ``;
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

  addFilter(filter) {
    this.filters.push(filter);
    filter.start();
    filter.hydrate(this.all);
    filter.displayFilter();
  }

  filter() {
    let filteredRecipes = this.all;
    this.filters.forEach(filter => {
      filteredRecipes = filter.filteredItems(filteredRecipes);
    })
    this.display(filteredRecipes);
    this.filters.forEach(filter => {
      filter.hydrate(filteredRecipes);
      filter.displayFilter();
    })
    this.countRecipes(filteredRecipes);
  }
}