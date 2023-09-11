import { Recette } from "./Recette.js";

export class Liste {
  constructor(recipes) {
    this.all = recipes;
    this.filters = [];
    this.needle = '';
    document.querySelector('#recherche').addEventListener('input', (e) => {
      this.needle = e.target.value.toLowerCase();
      this.filter();
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

  filter() {
    let filteredRecipes = this.all;
    if (this.needle.length > 0) {
      filteredRecipes = this.searchA(needle, filteredRecipes);
      /* filteredRecipes = this.searchB(this.needle, filteredRecipes); */
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
        recipe.ingredients.forEach(ingredients => {
          if (ingredients.ingredient.toLowerCase().includes(needle)) {
            needleRecipes.push(recipe);
          }
        })
      }
    })
    return needleRecipes;
  }
}