import React from "react";
import "../style/Separator.css";

function Seperator(props) {

    const {headName} = props;

  return (
    <div className="separator">
        <span className="separatorHead">{headName}</span>
    </div>
  );
}

export default Seperator;
