import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.weatherbit.io/v2.0/"
});
export const key = "74b3547c1c9d4ea9bb785378db23c82a";