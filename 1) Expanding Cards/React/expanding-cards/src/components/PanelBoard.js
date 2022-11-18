import Panel from "./Panel";
import { useState } from "react";
import classes from "./PanelBoard.module.css";

const DUMMY_PICTURE_LIST = [
  {
    title: "Zile",
    url: "https://site.zile.bel.tr/wp-content/uploads/2021/01/zile-genel-scaled.jpg",
  },
  {
    title: "Tokat",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Tokat_%C5%9Fehir_panoramas%C4%B1_2012.JPG/1280px-Tokat_%C5%9Fehir_panoramas%C4%B1_2012.JPG",
  },
  {
    title: "Turhal",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Turhal_bridge.JPG/800px-Turhal_bridge.JPG",
  },
  {
    title: "Niksar",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Niksar%2CKaleSW.jpg/1024px-Niksar%2CKaleSW.jpg",
  },
  {
    title: "Almus",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/92/ALMUS_BARAJI_TOKAT_-_panoramio.jpg",
  },
];

const PanelBoard = () => {
  const [activePanel, setActivePanel] = useState("");

  const activePanelHandler = (panelKey) => {
    if (panelKey === activePanel) {
      setActivePanel("");
    } else {
      setActivePanel(panelKey);
    }
  };

  return (
    <div className={classes.container}>
      {DUMMY_PICTURE_LIST.map((panel) => {
        return (
          <Panel
            key={panel.title}
            title={panel.title}
            url={panel.url}
            isActive={activePanel === panel.title ? true : false}
            onClick={activePanelHandler}
          />
        );
      })}
    </div>
  );
};

export default PanelBoard;
