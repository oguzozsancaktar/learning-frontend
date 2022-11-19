import { useState } from "react";
import { BiAlignLeft, BiWindowClose } from "react-icons/bi";
import classes from "./Content.module.css";

const Content = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  const innerStyle = isOpen
    ? `${classes.container} ${classes["show-nav"]}`
    : classes.container;

  return (
    <div className={innerStyle}>
      <div className={classes["circle-container"]}>
        <div className={classes.circle}>
          <button className={classes.close} onClick={closeHandler}>
            <BiWindowClose />
          </button>
          <button className={classes.open} onClick={openHandler}>
            <BiAlignLeft />
          </button>
        </div>
      </div>
      <div className={classes.content}>
        <h1>Amazing Article</h1>
        <small>Ooz O.</small>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
          architecto reprehenderit praesentium voluptates beatae possimus autem
          maxime modi maiores nesciunt officia sunt adipisci quam minus ipsum,
          ullam ipsam qui ab, alias accusamus quidem! Magni doloribus illo,
          autem eum ad maxime nihil perferendis temporibus, ipsam aspernatur,
          pariatur est nobis inventore. Necessitatibus doloremque laudantium
          reiciendis, aspernatur incidunt quo sit eveniet ipsam asperiores minus
          ad magni tenetur laborum quam soluta, ab magnam alias maxime
          explicabo! Assumenda suscipit ducimus, error, totam veniam iusto
          accusantium tempora quisquam explicabo fugiat nisi dolor ab quae
          nulla, nesciunt ipsum adipisci laborum illo nobis! Iste deserunt
          repellat delectus at!
        </p>
        <h3>My Dog</h3>
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*"
          alt="doggy"
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia,
          esse labore beatae culpa, quidem modi quam enim vero pariatur quo eos.
          Ipsa molestiae laboriosam quas veniam suscipit, rerum temporibus,
          minima consectetur, porro sapiente officiis saepe dolore placeat
          earum! Labore, id sunt. Asperiores, magnam. Error, ducimus, molestiae
          sequi labore ad dolorem placeat praesentium iste, cumque debitis
          aperiam. Hic aliquam ea voluptate vitae quisquam pariatur vel tempora?
          Sapiente fugit architecto ducimus praesentium, quo eaque nisi dolore
          at?
        </p>
      </div>
    </div>
  );
};

export default Content;
