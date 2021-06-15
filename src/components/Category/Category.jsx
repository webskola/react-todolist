import { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";
import { EditingContext } from "../../providers/EditingProvider";
import { Delete } from "../Delete/Delete";
import "./Category.css";
import { ReactComponent as SvgEdit } from "../../assets/edit.svg";
import { useModal } from "react-modal-hook";
import { Modal } from "../Modal/Modal";
import { CategoryForm } from "../CategoryForm/CategoryForm";

export const Category = ({ id, title, color, setActiveCategoryId, isActive }) => {
  const { isEditing } = useContext(EditingContext);
  const { categoryList, setCategoryList } = useContext(DataContext);
  const handleClick = () => {
    if (isEditing) return;
    setActiveCategoryId(!isActive ? id : undefined);
  };
  const handleDelete = () => {
    const newList = categoryList.filter((item) => item.id !== id);
    setCategoryList(newList);
  };
  const [showCategoryModal, hideCategoryModal] = useModal(() => {
    return (
      <Modal title="Add Category" closeModal={hideCategoryModal}>
        <CategoryForm currentCategory={{ id, title, color }} onSubmit={hideCategoryModal} />
      </Modal>
    );
  });
  const handleEdit = (e) => {
    e.stopPropagation();
    showCategoryModal();
  };
  return (
    <div className="category">
      <div className={`category__action-item-back ${isEditing && "category__action-item-back--flipped"}`}>
        <Delete onClick={handleDelete} />
      </div>
      <div
        className={`category__box ${isEditing && "category__box--disabled"}`}
        style={{ backgroundColor: color }}
        onClick={handleClick}
      >
        <div className="category__title">{title}</div>
        <div className={`category__edit ${isEditing && "category__edit--active"}`} onClick={handleEdit}>
          <SvgEdit />
        </div>
      </div>
    </div>
  );
};
