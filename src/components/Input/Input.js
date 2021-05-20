import { useRef } from "react";
import "./Input.css";

export const Input = ({ text, handleText }) => {
  const textRef = useRef(text);
  const handleInput = (e) => {
    handleText(e.target.innerText);
  };
  return (
    <div contentEditable className="input" suppressContentEditableWarning onInput={handleInput}>
      {textRef.current}
    </div>
  );
};
