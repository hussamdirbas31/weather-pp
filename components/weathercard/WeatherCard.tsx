import React from "react";
import moment from "moment";
import Image from "next/image";

interface WeatherCardProps {
  location: string;
  highestTemp: number | null;
  lowestTemp: number | null;
  avgHumidity: string | null;
  avgWindSpeed: string | null;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  location,
  highestTemp,
  lowestTemp,
  avgHumidity,
  avgWindSpeed,
}) => {
  const isMorning = () => {
    const currentHour = new Date().getHours();
    return currentHour >= 6 && currentHour < 18; 
  };

  const renderWeatherImage = () => {
    if (highestTemp !== null && highestTemp >= 25) {
      return (
        <Image
          src="/sunny.jpg"
          alt="Sunny weather"
          width={150}
          height={150}
          className="rounded-md"
        />
      );
    } else if (lowestTemp !== null && lowestTemp < 15) {
      return (
        <Image
          src="/cold.jpg"
          alt="Cold weather"
          width={150}
          height={150}
          className="rounded-md"
        />
      );
    } 
  };

  return (
    <div
      className="text-white overlay p-5 bg-black bg-opacity-50 flex justify-around 
      max-w-2xl mx-auto items-start w-full gap-10 leading-normal tracking-wider text-base"
    >
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <p>Date: {moment().format("LL")}</p>
          <Image
            src={isMorning() ? "/morning.svg" : "/night.svg"}
            alt={isMorning() ? "Morning Icon" : "Night Icon"}
            width={24}
            height={24}
          />
        </div>
        <p>Location: {location}</p>
        <p>Relative Humidity: {avgHumidity} %</p>
      </div>
      <div className="space-y-3">
        <p>Highest Temperature: {highestTemp}°C</p>
        <p>Lowest Temperature: {lowestTemp}°C</p>
        <p>Average Wind Speed: {avgWindSpeed} m/s</p>
      </div>
      
    </div>
  );
};

export default WeatherCard;
