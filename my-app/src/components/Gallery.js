import React, { useState } from "react";
import "./Gallery.css";
import CloseIcon from "@mui/icons-material/Close";

import Img1 from "../img/gallery1.png";
import Img2 from "../img/gallery2.png";
import Img3 from "../img/gallery3.png";
import Img4 from "../img/gallery4.png";
import Img5 from "../img/gallery5.png";
import Img6 from "../img/gallery6.png";

const Gallery = () => {
  let data = [
    {
      id: 2,
      imgSrc: Img2,
      title: "Colors",
    },
    {
      id: 1,
      imgSrc: Img1,
      title: "Time",
    },
    {
      id: 3,
      imgSrc: Img3,
      title: "Brown Bear",
    },
    {
      id: 4,
      imgSrc: Img4,
      title: "Louis ",
    },
    {
      id: 5,
      imgSrc: Img5,
      title: "Merlin ",
    },
    {
      id: 6,
      imgSrc: Img6,
      title: "Dark Bear ",
    },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="mom" />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <p className="title">{item.title}</p>
              <img src={item.imgSrc} style={{ width: "100%" }} alt="mom" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
