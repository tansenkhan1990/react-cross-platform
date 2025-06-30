// src/api/authApi.ts
import api from "./axios";

export const signIn = async (email: string, password: string) => {
  const res = await api.post("/signin", { email, password });
  return res.data; // { accessToken, user }
};

export const signUp = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  const res = await api.post("/signup", data);
  return res.data;
};

export const refreshToken = async () => {
  const res = await api.get("/refresh");
  return res.data; // { accessToken }
};

export const logout = async () => {
  const res = await api.post("/logout");
  return res.data;
};
