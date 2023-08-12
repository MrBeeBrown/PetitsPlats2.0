export function removeTag() {
  //EventListener to remove tag element
  const filtre = document.querySelectorAll(".filtre_element");
  if (filtre.length > 0) {
    console.log(filtre);
    filtre.forEach(item => {
      const removeTag = item.lastElementChild;
      removeTag.addEventListener("click", () => {
        result.removeChild(item);
        tagElement = tagElement.filter((e) => e !== item.firstElementChild.textContent);
      })
    })
  }
}