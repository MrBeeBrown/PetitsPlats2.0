import { Filter } from "./Filter.js";
import { sortItems } from "../functions/sortItems.js";
import { transformToLowerCase } from "../functions/transformToLowerCase.js";

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

  filteredItems(recipes) {
    //Filter recipes by ustensils tags
    const ustensilsTags = document.querySelectorAll(".filtre_element_ustensils");
    recipes.forEach(recipe => {
      if (ustensilsTags.length > 0) {
        this.flag = 0;
        this.listUstensils = transformToLowerCase(recipe.ustensils);
        ustensilsTags.forEach(e => {
          if (this.listUstensils.includes(e.firstElementChild.innerText.toLowerCase())) {
            this.flag++;
          }
        })
        if (this.flag === ustensilsTags.length) this.listRecipes.push(recipe);
      }
    })
    if (this.listRecipes.length === 0) this.listRecipes = this.recipes;
  }
}