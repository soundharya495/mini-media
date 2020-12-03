import React, { useState } from "react";
import "./popup.css";
import Popup from "./Popup";

const Home = () => {
  const [popup, setpopup] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setpopup(!popup);
        }}
      >
        Open
      </button>
      {popup && (
        <Popup
          close={() => {
            setpopup(false);
          }}
        />
      )}
    </div>
  );
};

export default Home;
