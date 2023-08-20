import { Filter } from "./Filter.js";
import { sortItems } from "../functions/sortItems.js";

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

    //Sort and hydrate the list of ingredients
    const sortedElements = sortItems(this.listElements);
    this.displayFilter(sortedElements);
  }
}