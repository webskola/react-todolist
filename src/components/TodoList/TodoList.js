import { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";
import { Task } from "../Task/Task";

export const TodoList = ({ activeCategoryId }) => {
  const { todoList, setTodoList } = useContext(DataContext);

  const updateList = (index, key, value) => {
    todoList[index][key] = value;
    setTodoList([...todoList]);
  };
  const deleteTask = (id) => {
    const newList = todoList.filter((item) => item.id !== id);
    setTodoList(newList);
  };
  const renderItem = (item, key) => {
    if (activeCategoryId && activeCategoryId !== item.category) return null;
    return <Task key={item.id} index={key} {...item} updateList={updateList} deleteTask={deleteTask} />;
  };
  return <div className="tasklist">{todoList.map(renderItem)}</div>;
};
