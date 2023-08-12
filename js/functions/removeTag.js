export function removeTag() {
  //EventListener to remove tag element
  const tagContainer = document.querySelector(".filtre_resultat");
  tagContainer.addEventListener("click", (event) => {
    if (event.target.closest(".xmark")) {
      tagContainer.removeChild(event.target.parentElement);
    }
  })
}