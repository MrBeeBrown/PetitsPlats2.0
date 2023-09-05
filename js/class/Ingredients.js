import { Filter } from "./Filter.js";
import { transformToLowerCase } from "../functions/transformToLowerCase.js";

export class Ingredients extends Filter {
  constructor(recipes, list) {
    super("ingredients", recipes, list);
  }

  hydrate(recipes) {
    this.listElements = [];
    recipes.forEach(element => {
      //Select all ingredients from recipes
      for (let i = 0; i < element.ingredients.length; i++) {
        const capitalized = element.ingredients[i].ingredient.charAt(0).toUpperCase() + element.ingredients[i].ingredient.slice(1).toLowerCase();
        if (!this.listElements.includes(capitalized)) {
          this.listElements.push(capitalized);
        }
      }
    });
  }

  filteredItems(recipes) {
    let list = [];
    const ingredientsTags = document.querySelectorAll(".filtre_element_ingredients");
    recipes.forEach(recipe => {
      this.listElements = [];
      if (ingredientsTags.length > 0) {
        let count = 0;
        for (let i = 0; i < recipe.ingredients.length; i++) {
          this.listElements.push(recipe.ingredients[i].ingredient);
        }
        this.listElements = transformToLowerCase(this.listElements);
        ingredientsTags.forEach(e => {
          if (this.listElements.includes(e.firstElementChild.innerText.toLowerCase())) {
            count++;
          }
        })
        if (count === ingredientsTags.length) {
          list.push(recipe);
        }
      }
    })
    if (list.length === 0) {
      return recipes;
    }
    return list;
  }
}