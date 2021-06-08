import React, { useState } from "react";
import { DATA } from "../constants";
import { ls } from "../helpers/ls";

const DEFAULT_VALUE = {
  categories: [],
  setCategories: () => undefined,
  taskList: [],
  setTaskList: () => undefined,
};

export const DataContext = React.createContext(DEFAULT_VALUE);

const initialCategoryList = ls.get(DATA.CATEGORIES);
const initialTaskList = ls.get(DATA.TODOLIST);

export const DataProvider = ({ children }) => {
  const [categoryList, setCategoryList] = useState(initialCategoryList);
  const [taskList, setTaskList] = useState(initialTaskList);

  const setTodoList = (newList) => {
    setTaskList(newList);
    ls.set(DATA.TODOLIST, newList);
  };
  const handleCategoryList = (newList) => {
    setCategoryList(newList);
    ls.set(DATA.CATEGORIES, newList);
  };
  return (
    <DataContext.Provider
      value={{
        categoryList,
        setCategoryList: handleCategoryList,
        todoList: taskList,
        setTodoList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
