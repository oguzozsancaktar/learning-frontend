import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [showList, setShowList] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userList = [];

      const res = await fetch("https://randomuser.me/api?results=50");

      const { results } = await res.json();

      results.map((result) => {
        const user = {
          name: result.name.first + " " + result.name.last,
          picture: result.picture.large,
          city: result.location.city,
          country: result.location.country,
        };

        userList.push(user);
      });

      setAllUsers(userList);
      setShowList(userList);
    };

    fetchData();
  }, []);

  const filterHandler = (event) => {
    const filteredList = [];

    allUsers.forEach((item) => {
      if (
        Object.values(item)
          .toString()
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      ) {
        filteredList.push(item);
      }
    });

    setShowList(filteredList);
  };

  return (
    <div className="container">
      <header className="header">
        <h4 className="title">Live User Filter</h4>
        <small className="subtitle">Search by name and/or location</small>
        <input
          type="text"
          id="filter"
          placeholder="Search"
          onChange={filterHandler}
        />
      </header>

      <ul id="result" className="user-list">
        {showList.map((user, idx) => {
          return (
            <li key={idx}>
              <img src={user.picture} alt={user.name} />
              <div className="user-info">
                <h4>{user.name}</h4>
                <p>
                  {user.city}, {user.country}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
