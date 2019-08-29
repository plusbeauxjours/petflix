import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "01da2a336a604956c260900d1835847f",
    language: "en-US"
  }
});

export default api;
