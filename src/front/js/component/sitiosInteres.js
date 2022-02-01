import React, { useState, useRef, useEffect } from "react";

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

//your images
const images = [
  {
    imgUrl:
      "https://i.picsum.photos/id/340/500/200.jpg?hmac=ZqU8NpRqjAmMX6qn-bq1TnIbdzElOV7jjUoTy6pQQUM",
  },
  {
    imgUrl:
      "https://i.picsum.photos/id/729/500/200.jpg?hmac=hbXiJl8vDO6fRuaa2-9ZqF2F55MG-bIitwD-fLxfn6o",
  },
  {
    imgUrl:
      "https://i.picsum.photos/id/741/500/200.jpg?hmac=srxleheRKYbbmJYuFTQV52k-ySXvuCwP9M9vQ7vrjQU",
  },
  {
    imgUrl:
      "https://i.picsum.photos/id/65/500/200.jpg?hmac=Wnfco1TbUmHhDDYWRTRSfY3H82KHCAEatLirl1QdJJU",
  },
  {
    imgUrl:
      "https://i.picsum.photos/id/218/500/200.jpg?hmac=zrtE43YtBDGc4GvmQmzL6aj0IU-3t3kHJUR5JUC5faI",
  },
  {
    imgUrl:
      "https://i.picsum.photos/id/81/500/200.jpg?hmac=WxvV22kLuuIVvym00EsUS2OAjMBr5Cjkk2o397Sg3u0",
  },
  {
    imgUrl:
      "https://i.picsum.photos/id/525/500/200.jpg?hmac=E3JxoChGh1U9RnlNx2f72AQZz_naC04Au8v1oE_FkZE",
  },
  {
    imgUrl:
      "https://i.picsum.photos/id/347/500/200.jpg?hmac=fnbWS6nc610hpWu3c54OQBoPsYPKl1ygW4BB9QM2oDc",
  },
  {
    imgUrl:
      "https://i.picsum.photos/id/676/500/200.jpg?hmac=no_hbCU22yltn4J3Bbf_Y0F6YSLdQ84sRUiZKlWlA18",
  },
];

const Sitios = (props) => {
  const { images } = props;
  const len = images.length;
  const [activeIndex, setActive] = useState(0);

  //Autoplay
  useInterval(() => {
    setActive((activeIndex + 1) % len);
  }, 5000);

  //Return style according to index
  const getStyle = (idx) => {
    //Counting from the left, the distance between idx and currentKey
    const distance_left = idx - activeIndex;
    //Counting from the right, the distance between idx and currentKey
    const distance_right =
      distance_left > 0 ? distance_left - len : distance_left + len;
    //Select the distance with the smallest absolute value
    const distance =
      Math.abs(distance_left) > Math.abs(distance_right)
        ? distance_right
        : distance_left;

    const styleObj = {};

    if (distance === 0) {
      //activeIndex
      styleObj.left = "33.3%";
      styleObj.zIndex = 999;
      styleObj.opacity = 1;
      styleObj.transform = "scale(1)";
    } else {
      styleObj.left =
        distance > 0 ? `${16.7 + distance * 40}%` : `${50 + distance * 40}%`;
    }

    //The distance is not less than 2, hide
    if (Math.abs(distance) >= 2) {
      styleObj.opacity = 0;
      styleObj.transform = "scale(0)";
    }

    return styleObj;
  };

  return (
    <div className="carousel">
      <div className="card-container">
        {images.map(({ imgUrl }, index) => (
          <div
            className="card"
            key={index}
            onClick={() => setActive(index)}
            style={getStyle(index)}
          >
            <img src={imgUrl} />
          </div>
        ))}
      </div>
      <div className="rects">
        {images.map((value, index) => (
          <div
            key={index}
            className={activeIndex === index ? "rect active" : "rect"}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default Sitios;
