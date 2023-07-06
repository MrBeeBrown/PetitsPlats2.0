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