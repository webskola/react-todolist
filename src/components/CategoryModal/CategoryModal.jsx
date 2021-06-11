import { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";
import { CategoryDot } from "../CategoryDot/CategoryDot";
import { CheckIcon } from "../CheckIcon/CheckIcon";
import { Modal } from "../Modal/Modal";
import "./CategoryModal.css";

const CategoryItem = ({ id, title, color, isActive, onClick }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick(id);
  };
  return (
    <div className="category-item" onClick={handleClick}>
      <div className="category-item--checkbox">
        <CheckIcon checked={isActive} />
      </div>
      <div className="category-item__title">{title}</div>
      <div className="category-item__dot">
        <CategoryDot color={color} />
      </div>
    </div>
  );
};

export const CategoryModal = ({ activeCategoryId, onClick, closeModal }) => {
  const { categoryList } = useContext(DataContext);
  const renderCategory = (category) => (
    <CategoryItem key={category.id} isActive={activeCategoryId === category.id} onClick={onClick} {...category} />
  );
  return (
    <Modal title="Select Category" closeModal={closeModal}>
      <div className="category-modal__list">{categoryList.map(renderCategory)}</div>
    </Modal>
  );
};
