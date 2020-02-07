import React from "react";
import "../styles/spinner.css";

function Loader(props) {
  return (
    <img
      src={require("../images/arobs_logo.png")}
      alt={"spinner"}
      width={props.width}
      className="loader"
    />
  );
}

export default Loader;
