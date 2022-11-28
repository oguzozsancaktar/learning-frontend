import { useState } from "react";
import "./DragNDrop.css";

const DragNDrop = () => {
  const [selectedPlace, setSelectedPlace] = useState(1);

  function dragStart(event) {
    event.target.className += " hold";
    setTimeout(() => (event.target.className = "invisible"), 0);
  }

  function dragEnd(event) {
    event.target.className = "fill";
  }

  function dragOver(event) {
    event.preventDefault();
  }

  function dragEnter(event) {
    event.preventDefault();
    event.target.className += " hovered";
  }

  function dragLeave(event) {
    event.target.className += "empty";
  }

  function dragDrop(event) {
    event.target.className = "empty";
    console.log(event.target);
    setSelectedPlace(event.target.id);
  }

  const fillElement = (
    <div
      className="fill"
      draggable="true"
      onDragStart={dragStart}
      onDragEnd={dragEnd}
    ></div>
  );

  return (
    <div className="container">
      <div
        id="1"
        className="empty"
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={dragDrop}
      >
        {selectedPlace === 1 && fillElement}
      </div>
      <div
        id="2"
        className="empty"
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={dragDrop}
      >
        {+selectedPlace === 2 && fillElement}
      </div>
      <div
        id="3"
        className="empty"
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={dragDrop}
      >
        {selectedPlace === 3 && fillElement}
      </div>
      <div
        id="4"
        className="empty"
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={dragDrop}
      >
        {+selectedPlace === 4 && fillElement}
      </div>
      <div
        id="5"
        className="empty"
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={dragDrop}
      >
        {+selectedPlace === 5 && fillElement}
      </div>
    </div>
  );
};

export default DragNDrop;
