import axios from "axios";

export const ApiRequests = axios.create({
  baseURL: "https://api.github.com",
  timeout: 15000,
});
