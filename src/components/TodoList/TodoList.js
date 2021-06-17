import { useContext } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { DataContext } from "../../providers/DataProvider";
import { Task } from "../Task/Task";
import "./TodoList.css";

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [current] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, current);
  return result;
};

export const TodoList = ({ activeCategoryId }) => {
  const { todoList, setTodoList } = useContext(DataContext);

  const onDragEnd = ({ source, destination }) => {
    if (!destination) {
      return;
    }
    const items = reorder(todoList, source.index, destination.index);
    setTodoList(items);
  };

  const updateList = (index, key, value) => {
    todoList[index][key] = value;
    setTodoList([...todoList]);
  };
  const deleteTask = (id) => {
    const newList = todoList.filter((item) => item.id !== id);
    setTodoList(newList);
  };
  const renderItem = (item, key) => {
    if (activeCategoryId && activeCategoryId !== item.category) return null;
    return (
      <Draggable key={item.id} draggableId={item.id} index={key}>
        {(provided, snapshot) => {
          const { transform } = provided.draggableProps.style;
          const result = transform ? transform.match(/, (.+)\)/) : 0;

          return (
            <div
              className="dnd__item"
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={{
                ...provided.draggableProps.style,
                transform: result ? `translate(0, ${result[1]})` : "none",
              }}
            >
              <Task key={item.id} index={key} {...item} updateList={updateList} deleteTask={deleteTask} />
            </div>
          );
        }}
      </Draggable>
    );
  };
  return (
    <div className="tasklist">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoList.map(renderItem)}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
