import { Recette } from "./Recette.js";
import { countRecipes } from "../functions/countRecipes.js";
import { transformToLowerCase } from "../functions/transformToLowerCase.js";

export class Filter {
  constructor(name, recipes) {
    this.recipes = recipes;
    this.name = name;
    this.button = document.querySelector(`.btn_${this.name}`);
    this.filtre = document.querySelector(`.filtre_${this.name}`);
    this.chevronUp = document.querySelector(`.chevron_up_${this.name}`);
    this.chevronDown = document.querySelector(`.chevron_down_${this.name}`);
    this.container = document.querySelector(`.container_${this.name}`);
    this.searchInput = document.querySelector(`#${this.name}_search`);
    this.tagElement = [];
    this.recipesItems = [];
    this.espaceRecipes = document.querySelector('.liste_recettes');
    this.result = document.querySelector(`.filtre_resultat`);
    this.listUstensils = [];
    this.listIngredients = [];
    this.listAppareils = [];
    this.listRecipes = [];
  }

  start() {
    //Open dropdown menu
    this.button.addEventListener("click", () => this.open());
    //Close dropdown menu
    document.addEventListener("click", (element) => this.close(element));
    //Research elements in the filter
    this.searchInput.addEventListener("input", () => this.filter());
  }

  open() {
    //Open dropdown menu
    this.filtre.style.display = "block";
    this.chevronUp.style.display = "block";
    this.chevronDown.style.display = "none";
  }

  close(element) {
    //Close dropdown menu
    if (!element.target.closest(`.${this.name}`)) {
      this.filtre.style.display = "none";
      this.chevronUp.style.display = "none";
      this.chevronDown.style.display = "block";
    }
  }

  hideFilter() {
    document.querySelector(`.element_vide_${this.name}`).classList.add('hidden');
  }

  showFilter() {
    document.querySelector(`.element_vide_${this.name}`).classList.remove('hidden');
  }

  filter() {
    //Activate research in dropdown menu input
    const searchData = document.querySelectorAll(`.${this.name}_items`);
    searchData.forEach(e => {
      if (!e.innerText.toLowerCase().includes(this.searchInput.value)) {
        e.style.display = "none";
        if (this.container.innerText === '') {
          this.showFilter();
        }
      } else {
        e.style.display = "block";
        this.hideFilter();
      }
    })
  }

  displayFilter(items) {
    //Display the list of items
    this.container.innerHTML = ``;
    items.forEach(e => {
      const p = document.createElement("p");
      p.classList.add(`${this.name}_items`);
      p.innerHTML = `${e}`;
      this.container.appendChild(p);


      /* const tag = document.querySelectorAll(`.${this.name}_items`);
      const tagElement = document.querySelectorAll(`.filtre_element_${this.name}`);
      if (tagElement.length > 0) {
        tag.forEach(element => {
          tagElement.forEach(item => {
            if (item.textContent === element.textContent) {
              e.classList.add("crossed");
            }
          })
          console.log(element);
        })
      } */


    })
    this.filtre.appendChild(this.container);
    this.displayTag();
  }

  displayTag() {
    //Add tag element
    const searchData = document.querySelectorAll(`.${this.name}_items`);
    searchData.forEach(element => {
      element.addEventListener("click", () => {
        const content = `
        <div class="filtre_element_${this.name}">
        <p class="filtre_element_text">${element.innerText}</p>
        <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 384 512" class="xmark"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
      </div>
      `
        if (!this.result.textContent.includes(element.innerText)) {
          this.result.innerHTML += content;
          this.filterRecipes();
          this.removeTag();
        }
      })
    })
  }

  removeTag() {
    //EventListener to remove tag element
    const tag = document.querySelectorAll(`.filtre_element_${this.name}`);
    if (tag.length > 0) {
      tag.forEach(item => {
        const removeTag = item.lastElementChild;
        removeTag.addEventListener("click", () => {
          this.result.removeChild(item);
          if (this.tagElement.length === 0) this.printRecipes(this.recipes);
          else this.filterRecipes();
        })
      })
    }
  }

  filterRecipes() {
    this.recipes.forEach(recipe => {
      //Sort recipes by ustensils
      this.ustensilsTags = document.querySelectorAll(".filtre_element_ustensils");
      if (this.ustensilsTags.length > 0) {
        this.listUstensils = transformToLowerCase(recipe.ustensils);
        this.ustensilsTags.forEach(e => {
          if (this.listUstensils.includes(e.firstElementChild.innerText.toLowerCase())) this.listRecipes.push(recipe);
        })
      }

      //Sort recipes by ingredients
      this.ingredientsTags = document.querySelectorAll(".filtre_element_ingredients");
      if (this.ingredientsTags.length > 0) {
        for (let i = 0; i < this.recipes.ingredients.length; i++) {
          this.listIngredients.push(recipes.ingredients[i].ingredient);
        }
        this.listIngredients = transformToLowerCase(this.listIngredients);
        this.ingredientsTags.forEach(e => {
          if (this.listIngredients.includes(e.firstElementChild.innerText.toLowerCase())) this.listRecipes.push(recipe);
        })
      }

      //Sort recipes by appareils
      this.appareilsTags = document.querySelectorAll(".filtre_element_appareils");
      if (this.appareilsTags.length > 0) {
        this.listAppareils = transformToLowerCase(recipe.appliance);
        this.appareilsTags.forEach(e => {
          if (this.listAppareils.includes(e.firstElementChild.innerText.toLowerCase())) this.listRecipes.push(recipe);
        })
      }
    })

    this.printRecipes(this.listRecipes);
  }

  printRecipes(newRecipes) {
    //Print the recipes by selected tag
    this.espaceRecipes.innerHTML = ``;
    newRecipes.forEach(item => {
      const ficheRecette = new Recette(item);
      ficheRecette.print();
    })
    this.hydrate(newRecipes);
    countRecipes(newRecipes);
  }
}