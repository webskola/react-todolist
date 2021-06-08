import { useContext, useState } from "react";
import { DataContext } from "../../providers/DataProvider";
import { CategoryList } from "../CategoryList/CategoryList";
import { EditButton } from "../EditButton/EditButton";
import { New } from "../New/New";
import { TodoList } from "../TodoList/TodoList";
import "./Root.css";

export const Root = () => {
  const [activeCategoryId, setActiveCategoryId] = useState();
  const { categoryList } = useContext(DataContext);
  const activeCategory = categoryList.find((item) => item.id === activeCategoryId);

  return (
    <div className="root">
      <div className="root__header">
        <h1 className="root__duedate">{activeCategory ? activeCategory.title : "Today"}</h1>
        <EditButton />
      </div>
      <div className="root__box">
        <div className="root__tasks">
          <TodoList activeCategoryId={activeCategoryId} />
        </div>
        <div className="root__categories">
          <CategoryList setActiveCategoryId={setActiveCategoryId} activeCategoryId={activeCategoryId} />
        </div>
      </div>
      <New />
    </div>
  );
};
