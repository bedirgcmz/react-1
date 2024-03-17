export const getImage = (name) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
};
export const getImageURL = (imageName) => {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
};
