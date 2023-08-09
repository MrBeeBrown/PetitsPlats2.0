export function addTag() {
  //Add tag ustensils
  const searchDataUstensils = document.querySelectorAll(`.ustensils_items`);
  searchDataUstensils.forEach(element => {
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
        this.filterRecipes(this.tagElement);
        //EventListener to remove tag element
        const tag = document.querySelectorAll('.filtre_element');
        if (tag.length > 0) {
          tag.forEach(item => {
            const removeTag = item.lastElementChild;
            removeTag.addEventListener("click", () => {
              this.result.removeChild(item);
              this.tagElement = this.tagElement.filter((e) => e !== item.firstElementChild.textContent);
              if (this.tagElement.length === 0) this.printRecipes(this.recipes);
              else this.filterRecipes(this.tagElement);
            })
          })
        }
      }
    })
  })

  //Add tag ingredients
  const searchDataIngredients = document.querySelectorAll(`.ingredients_items`);
  searchDataIngredients.forEach(element => {
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
        this.filterRecipes(this.tagElement);
        //EventListener to remove tag element
        const tag = document.querySelectorAll('.filtre_element');
        if (tag.length > 0) {
          tag.forEach(item => {
            const removeTag = item.lastElementChild;
            removeTag.addEventListener("click", () => {
              this.result.removeChild(item);
              this.tagElement = this.tagElement.filter((e) => e !== item.firstElementChild.textContent);
              if (this.tagElement.length === 0) this.printRecipes(this.recipes);
              else this.filterRecipes(this.tagElement);
            })
          })
        }
      }
    })
  })

  //Add tag appareils
  const searchDataAppareils = document.querySelectorAll(`.appareils_items`);
  searchDataAppareils.forEach(element => {
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
        this.filterRecipes(this.tagElement);
        //EventListener to remove tag element
        const tag = document.querySelectorAll('.filtre_element');
        if (tag.length > 0) {
          tag.forEach(item => {
            const removeTag = item.lastElementChild;
            removeTag.addEventListener("click", () => {
              this.result.removeChild(item);
              this.tagElement = this.tagElement.filter((e) => e !== item.firstElementChild.textContent);
              if (this.tagElement.length === 0) this.printRecipes(this.recipes);
              else this.filterRecipes(this.tagElement);
            })
          })
        }
      }
    })
  })
}