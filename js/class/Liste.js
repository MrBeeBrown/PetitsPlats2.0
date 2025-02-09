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

  display(recipes, needle) {
    //Print the recipes
    const espaceRecipes = document.querySelector('.liste_recettes');
    espaceRecipes.innerHTML = ``;
    if (recipes.length === 0) {
      document.querySelector('.not_found').innerHTML = `
        Aucune recette ne contient ‘ ${needle} ’ vous pouvez chercher « tarte aux pommes », « poisson », etc...
      `
    } else {
      document.querySelector('.not_found').innerHTML = ``
      recipes.forEach(element => {
        const ficheRecette = new Recette(element);
        ficheRecette.print();
      });
    }
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
    if (this.needle.length > 2) {
      filteredRecipes = this.searchB(this.needle, filteredRecipes);
    }
    this.filters.forEach(filter => {
      filteredRecipes = filter.filteredItems(filteredRecipes);
    })
    this.display(filteredRecipes, this.needle);
    this.filters.forEach(filter => {
      filter.hydrate(filteredRecipes);
      filter.displayFilter();
    })
    this.countRecipes(filteredRecipes);
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