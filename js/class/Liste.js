import { Recette } from "./Recette.js";

export class Liste {
  constructor(recipes) {
    this.all = recipes;
    this.filters = [];
    document.querySelector('#recherche').addEventListener('input', (e) => {
      const needle = e.target.value.toLowerCase();
      this.filter(needle);
    })
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

  filter(needle = null) {
    let filteredRecipes = this.all;
    if (needle) {
      /* filteredRecipes = this.searchA(needle, filteredRecipes); */
      filteredRecipes = this.searchB(needle, filteredRecipes);
    }
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

  searchA(needle, recipes) {
    let needleRecipes = [];
    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].name.toLowerCase().includes(needle)) {
        needleRecipes.push(recipes[i]);
      }
      else if (recipes[i].description.toLowerCase().includes(needle)) {
        needleRecipes.push(recipes[i]);
      } else {
        for (let j = 0; j < recipes[i].ingredients.length; j++) {
          if (recipes[i].ingredients[j].ingredient.toLowerCase().includes(needle)) {
            needleRecipes.push(recipes[i]);
          }
        }
      }
    }
    return needleRecipes;
  }

  searchB(needle, recipes) {
    let needleRecipes = [];
    recipes.forEach(recipe => {
      if (recipe.name.toLowerCase().includes(needle)) {
        needleRecipes.push(recipe);
      }
      else if (recipe.description.toLowerCase().includes(needle)) {
        needleRecipes.push(recipe);
      } else {
        for (let j = 0; j < recipe.ingredients.length; j++) {
          if (recipe.ingredients[j].ingredient.toLowerCase().includes(needle)) {
            needleRecipes.push(recipe);
          }
        }
      }
    })
    return needleRecipes;
  }
}