import "./CategoryModal.css";
import { CategoryDot } from "../CategoryDot/CategoryDot";
import { CheckIcon } from "../CheckIcon/CheckIcon";
import { CloseButton } from "../CloseButton/CloseButton";
import { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";

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
    <div className="category-modal">
      <div className="category-modal__box">
        <div className="category-modal__head">
          <h4 className="category-modal__title">Select category</h4>
          <div className="category-modal__close">
            <CloseButton onClick={closeModal} />
          </div>
        </div>
        <div className="category-modal__list">{categoryList.map(renderCategory)}</div>
      </div>
    </div>
  );
};
