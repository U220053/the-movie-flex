import "./DropDown.css";
import { useState } from "react";
function DropDown({ data, select, setId }) {
  const [selected, setSelected] = useState(select);
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="dropdown">
      <div
        className={dropDown ? "select select-clicked" : "select"}
        onClick={() => setDropDown(!dropDown)}
      >
        <span className="selected">{selected}</span>
        <div className={dropDown ? "caret caret-rotate" : "caret"}></div>
      </div>
      <ul className={dropDown ? "menu menu-open" : "menu"}>
        <li
          onClick={() => {
            setSelected(select);
            setDropDown(false);
            setId(null);
          }}
        >
          All
        </li>
        {data.map((g, i) => (
          <li
            key={g.id}
            onClick={() => {
              setSelected(g.name);
              setDropDown(false);
              setId(g.id);
            }}
            className={g.name === selected ? "active" : ""}
          >
            {g.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDown;
