import axios from "axios";

const APIURL = "https://api.github.com/users/";

export const getUser = async (username) => {
  try {
    const { data } = await axios(APIURL + username);
    return data;
  } catch (err) {
    throw err;
  }
};

export const getRepos = async (username) => {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");
    return data;
  } catch (err) {
    throw err;
  }
};
