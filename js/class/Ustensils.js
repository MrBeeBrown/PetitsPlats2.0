import { Filter } from "./Filter.js";
import { sortItems } from "../functions/sortItems.js";
import { transformToLowerCase } from "../functions/transformToLowerCase.js";

export class Ustensils extends Filter {
  constructor(recipes) {
    super("ustensils", recipes);
  }

  hydrate(recipes) {
    this.recipesItems = [];
    recipes.forEach(element => {
      //Select all ustensils
      for (let i = 0; i < element.ustensils.length; i++) {
        const capitalized = element.ustensils[i].charAt(0).toUpperCase() + element.ustensils[i].slice(1).toLowerCase();
        if (!this.recipesItems.includes(capitalized)) this.recipesItems.push(capitalized);
      }
    });

    //Sort and hydrate the list of ustensils
    const sortedElements = sortItems(this.recipesItems);
    this.displayFilter(sortedElements);
  }
}