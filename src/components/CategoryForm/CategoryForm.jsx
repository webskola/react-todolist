import { nanoid } from "nanoid";
import { useContext, useRef, useState } from "react";
import { CATEGORY_KEY } from "../../constants";
import { DataContext } from "../../providers/DataProvider";
import "./CategoryForm.css";

const DEFAULT_CATEGORY_FORM_DATA = {
  id: undefined,
  color: "#ffffff",
  title: "",
};

export const CategoryForm = ({ currentCategory = DEFAULT_CATEGORY_FORM_DATA, onSubmit }) => {
  const { categoryList, setCategoryList } = useContext(DataContext);

  const inputRef = useRef(null);
  const [color, setColor] = useState(currentCategory.color);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const categoryData = {
      id: currentCategory.id || nanoid(),
      [CATEGORY_KEY.title]: inputRef.current.value,
      [CATEGORY_KEY.color]: color,
    };
    const newList = currentCategory.id
      ? categoryList.map((category) => (category.id === currentCategory.id ? categoryData : category))
      : [categoryData, ...categoryList];

    setCategoryList(newList);
    onSubmit();
  };
  return (
    <form onSubmit={handleSubmit} className="category-form">
      <div className="category-form__body">
        <span className="category-form__item">
          <input
            ref={inputRef}
            defaultValue={currentCategory.title}
            className="category-form__title"
            style={{ backgroundColor: color }}
          />
        </span>
        <span className="category-form__item">
          <span className="category-form__color" style={{ backgroundColor: color }}>
            <input type="color" value={color} onChange={handleColorChange} />
          </span>
        </span>
      </div>
      <div className="category-form__foot">
        <button className="button">Submit</button>
      </div>
    </form>
  );
};
