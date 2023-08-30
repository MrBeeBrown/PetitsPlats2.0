import { Filter } from "./Filter.js";
import { sortItems } from "../functions/sortItems.js";
import { transformToLowerCase } from "../functions/transformToLowerCase.js";

export class Ingredients extends Filter {
  constructor(recipes) {
    super("ingredients", recipes);
  }

  hydrate(recipes) {
    this.listElements = [];
    recipes.forEach(element => {
      //Select all ingredients from recipes
      for (let i = 0; i < element.ingredients.length; i++) {
        const capitalized = element.ingredients[i].ingredient.charAt(0).toUpperCase() + element.ingredients[i].ingredient.slice(1).toLowerCase();
        if (!this.listElements.includes(capitalized)) this.listElements.push(capitalized);
      }
    });
  }

  filteredItems(recipes) {
    let list = [];
    this.ingredientsTags = document.querySelectorAll(".filtre_element_ingredients");
    recipes.forEach(recipe => {
      if (this.ingredientsTags.length > 0) {
        this.flag = 0;
        for (let i = 0; i < recipe.ingredients.length; i++) {
          this.listElements.push(recipe.ingredients[i].ingredient);
        }
        this.listElements = transformToLowerCase(this.listElements);
        this.ingredientsTags.forEach(e => {
          if (this.listElements.includes(e.firstElementChild.innerText.toLowerCase())) {
            this.flag++;
          }
        })


        if (!this.flag === this.ingredientsTags.length) {
          const findIndex = this.listRecipes.indexOf(recipe);
          this.listRecipes.splice(findIndex);
        }


      }
    })
    if (this.listRecipes.length === 0) this.listRecipes = this.recipes;
  }
}