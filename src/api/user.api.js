import axios from "axios";
const URL = import.meta.env.VITE_API_URL;
export const fecthUsers = async () => await axios.get();

export const createUser = async (user) =>
  await axios.post(`${URL}/signup`, user);

export const loginUser = async (user) => {
  const res = await axios.post(`${URL}/login`, user);
  if (res.status !== 200) throw new Error("Login failed");
  return res.data;
};

export const githubLogin = async (code) => {
  const res = await axios.post(`${URL}/login/github`, { code });
  if (res.status !== 200) throw new Error("Login failed");
  return res.data;
};
