export class Filter {
  constructor(data) {
    this.name = data
    this.button = document.querySelector(`.btn_${this.name}`)
    this.filtre = document.querySelector(`.filtre_${this.name}`)
    this.chevronUp = document.querySelector(`.chevron_up_${this.name}`)
    this.chevronDown = document.querySelector(`.chevron_down_${this.name}`)
  }

  show() {
    this.button.addEventListener("click", () => {
      this.filtre.style.display = "block";
      this.chevronUp.style.display = "block";
      this.chevronDown.style.display = "none";
    })
  }

  hide() {
    document.addEventListener("click", (e) => {
      if (!e.target.closest(`.${this.name}`)) {
        this.filtre.style.display = "none";
        this.chevronUp.style.display = "none";
        this.chevronDown.style.display = "block";
      }
    })
  }

  hydrate(data) {
    const recipesItems = [];
    const filtre = document.querySelector(`.filtre_${this.name}`);
    const container = document.querySelector(`.container_${this.name}`);

    data.forEach(element => {
      if (this.name == "ustensils") {
        for (let i = 0; i < element.ustensils.length; i++) {
          const capitalized = element.ustensils[i].charAt(0).toUpperCase() + element.ustensils[i].slice(1).toLowerCase();
          if (!recipesItems.includes(capitalized)) {
            recipesItems.push(capitalized);
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

    const sorted = sortItems(recipesItems);
    sorted.forEach(e => {
      const p = document.createElement("p");
      p.classList.add(`${this.name}_items`);
      p.innerHTML = `${e}`;
      container.appendChild(p);
    })
    filtre.appendChild(container);
  }

  select() {
    const searchInput = document.querySelector(`#${this.name}_search`);
    const searchData = document.querySelectorAll(`.${this.name}_items`);
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
        const content = `
      <div class="filtre_element">
        <p class="filtre_element_text">${element.innerText}</p>
        <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 384 512" class="xmark"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
      </div>
      `
        if (!result.textContent.includes(element.innerText)) {
          result.innerHTML += content;
        }
      })
    })
  }
}

function sortItems(items) {
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