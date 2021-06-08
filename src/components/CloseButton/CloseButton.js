import "./CloseButton.css";
import { ReactComponent as SvgPlus } from "../../assets/plus.svg";

export const CloseButton = ({ onClick }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick();
  };
  return (
    <span className="close-button" onClick={handleClick}>
      <SvgPlus className="close-button__icon" />
    </span>
  );
};
