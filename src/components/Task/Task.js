import { useContext } from "react";
import { useModal } from "react-modal-hook";
import { TASK_KEY } from "../../constants";
import { DataContext } from "../../providers/DataProvider";
import { EditingContext } from "../../providers/EditingProvider";
import { CategoryDot } from "../CategoryDot/CategoryDot";
import { CategoryModal } from "../CategoryModal/CategoryModal";
import { Checkbox } from "../Checkbox/Checkbox";
import { Delete } from "../Delete/Delete";
import { Input } from "../Input/Input";
import "./Task.css";

export const Task = ({ done, text, category, updateList, index, deleteTask, id }) => {
  const [openCategoryModal, closeCategoryModal] = useModal(() => (
    <CategoryModal activeCategoryId={category} onClick={handleCategory} closeModal={closeCategoryModal} />
  ));

  const { isEditing } = useContext(EditingContext);
  const { categoryList } = useContext(DataContext);
  const currentCategory = categoryList.find((categoryItem) => categoryItem.id === category);
  const handleState = (checked) => {
    updateList(index, TASK_KEY.done, checked);
  };
  const handleText = (text) => {
    updateList(index, TASK_KEY.copytext, text);
  };
  const handleCategory = (value) => {
    updateList(index, TASK_KEY.category, value);
    closeCategoryModal();
  };
  const handleDelete = () => {
    deleteTask(id);
  };
  return (
    <div className="task">
      <div className="task__action">
        <div className={`task__action-item ${isEditing && "task__action-item--flipped"}`}>
          <Checkbox done={done} handleState={handleState} />
        </div>
        <div className={`task__action-item-back ${isEditing && "task__action-item-back--flipped"}`}>
          <Delete onClick={handleDelete} />
        </div>
      </div>
      <div className="task__input">
        <Input text={text} handleText={handleText} />
      </div>
      <div className="task__category" onClick={openCategoryModal}>
        {<CategoryDot color={currentCategory && currentCategory.color} />}
      </div>
    </div>
  );
};
