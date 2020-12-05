import React, { useState, useEffect } from "react";
import "./Darkmode.css";

const Darkmode = () => {
  const [mode, setmode] = useState(false);
  useEffect(() => {
    const docBody = document.querySelector("body");
    docBody.classList.toggle("dark");
  }, [mode]);
  return (
    <div>
      <div>
        <input
          type="checkbox"
          label="mode"
          onChange={() => {
            setmode(!mode);
            console.log(mode);
          }}
        />
      </div>
      <h1>Be the one you always dream about</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum quae
        nihil consectetur repellat animi est aspernatur nemo tempora debitis
        sequi consequatur doloribus libero, cumque vero distinctio.
        Exercitationem eveniet aliquam obcaecati.
      </p>
    </div>
  );
};

export default Darkmode;
