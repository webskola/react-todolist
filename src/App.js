import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import "./App.css";
import { ButtonCircle } from "./components/ButtonCircle/ButtonCircle";
import { Category } from "./components/Category/Category";
import { CategoryModal } from "./components/CategoryModal/CategoryModal";
import { EditButton } from "./components/EditButton/EditButton";
import { Task, taskKeys } from "./components/Task/Task";
import { categoryList } from "./data/categoryList";
import { EditingProvider } from "./providers/EditingProvider";

const DEFAULT_NEW_TASK = {
  [taskKeys.done]: false,
  [taskKeys.copytext]: "",
  [taskKeys.category]: "",
};

const todoList = JSON.parse(localStorage.getItem("todolist"));

function App() {
  const [list, setList] = useState(todoList || []);
  const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
  const [activeTask, setActiveTask] = useState();
  const [activeCategoryId, setActiveCategoryId] = useState();

  const saveList = (newList) => {
    setList(newList);
    localStorage.setItem("todolist", JSON.stringify(newList));
  };
  const updateList = (index, key, value) => {
    list[index][key] = value;
    saveList([...list]);
  };
  const addTask = () => {
    const id = nanoid();
    const newList = [{ ...DEFAULT_NEW_TASK, id }, ...list];
    saveList(newList);
  };
  const deleteTask = (id) => {
    const newList = list.filter((item) => item.id !== id);
    saveList(newList);
  };
  const renderItem = (item, key) => (
    <Task
      key={item.id}
      index={key}
      {...item}
      updateList={updateList}
      deleteTask={deleteTask}
      setCategoryModalOpen={setCategoryModalOpen}
      setActiveTask={setActiveTask}
    />
  );
  const closeCategoryModal = () => {
    setCategoryModalOpen(false);
  };
  const changeCategory = (categoryId) => {
    updateList(activeTask.index, taskKeys.category, categoryId);
    closeCategoryModal();
  };
  const renderCategoryItem = (item) => (
    <Category
      {...item}
      key={item.id}
      setActiveCategoryId={setActiveCategoryId}
      isActive={item.id === activeCategoryId}
    />
  );

  useEffect(() => {
    if (!activeCategoryId) {
      setList(todoList);
      return;
    }
    const newList = todoList.filter((item) => item.category === activeCategoryId);
    setList(newList);
  }, [activeCategoryId]);
  return (
    <EditingProvider>
      <div className="app">
        <div className="app__header">
          <h1 className="app__duedate">Today</h1>
          <EditButton />
        </div>
        <div className="app__box">
          <div className="app__tasks">{list.map(renderItem)}</div>
          <div className="app__categories">
            <div className="app__categories-head">Categories</div>
            <div className="app__categories-list">{categoryList.map(renderCategoryItem)}</div>
          </div>
        </div>
        <ButtonCircle onClick={addTask} />
        {isCategoryModalOpen && (
          <CategoryModal
            activeCategoryId={activeTask.category}
            onClick={changeCategory}
            closeModal={closeCategoryModal}
          />
        )}
      </div>
    </EditingProvider>
  );
}

export default App;
