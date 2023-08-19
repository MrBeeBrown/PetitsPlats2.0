import { Filter } from "./Filter.js";
import { sortItems } from "../functions/sortItems.js";
import { transformToLowerCase } from "../functions/transformToLowerCase.js";

export class Appareils extends Filter {
  constructor(recipes) {
    super("appareils", recipes);
  }

  hydrate(recipes) {
    recipes.forEach(element => {
      //Select all appliance
      const capitalized = element.appliance.charAt(0).toUpperCase() + element.appliance.slice(1).toLowerCase();
      if (!this.recipesItems.includes(capitalized)) {
        this.recipesItems.push(capitalized);
      }
    });

    //Sort and hydrate the list of appliance
    const sortedElements = sortItems(this.recipesItems);
    this.displayFilter(sortedElements);
  }
}