export function removeFilter() {
  const filtre = document.querySelector('.filtre_resultat');

  filtre.addEventListener('click', (e) => {
    if ((e.target.classList.contains("")) || (e.target.classList.contains("xmark"))) {
      const removeItem = e.target.closest(".filtre_element");
      filtre.removeChild(removeItem);
    }
  })
}