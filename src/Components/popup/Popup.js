import React from "react";

const Popup = (props) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <button onClick={props.close}>X</button>
        <p>Hey there!! You are jus awesome</p>
      </div>
    </div>
  );
};

export default Popup;
