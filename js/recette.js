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
    </div>`;
    content.appendChild(recette);
  };
}