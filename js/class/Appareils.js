import { Filter } from "./Filter.js";
import { sortItems } from "../functions/sortItems.js";

export class Appareils extends Filter {
  constructor(recipes) {
    super("appareils", recipes);
  }

  hydrate(recipes) {
    this.listElements = [];
    recipes.forEach(element => {
      //Select all appliance from recipes
      const capitalized = element.appliance.charAt(0).toUpperCase() + element.appliance.slice(1).toLowerCase();
      if (!this.listElements.includes(capitalized)) {
        this.listElements.push(capitalized);
      }
    });

    //Sort and hydrate the list of appliance
    const sortedElements = sortItems(this.listElements);
    this.displayFilter(sortedElements);
  }
}