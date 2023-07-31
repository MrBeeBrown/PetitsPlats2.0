export function countRecipes(elements) {
  const nbrRecettes = document.querySelector(".nbr_recettes");
  if (elements.length <= 1) {
    nbrRecettes.innerText = elements.length + " " + "recette";
  } else {
    nbrRecettes.innerText = elements.length + " " + "recettes";
  }
}