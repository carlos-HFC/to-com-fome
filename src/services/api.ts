import { REACT_APP_API } from "@env";
import axios from "axios";

export const api = axios.create({
  baseURL: REACT_APP_API
});