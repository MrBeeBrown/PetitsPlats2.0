import { Filter } from "./Filter.js";
import { sortItems } from "../functions/sortItems.js";

export class Ustensils extends Filter {
  constructor(recipes) {
    super("ustensils", recipes);
  }

  hydrate(recipes) {
    this.listElements = [];
    recipes.forEach(element => {
      //Select all ustensils from recipes
      for (let i = 0; i < element.ustensils.length; i++) {
        const capitalized = element.ustensils[i].charAt(0).toUpperCase() + element.ustensils[i].slice(1).toLowerCase();
        if (!this.listElements.includes(capitalized)) this.listElements.push(capitalized);
      }
    });

    //Sort and hydrate the list of ustensils
    const sortedElements = sortItems(this.listElements);
    this.displayFilter(sortedElements);
  }
}