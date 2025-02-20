import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/users/", // Your Django backend API
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
