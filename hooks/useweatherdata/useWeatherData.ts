'use client'
import { useState, useCallback } from "react";
import { fetchWeather } from "@/services/weatherservice/weatherService";
import { WeatherData } from "@/utils/types/weatherTypes";

export const useWeatherData = (location: string) => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [highestTemp, setHighestTemp] = useState<number | null>(null);
  const [lowestTemp, setLowestTemp] = useState<number | null>(null);
  const [avgHumidity, setAvgHumidity] = useState<string | null>(null);
  const [avgWindSpeed, setAvgWindSpeed] = useState<string | null>(null);

  const fetchWeatherData = useCallback(async (location: string) => {
    setLoading(true);
    try {
      const data = await fetchWeather(location);
      setWeatherData(data);

      const temps = data.map((item) => item.temp);
      const windSpeeds = data.map((item) => item.wind_spd);
      const humidity = data.map((item) => item.rh);

      setHighestTemp(Math.max(...temps));
      setLowestTemp(Math.min(...temps));
      setAvgWindSpeed(
        (windSpeeds.reduce((a, b) => a + b, 0) / windSpeeds.length).toFixed(2)
      );
      setAvgHumidity(
        (humidity.reduce((a, b) => a + b, 0) / humidity.length).toFixed(2)
      );
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    weatherData,
    highestTemp,
    lowestTemp,
    avgHumidity,
    avgWindSpeed,
    loading,
    fetchWeatherData,
  };
};
