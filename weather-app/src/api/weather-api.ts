import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const WEATHER_URL = import.meta.env.VITE_WEATHER_URL;

/**
 * Axios instance for the weather API.
 */
export const weatherApi = axios.create({
  baseURL: WEATHER_URL,
  params: {
    key: API_KEY,
  },
});

export const searchWeather = async <T>(q?: string) => {
  return await weatherApi.get<T>("/current.json", { params: { q } });
};

export const searchWeatherForecast = async <T>(q?: string) => {
  return await weatherApi.get<T>("/forecast.json", { params: { q } });
};

export default weatherApi;
