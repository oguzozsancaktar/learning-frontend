import { useEffect } from "react";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import "./App.css";

function App() {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
      counter.innerText = "0";

      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;

        const increment = target / 200;

        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
    });
  }, []);

  return (
    <div className="container">
      <div className="counter-container">
        <i>
          <FaTwitter size={70} className="icon" />
        </i>
        <div className="counter" data-target="12000"></div>
        <span>Twitter Followers</span>
      </div>
      <div className="counter-container">
        <i>
          <FaYoutube size={70} />
        </i>
        <div className="counter" data-target="5000"></div>
        <span>YouTube Subscribers</span>
      </div>
      <div className="counter-container">
        <i>
          <FaFacebook size={70} />
        </i>
        <div className="counter" data-target="7500"></div>
        <span>Facebook Fans</span>
      </div>
    </div>
  );
}

export default App;
