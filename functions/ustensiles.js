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
  data.forEach(element => {
    for (let i = 0; i < element.ustensils.length; i++) {
      if (!recipesUstensilesItems.includes(element.ustensils[i].toLowerCase())) {
        recipesUstensilesItems.push(element.ustensils[i].toLowerCase());
      }
    }
  });
  const sortedUstensils = sortUstensiles(recipesUstensilesItems);
  sortedUstensils.forEach(e => {
    const p = document.createElement("p");
    p.innerHTML = `${e}`;
    ustensilesContainer.appendChild(p);
  })
}

const sortUstensiles = (items) => {
  const sortedItems = items.sort((a, b) => {
    if (a < b) {
      return -1;
    }

    if (a > b) {
      return 1;
    }
    return 0;
  })
  return sortedItems;
}