'use client'
import { useState } from "react";
import { useWeatherData } from "@/hooks/useweatherdata/useWeatherData";
import WeatherCard from "@/components/weathercard/WeatherCard";
import SearchInput from "@/components/searchinput/SearchInput";
import Image from "next/image"; 

const Weather = () => {
  const [location, setLocation] = useState<string>("Kolkata");

  const {
    highestTemp,
    lowestTemp,
    avgHumidity,
    avgWindSpeed,
    loading,
    fetchWeatherData,
  } = useWeatherData(location);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
    fetchWeatherData(e.target.value);
  };

  const getBackgroundImage = () => {
    if (highestTemp !== null && highestTemp >= 25) {
      return "/sunny.jpg"; 
    } else if (lowestTemp !== null && lowestTemp < 15) {
      return "/cold.jpeg"; 
    } else {
      return "/default.jpg"; 
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getBackgroundImage()}
          alt="Weather background"
          layout="fill" 
          objectFit="cover" 
          quality={100} 
        />
      </div>

      <div className="relative z-10 bg-black bg-opacity-60 min-h-screen p-5 grid place-items-center">
        <h1 className="text-3xl font-bold text-white mb-4">Weather Forecast</h1>
        <SearchInput value={location} onChange={handleSearch} />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <WeatherCard
            location={location}
            highestTemp={highestTemp}
            lowestTemp={lowestTemp}
            avgHumidity={avgHumidity}
            avgWindSpeed={avgWindSpeed}
          />
        )}
      </div>
    </div>
  );
};

export default Weather;
