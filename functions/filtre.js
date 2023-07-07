export const sortItems = (items) => {
  const sortedItems = items.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  })
  return sortedItems;
}