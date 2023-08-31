import { sortItems } from "../functions/sortItems.js";

export class Filter {
  constructor(name, recipes, list) {
    this.list = list;
    this.recipes = recipes;
    this.name = name;
    this.button = document.querySelector(`.btn_${this.name}`);
    this.filtre = document.querySelector(`.filtre_${this.name}`);
    this.chevronUp = document.querySelector(`.chevron_up_${this.name}`);
    this.chevronDown = document.querySelector(`.chevron_down_${this.name}`);
    this.container = document.querySelector(`.container_${this.name}`);
    this.searchInput = document.querySelector(`#${this.name}_search`);
    this.result = document.querySelector(`.filtre_resultat`);
    this.listElements = [];
    this.flag = 0;
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
        if (this.container.innerText === '') this.showFilter();
      } else {
        e.style.display = "block";
        this.hideFilter();
      }
    })
  }

  displayFilter() {
    //Display the list of items
    const sortedElements = sortItems(this.listElements);
    this.container.innerHTML = ``;
    sortedElements.forEach(e => {
      const p = document.createElement("p");
      p.classList.add(`${this.name}_items`);
      p.innerHTML = `${e}`;
      const currentTag = document.querySelectorAll(`.filtre_element_${this.name}`);
      if (currentTag.length > 0) {
        //Cross item present in tag element
        currentTag.forEach(element => {
          if (element.firstElementChild.textContent == e) p.classList.add("crossed");
        })
      }
      this.container.appendChild(p);
    })
    this.filtre.appendChild(this.container);
    this.displayTag();
  }

  displayTag() {
    //Add eventListener to add tag element
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
          this.deleteTag();
          this.list.filter();
        }
      })
    })
  }

  deleteTag() {
    //EventListener to remove tag element
    const tag = document.querySelectorAll(`.filtre_element_${this.name}`);
    if (tag.length > 0) {
      tag.forEach(item => {
        const removeTag = item.lastElementChild;
        removeTag.addEventListener("click", () => {
          this.result.removeChild(item);
          this.list.filter();
        })
      })
    }
  }
};