import { useContext } from "react";
import "./CategoryList.css";
import { DataContext } from "../../providers/DataProvider";
import { Category } from "../Category/Category";

export const CategoryList = ({ setActiveCategoryId, activeCategoryId }) => {
  const { categoryList } = useContext(DataContext);
  const renderCategoryItem = (item) => (
    <Category
      {...item}
      key={item.id}
      setActiveCategoryId={setActiveCategoryId}
      isActive={item.id === activeCategoryId}
    />
  );
  return (
    <div className="category-list">
      <div className="category-list__head">Categories</div>
      <div className="category-list__body">{categoryList.map(renderCategoryItem)}</div>
    </div>
  );
};
