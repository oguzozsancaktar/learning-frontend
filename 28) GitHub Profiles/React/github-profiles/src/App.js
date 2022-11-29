import React, { useRef, useState } from "react";
import { getUser, getRepos } from "./GithHubAPI";
import "./App.css";

function App() {
  const usernameRef = useRef();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const submitHandler = async (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;

    try {
      const userData = await getUser(username);
      try {
        const repos = await getRepos(username);
        const newUser = { ...userData, repos: repos };
        console.log(newUser);
        setError(null);
        setUser(newUser);
      } catch (err) {
        setError("Problem fetching repos");
        setUser(null);
      }
    } catch (err) {
      if (err.response.status === 404) {
        setError("No profile with this username");
        setUser(null);
      }
    }
  };

  return (
    <React.Fragment>
      <form className="user-form" id="form" onSubmit={submitHandler}>
        <input
          type="text"
          id="search"
          placeholder="Search a GitHub User"
          ref={usernameRef}
        />
      </form>

      <main id="main">
        {error && (
          <div className="card">
            <h1>{error}</h1>
          </div>
        )}
        {user && (
          <div className="card">
            <div>
              <img src={user.avatar_url} alt={user.name} className="avatar" />
            </div>
            <div className="user-info">
              <h2>{user.name}</h2>
              <p>{user.bio}</p>
              <ul>
                <li>
                  {user.followers} <strong>Followers</strong>
                </li>
                <li>
                  {user.following} <strong>Following</strong>
                </li>
                <li>
                  {user.public_repos} <strong>Repos</strong>
                </li>
              </ul>
              <div id="repos">
                {user.repos.slice(0, 10).map((repo) => {
                  return (
                    <a className="repo" href={repo.html_url} key={repo.id}>
                      {repo.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>
    </React.Fragment>
  );
}

export default App;
