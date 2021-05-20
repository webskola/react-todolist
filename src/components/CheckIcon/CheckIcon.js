import "./CheckIcon.css";
import { ReactComponent as SvgCheck } from "../../assets/check.svg";

export const CheckIcon = ({ checked }) => {
  return (
    <span className={!checked ? "checkbox__symbol" : "checkbox__symbol--checked"}>
      <SvgCheck className="checkbox__icon" />
    </span>
  );
};
