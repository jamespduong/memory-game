import axios from "axios";

const instance = axios.create({
  // baseURL: "https://api.unsplash.com/",
  // headers: {
  //   Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`
  // }
  baseURL: "https://picsum.photos/v2/"
});

// export const getImages = () => {
//   return instance.get(`search/photos?query=dogs`);
// };

export const getImages = () => {
  return instance.get(`list?limit=15/`);
};
