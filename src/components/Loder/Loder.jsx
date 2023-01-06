import React from "react";
import loading from "../../Resources/loading.gif";
import "./Loder.css";
function Loader(props) {
  return (
    <div className="loader-container">
      <div className="spinner">
        <img src={loading} alt="loader" draggable={false} />
      </div>
    </div>
  );
}

export default Loader;
