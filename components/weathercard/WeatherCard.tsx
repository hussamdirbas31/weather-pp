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
          className="rounded-md object-cover"
          quality={50} // Lower quality for faster load
          loading="lazy" // Lazy load for non-critical images
        />
      );
    } else if (lowestTemp !== null && lowestTemp < 15) {
      return (
        <Image
          src="/cold.jpg"
          alt="Cold weather"
          width={150}
          height={150}
          className="rounded-md object-cover"
          quality={50} 
          loading="lazy" 
        />
      );
    }
    return null; 
  };

  return (
    <div
      className="text-white bg-black bg-opacity-50 p-5 sm:p-8 rounded-lg flex flex-col sm:flex-row
      justify-between max-w-2xl mx-auto items-center sm:items-start gap-5 sm:gap-10 leading-normal
      tracking-wide text-sm sm:text-base"
    >
      <div className="flex-1 space-y-3">
        <div className="flex items-center space-x-2">
          <p className="text-sm sm:text-base">Date: {moment().format("LL")}</p>
          <Image
            src={isMorning() ? "/morning.svg" : "/night.svg"}
            alt={isMorning() ? "Morning Icon" : "Night Icon"}
            width={24}
            height={24}
          />
        </div>
        <p className="text-sm sm:text-base">Location: {location}</p>
        <p className="text-sm sm:text-base">Relative Humidity: {avgHumidity} %</p>
      </div>

      <div className="flex-1 space-y-3">
        <p className="text-sm sm:text-base">Highest Temperature: {highestTemp}°C</p>
        <p className="text-sm sm:text-base">Lowest Temperature: {lowestTemp}°C</p>
        <p className="text-sm sm:text-base">Average Wind Speed: {avgWindSpeed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;

// import React from "react";
// import moment from "moment";
// import Image from "next/image";

// interface WeatherCardProps {
//   location: string;
//   highestTemp: number | null;
//   lowestTemp: number | null;
//   avgHumidity: string | null;
//   avgWindSpeed: string | null;
// }

// const WeatherCard: React.FC<WeatherCardProps> = ({
//   location,
//   highestTemp,
//   lowestTemp,
//   avgHumidity,
//   avgWindSpeed,
// }) => {
//   const isMorning = () => {
//     const currentHour = new Date().getHours();
//     return currentHour >= 6 && currentHour < 18; 
//   };

//   const renderWeatherImage = () => {
//     if (highestTemp !== null && highestTemp >= 25) {
//       return (
//         <Image
//           src="/sunny.jpg"
//           alt="Sunny weather"
//           width={150}
//           height={150}
//           className="rounded-md object-cover"
//         />
//       );
//     } else if (lowestTemp !== null && lowestTemp < 15) {
//       return (
//         <Image
//           src="/cold.jpg"
//           alt="Cold weather"
//           width={150}
//           height={150}
//           className="rounded-md object-cover"
//         />
//       );
//     } 
//     return null; 
//   };

//   return (
//     <div
//       className="text-white bg-black bg-opacity-50 p-5 sm:p-8 rounded-lg flex flex-col sm:flex-row
//       justify-between max-w-2xl mx-auto items-center sm:items-start gap-5 sm:gap-10 leading-normal
//       tracking-wide text-sm sm:text-base"
//     >
//       <div className="flex-1 space-y-3">
//         <div className="flex items-center space-x-2">
//           <p className="text-sm sm:text-base">Date: {moment().format("LL")}</p>
//           <Image
//             src={isMorning() ? "/morning.svg" : "/night.svg"}
//             alt={isMorning() ? "Morning Icon" : "Night Icon"}
//             width={24}
//             height={24}
//           />
//         </div>
//         <p className="text-sm sm:text-base">Location: {location}</p>
//         <p className="text-sm sm:text-base">Relative Humidity: {avgHumidity} %</p>
//       </div>

//       <div className="flex-1 space-y-3">
//         <p className="text-sm sm:text-base">Highest Temperature: {highestTemp}°C</p>
//         <p className="text-sm sm:text-base">Lowest Temperature: {lowestTemp}°C</p>
//         <p className="text-sm sm:text-base">Average Wind Speed: {avgWindSpeed} m/s</p>
//       </div>

//     </div>
//   );
// };

// export default WeatherCard;
