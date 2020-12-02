import React, { useEffect, useState } from "react";
import Notif from "./Notif";
import "./Toast.css";

const Toast = () => {
  const [click, setClick] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCount(count - 1);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [count]);

  //const notification = <div className="toast">The challenge is crazy</div>;

  return (
    <div>
      <button
        id="btn"
        onClick={() => {
          setClick(true);
          setCount(count + 1);
        }}
      >
        Click Me...
      </button>
      {count > 0 && <Notif count={count} />}
    </div>
  );
};

export default Toast;
