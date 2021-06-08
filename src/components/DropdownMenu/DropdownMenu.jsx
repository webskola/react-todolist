import { ReactComponent as SvgNewTask } from "../../assets/newtask.svg";
import { ReactComponent as SvgNewCategory } from "../../assets/newcategory.svg";
import "./DropdownMenu.css";
import { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";
import { nanoid } from "nanoid";
import { DEFAULT_NEW_TASK, getDefaultNewCategory } from "../../constants";
import randomColor from "randomcolor";

export const DropdownMenu = ({ setOpen }) => {
  const { setTodoList, todoList, setCategoryList, categoryList } = useContext(DataContext);
  const addTask = () => {
    const id = nanoid();
    const newList = [{ ...DEFAULT_NEW_TASK, id }, ...todoList];
    setTodoList(newList);
    setOpen(false);
  };
  const addCategory = () => {
    const id = nanoid();
    const newList = [{ ...getDefaultNewCategory(randomColor()), id }, ...categoryList];
    setCategoryList(newList);
    setOpen(false);
  };
  return (
    <div className="dropdown-menu">
      <div className="dropdown-menu__item">
        <button className="dropdown-menu__button" onClick={addTask}>
          <span className="dropdown-menu__button-span">
            <SvgNewTask />
            <div className="dropdown-menu__label">Task</div>
          </span>
        </button>
      </div>
      <div className="dropdown-menu__item">
        <button className="dropdown-menu__button" onClick={addCategory}>
          <span className="dropdown-menu__button-span">
            <SvgNewCategory />
            <span className="dropdown-menu__label">Category</span>
          </span>
        </button>
      </div>
    </div>
  );
};
