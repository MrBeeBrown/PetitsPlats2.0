export const clickAppareils = () => {
  const btnAppareils = document.querySelector(".btn_appareils");
  const filtreAppareils = document.querySelector(".filtre_appareils");
  const chevronUpAppareils = document.querySelector(".chevron_up_appareils");
  const chevronDownAppareils = document.querySelector(".chevron_down_appareils");
  btnAppareils.addEventListener("click", () => {
    filtreAppareils.style.display = "block";
    chevronUpAppareils.style.display = "none";
    chevronDownAppareils.style.display = "block";
  })

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".appareils")) {
      filtreAppareils.style.display = "none";
      chevronUpAppareils.style.display = "block";
      chevronDownAppareils.style.display = "none";
    }
  })
}