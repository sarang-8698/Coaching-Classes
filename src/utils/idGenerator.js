// idGenerator.js
export const generateUniqueId = () => {
  // Generate a unique ID in a specific range
  return Math.floor(10000000 + Math.random() * 90000000).toString();
};
