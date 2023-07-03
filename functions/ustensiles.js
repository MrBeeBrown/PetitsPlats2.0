export const clicUstensils = () => {
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