import React from "react";
import lavoriStyle from "../src/style/output/lavori.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import image1 from "../public/media/img/lavori/1.jpg";
import image2 from "../public/media/img/lavori/2.jpg";
import image3 from "../public/media/img/lavori/3.jpg";
import image4 from "../public/media/img/lavori/4.jpg";
import image5 from "../public/media/img/lavori/5.jpg";
import image6 from "../public/media/img/lavori/6.jpg";
import image7 from "../public/media/img/lavori/7.jpg";
import image8 from "../public/media/img/lavori/8.jpg";
import image9 from "../public/media/img/lavori/9.jpg";
import image10 from "../public/media/img/lavori/10.jpg";
import image11 from "../public/media/img/lavori/11.JPG";
import image12 from "../public/media/img/lavori/12.JPG";
import image13 from "../public/media/img/lavori/13.jpg";
import image14 from "../public/media/img/lavori/14.jpg";
import image15 from "../public/media/img/lavori/15.jpg";
import image16 from "../public/media/img/lavori/16.jpg";

function lavori() {
  const works = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
  ];

  return (
    <ul className={lavoriStyle.cont__lavori}>
      {works.map((work, index) => (
        <li key={index}>
          <Zoom>
            <img src={work} alt={index} width="300" height="250" />
          </Zoom>
        </li>
      ))}
    </ul>
  );
}

export default lavori;
