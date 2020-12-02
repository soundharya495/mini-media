import React from "react";

const Notif = (props) => {
  console.log(props.count);
  const notif = [];
  for (var i = 0; i < props.count; i++) {
    notif.push(<div className="toast">The challenge is crazy</div>);
  }
  return <div className="toast">{notif}</div>;
};

export default Notif;
