export const getElementIndex = (element) => {
  if (!element?.parentNode) return -1;
  return Array.from(element.parentNode.children).indexOf(element);
};