import { searchWeather, searchWeatherForecast } from "@/api/weather-api";
import { ForecastResponse, WeatherResponse } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

export const useSearchWeather = <T = WeatherResponse>({ q }: { q: string }) => {
  return useQuery({
    queryKey: ["search-weather", q],
    queryFn: () => searchWeather<T>(q),
  });
};

export const useSearchWeatherForecast = <T = ForecastResponse>({ q }: { q: string }) => {
  return useQuery({
    queryKey: ["search-weather-forecast", q],
    queryFn: () => searchWeatherForecast<T>(q),
  });
};
