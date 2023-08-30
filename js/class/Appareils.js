import { Filter } from "./Filter.js";
import { sortItems } from "../functions/sortItems.js";
import { transformToLowerCase } from "../functions/transformToLowerCase.js";

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
  }

  filteredItems(recipes) {
    //Filter recipes by appareils tags
    let list = [];
    this.appareilsTags = document.querySelectorAll(".filtre_element_appareils");
    recipes.forEach(recipe => {
      if (this.appareilsTags.length > 0) {
        this.flag = 0;
        this.listAppareils = recipe.appliance.toLowerCase();
        this.appareilsTags.forEach(e => {
          if (this.listAppareils.includes(e.firstElementChild.innerText.toLowerCase())) {
            this.flag++;
          }
        })
        if (!this.flag === this.ingredientsTags.length) {
          const findIndex = this.listRecipes.indexOf(recipe);
          this.listRecipes.splice(findIndex);
        }
      }
    })
  }
}