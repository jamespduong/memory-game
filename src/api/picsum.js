import axios from "axios";
import { numOfCards } from "../config/index";

const instance = axios.create({
  baseURL: "https://picsum.photos/v2/"
});

export const getImages = () => {
  return instance.get(`list?limit=${(numOfCards + 1) / 2}`);
};
