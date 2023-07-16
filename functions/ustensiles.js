import { sortItems } from "./filtre.js";

export const ustensiles = () => {
  const btnUstensils = document.querySelector(".btn_ustensiles");
  const filtreUstensils = document.querySelector(".filtre_ustensiles");
  const chevronUpUstensils = document.querySelector(".chevron_up_ustensiles");
  const chevronDownUstensils = document.querySelector(".chevron_down_ustensiles");
  btnUstensils.addEventListener("click", () => {
    filtreUstensils.style.display = "block";
    chevronUpUstensils.style.display = "none";
    chevronDownUstensils.style.display = "block";
  })

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".ustensiles")) {
      filtreUstensils.style.display = "none";
      chevronUpUstensils.style.display = "block";
      chevronDownUstensils.style.display = "none";
    }
  })
}

export const recipesUstensiles = (data) => {
  const recipesUstensilesItems = [];
  const ustensilesContainer = document.querySelector(".filtre_ustensiles");
  const container = document.createElement("div");
  container.setAttribute("class", "container_ustensiles");
  data.forEach(element => {
    for (let i = 0; i < element.ustensils.length; i++) {
      const capitalized = element.ustensils[i].charAt(0).toUpperCase() + element.ustensils[i].slice(1).toLowerCase();
      if (!recipesUstensilesItems.includes(capitalized)) {
        recipesUstensilesItems.push(capitalized);
      }
    }
  });
  const sortedUstensils = sortItems(recipesUstensilesItems);
  sortedUstensils.forEach(e => {
    const p = document.createElement("p");
    p.classList.add("ustensils_items");
    p.innerHTML = `${e}`;
    container.appendChild(p);
  })
  ustensilesContainer.appendChild(container);
}

export const searchUstensiles = (data) => {
  const searchInput = document.querySelector("#ustensiles_search");
  const searchData = document.querySelectorAll(".ustensils_items");
  const result = document.querySelector(".filtre_resultat");
  searchInput.addEventListener("input", () => {
    searchData.forEach(e => {
      if (e.innerText.toLowerCase().includes(searchData.value)) {
        console.log(e.innerText);
      }
    })
  })
}