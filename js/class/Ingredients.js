import { Filter } from "./Filter.js";
import { sortItems } from "../functions/sortItems.js";
import { transformToLowerCase } from "../functions/transformToLowerCase.js";

export class Ingredients extends Filter {
  constructor(recipes) {
    super("ingredients", recipes);
  }

  hydrate(recipes) {
    recipes.forEach(element => {
      //Select all ingredients
      for (let i = 0; i < element.ingredients.length; i++) {
        const capitalized = element.ingredients[i].ingredient.charAt(0).toUpperCase() + element.ingredients[i].ingredient.slice(1).toLowerCase();
        if (!this.recipesItems.includes(capitalized)) this.recipesItems.push(capitalized);
      }
    });

    //Sort and hydrate the list of ingredients
    const sortedElements = sortItems(this.recipesItems);
    this.displayFilter(sortedElements);
  }
}