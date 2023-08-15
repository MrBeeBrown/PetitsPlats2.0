import { sortItems } from "./sortItems.js";

export function hydrateAllFilter(recipes) {
  const ustensilsItems = [];
  const ingredientsItems = [];
  const appareilsItems = [];
  const ustensilsContainer = document.querySelector(`.container_ustensils`);
  const ingredientsContainer = document.querySelector(`.container_ingredients`);
  const appareilsContainer = document.querySelector(`.container_appareils`);
  const filtreUstensils = document.querySelector(`.filtre_ustensils`);
  const filtreIngredients = document.querySelector(`.filtre_ingredients`);
  const filtreAppareils = document.querySelector(`.filtre_appareils`);
  const crossedElement = document.querySelectorAll(".filtre_resultat");

  recipes.forEach(element => {
    //Get all ustensils
    for (let i = 0; i < element.ustensils.length; i++) {
      const capitalizedUstensils = element.ustensils[i].charAt(0).toUpperCase() + element.ustensils[i].slice(1).toLowerCase();
      if (!ustensilsItems.includes(capitalizedUstensils)) ustensilsItems.push(capitalizedUstensils);
    }
    //Hydrate the list of ustensils
    const sortedUstensils = sortItems(ustensilsItems);
    ustensilsContainer.innerHTML = ``;
    sortedUstensils.forEach(e => {
      const p = document.createElement("p");
      p.classList.add(`ustensils_items`);
      p.innerHTML = `${e}`;
      ustensilsContainer.appendChild(p);
      //Cross item in tag element
      if (crossedElement.length > 0) {
        crossedElement.forEach(item => {
          if (item.textContent == e) p.classList.add("crossed");
        })
      }
    })
    filtreUstensils.appendChild(ustensilsContainer);

    //Get all ingredients
    for (let i = 0; i < element.ingredients.length; i++) {
      const capitalizedIngredients = element.ingredients[i].ingredient.charAt(0).toUpperCase() + element.ingredients[i].ingredient.slice(1).toLowerCase();
      if (!ingredientsItems.includes(capitalizedIngredients)) ingredientsItems.push(capitalizedIngredients);
    };
    //Hydrate the list of ingredients
    const sortedIngredients = sortItems(ingredientsItems);
    ingredientsContainer.innerHTML = ``;
    sortedIngredients.forEach(e => {
      const p = document.createElement("p");
      p.classList.add(`ingredients_items`);
      p.innerHTML = `${e}`;
      ingredientsContainer.appendChild(p);
      //Cross item in tag element
      if (crossedElement.length > 0) {
        crossedElement.forEach(item => {
          if (item.textContent == e) p.classList.add("crossed");
        })
      }
    })
    filtreIngredients.appendChild(ingredientsContainer);

    //Get all appliance
    const capitalizedAppareils = element.appliance.charAt(0).toUpperCase() + element.appliance.slice(1).toLowerCase();
    if (!appareilsItems.includes(capitalizedAppareils)) {
      appareilsItems.push(capitalizedAppareils);
    }
    //Hydrate the list of appliance
    const sortedAppareils = sortItems(appareilsItems);
    appareilsContainer.innerHTML = ``;
    sortedAppareils.forEach(e => {
      const p = document.createElement("p");
      p.classList.add(`appareils_items`);
      p.innerHTML = `${e}`;
      appareilsContainer.appendChild(p);
      //Cross item in tag element
      if (crossedElement.length > 0) {
        crossedElement.forEach(item => {
          if (item.textContent == e) p.classList.add("crossed");
        })
      }
    })
    filtreAppareils.appendChild(appareilsContainer);
  });
}