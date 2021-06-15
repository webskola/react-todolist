import { forwardRef } from "react";
import "./DatepickerIcon.css";
import { ReactComponent as SvgDatepicker } from "../../assets/datepicker.svg";

export const DatepickerIcon = forwardRef(({ onClick }, ref) => (
  <button onClick={onClick} ref={ref} className="datepicker-icon">
    <SvgDatepicker />
  </button>
));
