import { Filter } from "./Filter.js";
import { sortItems } from "../functions/sortItems.js";
import { transformToLowerCase } from "../functions/transformToLowerCase.js";

export class Appareils extends Filter {
  constructor(name, recipes) {
    super(recipes)
  }

  hydrate(recipes) {
    recipes.forEach(element => {
      //Hydrate appliance
      if (this.name == "appareils") {
        const capitalized = element.appliance.charAt(0).toUpperCase() + element.appliance.slice(1).toLowerCase();
        if (!this.recipesItems.includes(capitalized)) {
          this.recipesItems.push(capitalized);
        }
      }
    });

    //Update the list of appliance
    const sorted = sortItems(this.recipesItems);
    this.container.innerHTML = ``;
    sorted.forEach(e => {
      const p = document.createElement("p");
      p.classList.add(`${this.name}_items`);
      p.innerHTML = `${e}`;
      const filterElement = document.querySelectorAll(".filtre_element_text");
      filterElement.forEach(item => {
        if (item.textContent == p.textContent) {
          p.classList.add("crossed");
        }
      })
      this.container.appendChild(p);
    })
    this.filtre.appendChild(this.container);
  }

  filterRecipes(tagElement) {
    //Sort the recipes by selected tag
    this.newRecipesList = [];
    this.recipes.forEach(recipes => {
      this.newList = [];
      this.flag = 0;
      const newTagElement = transformToLowerCase(tagElement);
      if (this.name === 'ustensils') this.newList = transformToLowerCase(recipes.ustensils);
      newTagElement.forEach(e => {
        if (this.newList.includes(e)) this.flag++;
      })
      if (this.flag === newTagElement.length) this.newRecipesList.push(recipes);
    })
    this.printRecipes(this.newRecipesList);
  }
}