import { useState, useEffect } from "react";
import "./App.css";

const DUMMY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80",
    alt: "first",
  },
  {
    src: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    alt: "second",
  },
  {
    src: "https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    alt: "third",
  },
  {
    src: "https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80",
    alt: "fourth",
  },
];

function App() {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [imgsStyle, setImgsStyle] = useState({
    transform: "translateX(-1500px)",
  });

  useEffect(() => {
    const run = () => {
      const newIdx = currentImgIdx + 1;
      changeImage(newIdx);
    };

    const interval = setInterval(run, 2000);
    return () => clearInterval(interval);
  }, [currentImgIdx]);

  const changeImage = (idx) => {
    if (idx > DUMMY_IMAGES.length - 1) {
      idx = 0;
    } else if (idx < 0) {
      idx = DUMMY_IMAGES.length - 1;
    }

    setCurrentImgIdx(idx);
    const newStyle = { transform: `translateX(${-idx * 500}px)` };
    setImgsStyle(newStyle);
  };

  const leftSlideHandler = () => {
    const newIdx = currentImgIdx - 1;

    changeImage(newIdx);
  };

  const rightSlideHandler = () => {
    const newIdx = currentImgIdx + 1;

    changeImage(newIdx);
  };

  return (
    <div className="carousel">
      <div className="image-container" id="imgs" style={imgsStyle}>
        {DUMMY_IMAGES.map((img, idx) => {
          return <img key={idx} src={img.src} alt={img.alt} />;
        })}
      </div>

      <div className="buttons-container">
        <button id="left" className="btn" onClick={leftSlideHandler}>
          Prev
        </button>
        <button id="right" className="btn" onClick={rightSlideHandler}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
