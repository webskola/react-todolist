import { useState } from "react";
import "./App.css";
import { Task } from "./components/Task/Task";

const todoList = JSON.parse(localStorage.getItem("todolist"));

function App() {
  const [list, setList] = useState(todoList);

  const updateList = (index, key, value) => {
    list[index][key] = value;
    const newList = [...list];
    setList(newList);
    localStorage.setItem("todolist", JSON.stringify(newList));
  };
  return (
    <div className="app">
      <div className="app__tasks">
        {list.map((item, key) => (
          <Task key={key} index={key} {...item} updateList={updateList} />
        ))}
      </div>
    </div>
  );
}

export default App;
