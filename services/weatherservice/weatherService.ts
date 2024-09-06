import axios from "axios";
import { WeatherData } from "@/utils/types/weatherTypes";

export const fetchWeather = async (location: string): Promise<WeatherData[]> => {
  const geocodeResponse = await axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const { lat, lon } = geocodeResponse.data[0];

  const response = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
  );
  const data = response.data;

  return data.hourly.time.map((time: string, index: number) => ({
    hour: new Date(time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    temp: data.hourly.temperature_2m[index],
    wind_spd: data.hourly.wind_speed_10m[index],
    rh: data.hourly.relative_humidity_2m[index],
  }));
};
