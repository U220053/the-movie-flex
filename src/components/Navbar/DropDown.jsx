import "./DropDown.css";
import { useState } from "react";
function DropDown() {
  const [selected, setSelected] = useState("Genra");
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
        {genras.map((g, i) => (
          <li
            key={g.id}
            onClick={() => {
              setSelected(g.name);
              setDropDown(false);
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
const genras = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];
