import { useState, useEffect } from "react";
import Slide from "./Slide";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import classes from "./SlideContainer.module.css";

const DUMMY_SLIDES = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1669172460356-1080d53199e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
    isActive: true,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1669214710318-bff7426024d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    isActive: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1669218180914-aa25c243eb4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    isActive: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1669178792498-332864ef96e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    isActive: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1669172461073-a21821a38e46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
    isActive: false,
  },
];

const SlideContainer = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const setBgToBody = () => {
      document.body.style.backgroundImage = `url(${DUMMY_SLIDES[activeSlide].url})`;
    };

    setBgToBody();
  }, [activeSlide]);

  const rightArrowClickHandler = () => {
    let activeIdx = DUMMY_SLIDES.findIndex(findActiveSlide);

    DUMMY_SLIDES[activeIdx].isActive = false;
    activeIdx++;

    if (activeIdx > DUMMY_SLIDES.length - 1) {
      activeIdx = 0;
    }

    DUMMY_SLIDES[activeIdx].isActive = true;

    setActiveSlide(activeIdx);
  };

  const leftArrowClickHandler = () => {
    let activeIdx = DUMMY_SLIDES.findIndex(findActiveSlide);

    DUMMY_SLIDES[activeIdx].isActive = false;
    activeIdx--;

    if (activeIdx < 0) {
      activeIdx = DUMMY_SLIDES.length - 1;
    }

    DUMMY_SLIDES[activeIdx].isActive = true;

    setActiveSlide(activeIdx);
  };

  const findActiveSlide = (slide) => {
    return slide.isActive;
  };

  return (
    <div className={classes["slider-container"]}>
      {DUMMY_SLIDES.map((slide) => {
        return <Slide key={slide.id} slide={slide} />;
      })}

      <button
        className={`${classes.arrow} ${classes["left-arrow"]}`}
        id="left"
        onClick={leftArrowClickHandler}
      >
        <i>
          <BiLeftArrowAlt />
        </i>
      </button>

      <button
        className={`${classes.arrow} ${classes["right-arrow"]}`}
        id="right"
        onClick={rightArrowClickHandler}
      >
        <BiRightArrowAlt />
      </button>
    </div>
  );
};

export default SlideContainer;
