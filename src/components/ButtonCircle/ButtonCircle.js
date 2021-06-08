import "./ButtonCircle.css";
import { ReactComponent as SvgPlus } from "../../assets/plus.svg";

export const ButtonCircle = ({ onClick, isActive }) => {
  return (
    <span className={!isActive ? "button-circle" : "button-circle--active"} onClick={onClick}>
      <SvgPlus className="button-circle__icon" />
    </span>
  );
};
