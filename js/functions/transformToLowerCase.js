export function transformToLowerCase(elements) {
  //Function for lowercase
  let newElements = [];
  elements.forEach((item) => {
    newElements.push(item.toLowerCase());
  })
  return newElements;
}