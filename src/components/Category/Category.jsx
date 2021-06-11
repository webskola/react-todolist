import { useContext } from "react";
import { EditingContext } from "../../providers/EditingProvider";
import { Delete } from "../Delete/Delete";
import "./Category.css";

export const Category = ({ id, title, color, setActiveCategoryId, isActive }) => {
  const { isEditing } = useContext(EditingContext);
  const handleClick = () => {
    setActiveCategoryId(!isActive ? id : undefined);
  };
  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <div className="category">
      <div className={`category__action-item-back ${isEditing && "category__action-item-back--flipped"}`}>
        <Delete onClick={handleDelete} />
      </div>
      <div className="category__box" style={{ backgroundColor: color }} onClick={handleClick}>
        <div className="category__title">{title}</div>
      </div>
    </div>
  );
};
