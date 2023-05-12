export const findUser = (value, array) =>
  array.some((obj) => Object.values(obj).includes(value));
