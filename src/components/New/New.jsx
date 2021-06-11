import { useState } from "react";
import { ButtonCircle } from "../ButtonCircle/ButtonCircle";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
import "./New.css";

export const New = () => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };
  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <div className={!isOpen ? "new" : "new--open"}>
      <div className="new__action">
        <ButtonCircle onClick={handleClick} isActive={isOpen} />
        <div className={!isOpen ? "new__menu" : "new__menu--open"}>
          <DropdownMenu closeMenu={closeMenu} />
        </div>
      </div>
    </div>
  );
};
