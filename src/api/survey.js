import axios from "axios";

export default axios.create({
  baseURL: "https://filmsuvey.netlify.app/api/v1/survey",
});
