import React, { useState } from "react";

const Typewriter = () => {
  const textfull = "Do what you love";
  const [text, settext] = useState("");
  let index = 0;
  const wtext = () => {
    settext(textfull.slice(0, index));
    index++;
    if (index > textfull.length) {
      index = 0;
    }
  };
  React.useEffect(() => {
    setInterval(wtext, 5000);
  }, [text]);

  return <div>{text}</div>;
};

export default Typewriter;
