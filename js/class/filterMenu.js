import { Recette } from "./recette.js";
import { countRecipes } from "../functions/countRecipes.js";

export class Filter {
  constructor(name, recipes) {
    this.recipes = recipes
    this.name = name
    this.button = document.querySelector(`.btn_${this.name}`)
    this.filtre = document.querySelector(`.filtre_${this.name}`)
    this.chevronUp = document.querySelector(`.chevron_up_${this.name}`)
    this.chevronDown = document.querySelector(`.chevron_down_${this.name}`)
    this.filtre = document.querySelector(`.filtre_${this.name}`);
    this.container = document.querySelector(`.container_${this.name}`)
    this.recipesItems = []
    this.searchInput = document.querySelector(`#${this.name}_search`)
    this.result = document.querySelector(".filtre_resultat")
    this.tagElement = []
    this.newRecipesList = []
    this.espaceRecipes = document.querySelector('.liste_recettes')
  }

  start() {
    //Open dropdown menu
    this.button.addEventListener("click", () => this.open());
    //Close dropdown menu
    document.addEventListener("click", (element) => this.close(element));
    //Filter dropdown items
    this.searchInput.addEventListener("input", () => this.filter());
    //Remove Tag items
    this.result.addEventListener('click', (element) => this.removeTag(element))
  }

  open() {
    this.filtre.style.display = "block";
    this.chevronUp.style.display = "block";
    this.chevronDown.style.display = "none";
  }

  close(element) {
    if (!element.target.closest(`.${this.name}`)) {
      this.filtre.style.display = "none";
      this.chevronUp.style.display = "none";
      this.chevronDown.style.display = "block";
    }
  }

  hydrate(data) {
    data.forEach(element => {
      if (this.name == "ustensils") {
        for (let i = 0; i < element.ustensils.length; i++) {
          const capitalized = element.ustensils[i].charAt(0).toUpperCase() + element.ustensils[i].slice(1).toLowerCase();
          if (!this.recipesItems.includes(capitalized)) {
            this.recipesItems.push(capitalized);
          }
        }
      }
      /*  if (this.name == "appareils") {
        const capitalized = element.appliance.charAt(0).toUpperCase() + element.appliance.slice(1).toLowerCase();
         if (!recipesItems.includes(capitalized)) {
           recipesItems.push(capitalized);
          }
       }
       if (this.name == "ingredients") {
         for (let i = 0; i < element.ingredients.length; i++) {
           const capitalized = element.ingredients[i].ingredient.charAt(0).toUpperCase() + element.ingredients[i].ingredient.slice(1).toLowerCase();
           if (!recipesItems.includes(capitalized)) {
             recipesItems.push(capitalized);
            }
          }
        } */
    });

    const sorted = sortItems(this.recipesItems);
    this.container.innerHTML = ``;
    sorted.forEach(e => {
      const p = document.createElement("p");
      p.classList.add(`${this.name}_items`);
      p.innerHTML = `${e}`;
      this.container.appendChild(p);
    })
    this.filtre.appendChild(this.container);
  }

  filter() {
    const searchData = document.querySelectorAll(`.${this.name}_items`);
    searchData.forEach(e => {
      if (!e.innerText.toLowerCase().includes(this.searchInput.value)) {
        e.style.display = "none";
        if (this.container.innerText == '') {
          const emptyString = `<p class="element_vide">Aucun élément trouvé</p>`;
          this.container.innerHTML += (emptyString);
        }
      } else {
        e.style.display = "block";
        if (document.querySelector('.element_vide')) {
          const removeElement = document.querySelector('.element_vide');
          removeElement.remove();
        }
      }
    })
  }

  addTag() {
    const searchData = document.querySelectorAll(`.${this.name}_items`);
    searchData.forEach(element => {
      element.addEventListener("click", () => {
        const content = `
        <div class="filtre_element">
        <p class="filtre_element_text">${element.innerText}</p>
        <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 384 512" class="xmark"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
      </div>
      `
        if (!this.result.textContent.includes(element.innerText)) {
          this.result.innerHTML += content;
          this.tagElement.push(element.innerText);
          this.filteredTag(this.tagElement);
        }
      })
    })
  }

  removeTag(element) {
    if (element.target.classList.contains("xmark")) {
      const removeItem = element.target.closest(".filtre_element");
      this.result.removeChild(removeItem);
      this.tagElement = this.tagElement.filter((item) => item !== removeItem.firstElementChild.textContent);
      if (this.tagElement.length == 0) {
        this.printRecipes(this.recipes);
      } else {
        this.filteredTag(this.tagElement);
      }
    }
  }

  filteredTag(tagElement) {
    this.newRecipesList = [];
    this.recipes.forEach(recipes => {
      let flag = 0;
      const newTagElement = toLowerCase(tagElement);
      if (this.name = 'ustensils') {
        const newList = toLowerCase(recipes.ustensils);
        newTagElement.forEach(e => {
          if (newList.includes(e)) flag++;
        })
      }
      if (flag === newTagElement.length) this.newRecipesList.push(recipes);
    })
    this.printRecipes(this.newRecipesList);
  }

  printRecipes(newRecipes) {
    this.espaceRecipes.innerHTML = ``;
    newRecipes.forEach(item => {
      const ficheRecette = new Recette(item);
      ficheRecette.print();
    })
    this.recipesItems = [];
    this.hydrate(newRecipes);
    this.addTag();
    countRecipes(newRecipes);
  }
}

function sortItems(items) {
  return items.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  })
}

function toLowerCase(elements) {
  let newElements = [];
  elements.forEach((item) => {
    newElements.push(item.toLowerCase());
  })
  return newElements;
}