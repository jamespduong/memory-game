import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`
  }
});

export const getImages = () => {
  return instance.get(`search/photos?query=dogs`);
};
