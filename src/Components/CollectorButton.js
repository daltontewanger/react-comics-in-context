import React, { useContext } from "react";
import StylesContext from "./SylesContext";

function CollectorButton() {
  const buttonStyling = React.useContext(StylesContext);

  return (
    <div>
      <button style={buttonStyling}>Click Here!</button>
    </div>
  );
}

export default CollectorButton;
