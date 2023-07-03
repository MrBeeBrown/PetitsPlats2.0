export class Recette {
  constructor(data) {
    this.id = data.id
    this.image = data.image
    this.name = data.name
    this.description = data.description
    this.ingredients = data.ingredients
    this.time = data.time
    this.ustensils = data.ustensils
    this.appliance = data.appliance
    this.servings = data.servings
  }

  print() {
    //Affichage de la recette
    const content = document.querySelector(".liste_recettes");
    const recette = document.createElement("div");
    recette.setAttribute("class", "fiche_recette");
    recette.innerHTML = `
    <img src="/assets/images/${this.image}" alt="${this.name}">
    <div class="timer">${this.time}min</div>
    <div class="recette_content">
      <p class="titre_recette">${this.name}</p>
      <p class="recette">Recette</p>    
      <p class="description_recette">${this.description}</p>
      <p class="liste_ingredients">Ingrédients</p>
      <div class="ingredients">${this.printIngredients()}</div>
    </div>`;
    content.appendChild(recette);
  }

  printIngredients() {
    //Affichage des ingrédients
    const container = document.createElement("div");
    for (let i = 0; i < this.ingredients.length; i++) {
      if ((!this.ingredients[i].quantity) && (!this.ingredients[i].unit)) {
        container.innerHTML += `
        <div class="bloc_ingredient">
          <p class="nom_ingredient">${this.ingredients[i].ingredient}</p>
        </div>
        `;
      }
      if ((this.ingredients[i].ingredient) && (this.ingredients[i].quantity) && (!this.ingredients[i].unit)) {
        container.innerHTML += `
        <div class="bloc_ingredient">
          <p class="nom_ingredient">${this.ingredients[i].ingredient}</p>
          <p class="nbr_ingredient">${this.ingredients[i].quantity}</p>
        </div>
        `;
      }
      if ((this.ingredients[i].ingredient) && (this.ingredients[i].quantity) && (this.ingredients[i].unit)) {
        container.innerHTML += `
        <div class="bloc_ingredient">
          <p class="nom_ingredient">${this.ingredients[i].ingredient}</p>
          <p class="nbr_ingredient">${this.ingredients[i].quantity}${this.ingredients[i].unit}</p>
        </div>
        `;
      }
    }
    return container.innerHTML;
  }
}