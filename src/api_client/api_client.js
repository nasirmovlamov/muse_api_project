import axios from "axios";

export var serverAddress = "https://dialogue-data-backend.themusio.com";
export var Server = axios.create({
  baseURL: "https://dialogue-data-backend.themusio.com/api/",
  // baseURL: "http://localhost:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 20000,
});
