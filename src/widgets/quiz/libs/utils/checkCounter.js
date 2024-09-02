export const checkCounter = (value, max = null) => {
  return !(value <= 0 || (max != null && value > max));
};