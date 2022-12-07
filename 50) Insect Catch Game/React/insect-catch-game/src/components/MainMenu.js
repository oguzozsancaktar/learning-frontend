import "./MainMenu.css";

const MainMenu = (props) => {
  return (
    <div className="screen">
      <h1>Catch The Insect</h1>
      <button className="btn" id="start-btn" onClick={props.onStageChange}>
        Play Game
      </button>
    </div>
  );
};

export default MainMenu;
