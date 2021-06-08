export const ls = {
  set: (source, value) => {
    localStorage.setItem(source, JSON.stringify(value));
  },
  get: (source) => {
    return JSON.parse(localStorage.getItem(source)) || [];
  },
};
