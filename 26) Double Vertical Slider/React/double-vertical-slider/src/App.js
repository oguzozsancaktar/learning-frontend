import { useState, useRef } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import "./App.css";

const DUMMY_TEXTS = [
  {
    title: "Nature flower",
    text: "all in pink",
    style: { backgroundColor: "#fd3555" },
  },
  {
    title: "Bluuue Sky",
    text: "with it's mountains",
    style: { backgroundColor: "#2a86ba" },
  },
  {
    title: "Lonely castle",
    text: "in the wilderness",
    style: { backgroundColor: "#252e33" },
  },
  {
    title: "Flying eagle",
    text: "in the sunset",
    style: { backgroundColor: "#ffb866" },
  },
];

const DUMMY_IMAGES = [
  {
    id: 1,
    style: {
      backgroundImage:
        "url(https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80)",
    },
  },
  {
    id: 2,
    style: {
      backgroundImage:
        "url(https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80)",
    },
  },
  {
    id: 3,
    style: {
      backgroundImage:
        "url(https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80",
    },
  },
  {
    id: 4,
    style: {
      backgroundImage:
        "url(https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80)",
    },
  },
];

function App() {
  const slideCount = DUMMY_TEXTS.length;
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [leftSliderStyle, setLeftSliderStyle] = useState({
    top: `-${(slideCount - 1) * 100}vh`,
  });
  const [rightSliderStyle, setRightSliderStyle] = useState();

  const containerRef = useRef();

  const upHandler = () => {
    changeSlide("up");
  };

  const downHandler = () => {
    changeSlide("down");
  };

  const changeSlide = (direction) => {
    const sliderHeight = containerRef.current.clientHeight;
    let active = activeSlideIndex;
    if (direction === "up") {
      active++;
      if (active > slideCount - 1) {
        active = 0;
      }
    } else if (direction === "down") {
      active--;
      if (active < 0) {
        active = slideCount - 1;
      }
    }

    setActiveSlideIndex(active);
    setRightSliderStyle({
      transform: `translateY(-${activeSlideIndex * sliderHeight}px)`,
    });
    setLeftSliderStyle((prevValue) => {
      return {
        ...prevValue,
        transform: `translateY(${activeSlideIndex * sliderHeight}px)`,
      };
    });
  };

  return (
    <div className="slider-container" ref={containerRef}>
      <div className="left-slide" style={leftSliderStyle}>
        {DUMMY_TEXTS.map((text) => {
          return (
            <div key={text.title} style={text.style}>
              <h1>{text.title}</h1>
              <p>{text.text}</p>
            </div>
          );
        })}
      </div>
      <div className="right-slide" style={rightSliderStyle}>
        {DUMMY_IMAGES.map((image) => {
          return <div key={image.id} style={image.style}></div>;
        })}
      </div>
      <div className="action-buttons">
        <button className="down-button" onClick={downHandler}>
          <i>
            <BsArrowDown />
          </i>
        </button>
        <button className="up-button" onClick={upHandler}>
          <i>
            <BsArrowUp />
          </i>
        </button>
      </div>
    </div>
  );
}
export default App;
