import "./InsectSelection.css";

const InsectSelection = (props) => {
  return (
    <div className="screen">
      <h1>What is your "favorite" insect?</h1>
      <ul className="insects-list">
        <li>
          <button className="choose-insect-btn" onClick={props.onStageChange}>
            <p>Fly</p>
            <img
              src="http://pngimg.com/uploads/fly/fly_PNG3946.png"
              alt="fly"
            />
          </button>
        </li>
        <li>
          <button className="choose-insect-btn" onClick={props.onStageChange}>
            <p>Mosquito</p>
            <img
              src="http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png"
              alt="mosquito"
            />
          </button>
        </li>
        <li>
          <button className="choose-insect-btn" onClick={props.onStageChange}>
            <p>Spider</p>
            <img
              src="http://pngimg.com/uploads/spider/spider_PNG12.png"
              alt="spider"
            />
          </button>
        </li>
        <li>
          <button className="choose-insect-btn" onClick={props.onStageChange}>
            <p>Roach</p>
            <img
              src="http://pngimg.com/uploads/roach/roach_PNG12163.png"
              alt="roach"
            />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default InsectSelection;
