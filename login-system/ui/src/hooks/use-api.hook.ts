import axios from "axios";
// Get the base URL from the environment variables
const BASE_URL = import.meta.env.VITE_API_URL;
// create an axios instance with the base URL
const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
// export a custom hook to use the axios instance
// Not sure if this is needed, but it's a good practice
export const useApi = () => {
  return instance;
};
// export the axios instance
export default instance;
