import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tags, setTags] = useState([]);
  const [selectTag, setSelectTag] = useState([]);

  useEffect(() => {
    const randomSelect = () => {
      const times = 30;

      const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        if (randomTag !== undefined) {
          highlightTag(randomTag);
          setTimeout(() => {
            unHighlightTag(randomTag);
          }, 100);
        }
      }, 100);

      setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
          const randomTag = pickRandomTag();

          highlightTag(randomTag);
        }, 100);
      }, times * 100);
    };

    const pickRandomTag = () => {
      return selectTag[Math.floor(Math.random() * selectTag.length)];
    };

    const highlightTag = (tag) => {
      const newState = selectTag.map((item) => {
        if (item.text === tag.text) {
          return { ...item, className: "tag highlight" };
        }

        return item;
      });

      setTags(newState);
    };

    const unHighlightTag = (tag) => {
      const newState = selectTag.map((item) => {
        if (item.text === tag.text) {
          return { ...item, className: "tag" };
        }

        return item;
      });

      setTags(newState);
    };

    randomSelect();
  }, [selectTag]);

  const createTags = (input) => {
    const tags = input
      .split(",")
      .filter((tag) => tag.trim() !== "")
      .map((tag) => tag.trim());

    setTags(
      tags.map((tag) => {
        return { text: tag, className: "tag" };
      })
    );
  };

  const keyUpHandler = (event) => {
    createTags(event.target.value);

    if (event.key === "Enter") {
      event.target.value = "";
      setSelectTag(tags);
    }
  };

  return (
    <div className="container">
      <h3>
        Enter all of the choices divided by a comma (','). <br />
        Press enter when you're done
      </h3>
      <textarea
        placeholder="Enter choices here..."
        id="textarea"
        onKeyUp={keyUpHandler}
      ></textarea>
      <div id="tags">
        {tags.map((tag) => {
          return (
            <span className={tag.className} key={Math.random()}>
              {tag.text}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default App;
