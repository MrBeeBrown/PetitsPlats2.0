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
      if (!e.innerText.toLowerCase().includes(searchInput.value)) {
        e.style.display = "none";
      } else {
        e.style.display = "block";
      }
    })
  })

  searchData.forEach(element => {
    element.addEventListener("click", () => {
      const elementContent = element.innerText.replace(/\s/g, "");
      const content = `
      <div class="filtre_element filtre_${elementContent}">
        <p class="filtre_element_text">${element.innerText}</p>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" class="xmark close_${elementContent}"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
      </div>
      `
      if (!result.textContent.includes(elementContent)) {
        result.innerHTML += content;
        const removeUstensile = document.querySelector(`.close_${elementContent}`);
        removeUstensile.addEventListener("click", () => {
          const removeItem = document.querySelector(`.filtre_${elementContent}`);
          result.removeChild(removeItem);
          console.log(removeItem);
        })
      }
    })
  })

}