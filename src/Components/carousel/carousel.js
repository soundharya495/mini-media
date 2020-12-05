import React, { useEffect, useState } from "react";
import "./carousel.css";
import beach from "../../img/beach.jpg";
import nature from "../../img/nature.jpg";
import travel from "../../img/travel.jpg";
import wildlife from "../../img/wildlife.jpg";

const Carousel = () => {
  let imgs = [beach, nature, travel, wildlife];
  const [imgPic, setimgPic] = useState("");
  const [idx, setidx] = useState(0);
  useEffect(() => {
    if (idx >= imgs.length) {
      setidx(0);
    } else {
      const timeout = setTimeout(() => {
        setidx(idx + 1);
      }, 2000);
    }
    setimgPic(imgs[idx]);
  }, [idx]);

  return (
    <div className="carousel">
      <div className="image-container">
        <img src={imgPic} alt={idx} />
      </div>
    </div>
  );
};

export default Carousel;
