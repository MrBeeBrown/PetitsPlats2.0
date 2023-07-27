import { sortItems } from "./filtre.js";

export const ingredients = () => {
  const btnIngredients = document.querySelector(".btn_ingredients");
  const filtreIngredients = document.querySelector(".filtre_ingredients");
  const chevronUpIngredients = document.querySelector(".chevron_up_ingredients");
  const chevronDownIngredients = document.querySelector(".chevron_down_ingredients");

  btnIngredients.addEventListener("click", () => {
    filtreIngredients.style.display = "block";
    chevronUpIngredients.style.display = "none";
    chevronDownIngredients.style.display = "block";
  })

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".ingredients")) {
      filtreIngredients.style.display = "none";
      chevronUpIngredients.style.display = "block";
      chevronDownIngredients.style.display = "none";
    }
  })
}

export const recipesIngredients = (data) => {
  const recipesIngredientsItems = [];
  const ingredientsContainer = document.querySelector(".filtre_ingredients");
  const container = document.createElement("div");

  container.setAttribute("class", "container_ingredients");
  data.forEach(element => {
    for (let i = 0; i < element.ingredients.length; i++) {
      const capitalized = element.ingredients[i].ingredient.charAt(0).toUpperCase() + element.ingredients[i].ingredient.slice(1).toLowerCase();
      if (!recipesIngredientsItems.includes(capitalized)) {
        recipesIngredientsItems.push(capitalized);
      }
    }
  });

  const sortedIngredients = sortItems(recipesIngredientsItems);
  sortedIngredients.forEach(e => {
    const p = document.createElement("p");
    p.innerHTML = `${e}`;
    container.appendChild(p);
  })
  ingredientsContainer.appendChild(container);
}