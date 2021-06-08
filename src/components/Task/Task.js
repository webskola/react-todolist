import { Checkbox } from "../Checkbox/Checkbox";
import { Input } from "../Input/Input";
import "./Task.css";
import { CategoryDot } from "../CategoryDot/CategoryDot";
import { Delete } from "../Delete/Delete";
import { useContext, useState } from "react";
import { EditingContext } from "../../providers/EditingProvider";
import { TASK_KEY } from "../../constants";
import { CategoryModal } from "../CategoryModal/CategoryModal";
import { DataContext } from "../../providers/DataProvider";

export const Task = ({ done, text, category, updateList, index, deleteTask, id }) => {
  const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
  const { isEditing } = useContext(EditingContext);
  const { categoryList } = useContext(DataContext);
  const currentCategory = categoryList.find((categoryItem) => categoryItem.id === category);
  const handleState = (checked) => {
    updateList(index, TASK_KEY.done, checked);
  };
  const handleText = (text) => {
    updateList(index, TASK_KEY.copytext, text);
  };
  const openCategoryModal = () => {
    setCategoryModalOpen(true);
  };
  const closeCategoryModal = () => {
    setCategoryModalOpen(false);
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
        {isCategoryModalOpen && (
          <CategoryModal activeCategoryId={category} onClick={handleCategory} closeModal={closeCategoryModal} />
        )}
      </div>
    </div>
  );
};
