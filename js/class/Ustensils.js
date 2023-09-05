import { Filter } from "./Filter.js";
import { transformToLowerCase } from "../functions/transformToLowerCase.js";

export class Ustensils extends Filter {
  constructor(recipes, list) {
    super("ustensils", recipes, list);
  }

  hydrate(recipes) {
    this.listElements = [];
    recipes.forEach(element => {
      //Select all ustensils from recipes
      for (let i = 0; i < element.ustensils.length; i++) {
        const capitalized = element.ustensils[i].charAt(0).toUpperCase() + element.ustensils[i].slice(1).toLowerCase();
        if (!this.listElements.includes(capitalized)) {
          this.listElements.push(capitalized);
        }
      }
    });
  }

  filteredItems(recipes) {
    //Filter recipes by ustensils tags
    let list = [];
    const ustensilsTags = document.querySelectorAll(".filtre_element_ustensils");
    recipes.forEach(recipe => {
      if (ustensilsTags.length > 0) {
        let count = 0;
        this.listElements = transformToLowerCase(recipe.ustensils);
        ustensilsTags.forEach(e => {
          if (this.listElements.includes(e.firstElementChild.innerText.toLowerCase())) {
            count++;
          }
        })
        if (count === ustensilsTags.length) {
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