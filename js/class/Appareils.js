import { Filter } from "./Filter.js";
import { transformToLowerCase } from "../functions/transformToLowerCase.js";

export class Appareils extends Filter {
  constructor(recipes, list) {
    super("appareils", recipes, list);
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
  }

  filteredItems(recipes) {
    //Filter recipes by appareils tags
    let list = [];
    const appareilsTags = document.querySelectorAll(".filtre_element_appareils");
    recipes.forEach(recipe => {
      if (appareilsTags.length > 0) {
        let count = 0;
        this.listElements = recipe.appliance.toLowerCase();
        appareilsTags.forEach(e => {
          if (this.listElements.includes(e.firstElementChild.innerText.toLowerCase())) {
            count++;
          }
        })
        if (count === appareilsTags.length) {
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