import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useModal } from "react-modal-hook";
import { TASK_KEY } from "../../constants";
import { DataContext } from "../../providers/DataProvider";
import { EditingContext } from "../../providers/EditingProvider";
import { CategoryDot } from "../CategoryDot/CategoryDot";
import { CategoryModal } from "../CategoryModal/CategoryModal";
import { Checkbox } from "../Checkbox/Checkbox";
import { DatepickerIcon } from "../DatepickerIcon/DatepickerIcon";
import { Delete } from "../Delete/Delete";
import { Input } from "../Input/Input";
import "./Task.css";
import { ReactComponent as SvgCalendar } from "../../assets/calendar.svg";
import { ReactComponent as SvgClock } from "../../assets/clock.svg";

const formatDate = (date) => {
  const currentMonth = date.getMonth() + 1;
  const month = currentMonth < 10 ? `0${currentMonth}` : currentMonth;
  return `${date.getDate()}.${month}`;
};
const formatTime = (date) => {
  const currentMinutes = date.getMinutes();
  const minutes = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;
  return `${date.getHours()}:${minutes}`;
};

export const Task = ({ done, text, category, datetime, updateList, index, deleteTask, id }) => {
  const { isEditing, newTaskId } = useContext(EditingContext);
  const { categoryList } = useContext(DataContext);
  const [date, setDate] = useState(datetime ? new Date(datetime) : undefined);

  const [openCategoryModal, closeCategoryModal] = useModal(() => (
    <CategoryModal activeCategoryId={category} onClick={handleCategory} closeModal={closeCategoryModal} />
  ));

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
  const onDateChange = (newDate) => {
    setDate(newDate);
    updateList(index, TASK_KEY.datetime, newDate.toString());
  };

  const currentCategory = categoryList.find((categoryItem) => categoryItem.id === category);
  const taskDate = date ? formatDate(date) : "";
  const taskTime = date ? formatTime(date) : "";
  const isLate = date < new Date();

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
        <Input text={text} handleText={handleText} newTask={id === newTaskId} />
        {date && (
          <div className={`task__due ${isLate && "task__due--late"}`}>
            <span className="task__due-item">
              <SvgCalendar className="task__due-icon" />
              {taskDate}
            </span>
            <span className="task__due-item">
              <SvgClock className="task__due-icon" />
              {taskTime}
            </span>
          </div>
        )}
      </div>
      <div className={`task__datepicker ${isEditing && "task__datepicker--active"}`}>
        <DatePicker selected={date} showTimeSelect onChange={onDateChange} customInput={<DatepickerIcon />} />
      </div>
      <div className="task__category" onClick={openCategoryModal}>
        {<CategoryDot color={currentCategory && currentCategory.color} />}
      </div>
    </div>
  );
};
