import randomColor from "randomcolor";

export const TASK_KEY = {
  done: "done",
  copytext: "text",
  category: "category",
};

export const CATEGORY_KEY = {
  title: "title",
  color: "color",
};

export const DEFAULT_NEW_TASK = {
  [TASK_KEY.done]: false,
  [TASK_KEY.copytext]: "",
  [TASK_KEY.category]: "",
};

export const DATA = {
  TODOLIST: "todolist",
  CATEGORIES: "categoryList",
};
