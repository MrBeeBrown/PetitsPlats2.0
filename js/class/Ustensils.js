import { Filter } from "./Filter.js";
import { transformToLowerCase } from "../functions/transformToLowerCase.js";

export class Ustensils extends Filter {
  constructor(name, recipes) {
    super(name, recipes)
  }

  filterRecipes(tagElement) {
    //Sort the recipes by selected tag
    this.newRecipesList = [];
    this.recipes.forEach(recipes => {
      this.newList = [];
      this.flag = 0;
      const newTagElement = transformToLowerCase(tagElement);
      this.newList = transformToLowerCase(recipes.ustensils);
      newTagElement.forEach(e => {
        if (this.newList.includes(e)) this.flag++;
      })
      if (this.flag === newTagElement.length) this.newRecipesList.push(recipes);
    })
    this.printRecipes(this.newRecipesList);
  }
}