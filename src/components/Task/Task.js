import { Checkbox } from "../Checkbox/Checkbox";
import { Input } from "../Input/Input";
import "./Task.css";
import { categoryList } from "../../data/categoryList";
import { CategoryDot } from "../CategoryDot/CategoryDot";

export const Task = ({ done, text, category, updateList, index }) => {
  const currentCategory = categoryList.find((categoryItem) => categoryItem.id === category);
  const handleState = (checked) => {
    updateList(index, "done", checked);
  };
  const handleText = (text) => {
    updateList(index, "text", text);
  };
  return (
    <div className="task">
      <div className="task__checkbox">
        <Checkbox done={done} handleState={handleState} />
      </div>
      <div className="task__input">
        <Input text={text} handleText={handleText} />
      </div>
      <div className="task__category">{currentCategory && <CategoryDot color={currentCategory.color} />}</div>
    </div>
  );
};
