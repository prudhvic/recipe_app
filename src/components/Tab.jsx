import React from "react";
import { BsFillFilterCircleFill } from "react-icons/bs";
import { BiSort } from "react-icons/bi";
const Tab = () => {
  return (
    <div>
      <ul className="tabs">
        <li>
          <BsFillFilterCircleFill />
        </li>
        <li>
          <BiSort />
        </li>
      </ul>
    </div>
  );
};

export default Tab;
