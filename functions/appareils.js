import { sortItems } from "./filtre.js";

export const appareils = () => {
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

export const recipesAppareils = (data) => {
  const recipesAppareilsItems = [];
  const appareilsContainer = document.querySelector(".filtre_appareils");
  const container = document.createElement("div");

  container.setAttribute("class", "container_appareils");
  data.forEach(element => {
    if (!recipesAppareilsItems.includes(element.appliance)) {
      recipesAppareilsItems.push(element.appliance);
    }
  });

  const sortedAppareils = sortItems(recipesAppareilsItems);
  sortedAppareils.forEach(e => {
    const p = document.createElement("p");
    p.classList.add("appareils_items");
    p.innerHTML = `${e}`;
    container.appendChild(p);
  })
  appareilsContainer.appendChild(container);
}