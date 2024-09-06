'use client'
import { useState, useCallback } from "react";
import { useWeatherData } from "@/hooks/useweatherdata/useWeatherData";
import Image from "next/image";
import LoadingSpinner from "@/components/loading/Loading";
import WeatherCard from "../weathercard/WeatherCard";
import SearchInput from "@/components/searchinput/SearchInput";

const Weather = () => {
  const [searchLocation, setSearchLocation] = useState<string>(""); 
  const [weatherLocation, setWeatherLocation] = useState<string | null>(null); 
  const [dataFetched, setDataFetched] = useState<boolean>(false); 

  const { highestTemp, lowestTemp, avgHumidity, avgWindSpeed, loading, fetchWeatherData } = useWeatherData(weatherLocation || ""); 

  const handleSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (searchLocation.trim()) {
        fetchWeatherData(searchLocation); 
        setWeatherLocation(searchLocation); 
        setDataFetched(true); 
        setSearchLocation(""); 
      }
    },
    [searchLocation, fetchWeatherData]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchLocation(e.target.value); 
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
    <div className="relative overflow-hidden min-h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getBackgroundImage()} 
          alt="Weather background"
          layout="fill"
          objectFit="cover"
          quality={75} 
          priority 
          className="h-full w-full"
        />
      </div>

      {/* Overlay and content */}
      <div className="relative z-10  bg-black bg-opacity-60 min-h-screen p-4 grid place-items-center sm:p-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">Weather Forecast</h1>
        <div className="  flex justify-center relative right-3 ">
        <SearchInput value={searchLocation} onChange={handleChange} onSubmit={handleSearch} />
        </div>
        {loading && <LoadingSpinner />}

        {/* Weather Info */}
        {!loading && dataFetched && weatherLocation && (
          <WeatherCard
            location={weatherLocation}
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

// 'use client'
// import { useState, useCallback } from "react";
// import { useWeatherData } from "@/hooks/useweatherdata/useWeatherData";
// import Image from "next/image";
// import LoadingSpinner from "@/components/loading/Loading";
// import WeatherCard from "../weathercard/WeatherCard";
// import SearchInput from "@/components/searchinput/SearchInput";

// const Weather = () => {
//   const [searchLocation, setSearchLocation] = useState<string>(""); 
//   const [weatherLocation, setWeatherLocation] = useState<string | null>(null); 
//   const [dataFetched, setDataFetched] = useState<boolean>(false); 

//   const { highestTemp, lowestTemp, avgHumidity, avgWindSpeed, loading, fetchWeatherData } = useWeatherData(weatherLocation || ""); 

//   const handleSearch = useCallback(
//     (e: React.FormEvent<HTMLFormElement>) => {
//       e.preventDefault();
//       if (searchLocation.trim()) {
//         fetchWeatherData(searchLocation); 
//         setWeatherLocation(searchLocation); 
//         setDataFetched(true); 
//         setSearchLocation(""); 
//       }
//     },
//     [searchLocation, fetchWeatherData]
//   );

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchLocation(e.target.value); 
//   };

//   const getBackgroundImage = () => {
//     if (highestTemp !== null && highestTemp >= 25) {
//       return "/sunny.jpg";
//     } else if (lowestTemp !== null && lowestTemp < 15) {
//       return "/cold.jpeg";
//     } else {
//       return "/default.jpg";
//     }
//   };

//   return (
//     <div className="relative  overflow-hidden min-h-screen">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src={getBackgroundImage()}
//           alt="Weather background"
//           layout="fill"
//           objectFit="cover"
//           quality={100}
//           className=" h-full w-[100%]"
//         />
//       </div>

//       {/* Overlay and content */}
//       <div className="relative z-10 bg-black bg-opacity-60 min-h-screen p-5 grid place-items-center sm:p-12">
//         <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">Weather Forecast</h1>
        
        
//         <SearchInput value={searchLocation} onChange={handleChange} onSubmit={handleSearch} />

//         {loading && <LoadingSpinner />}

//         {/* Weather Info */}
//         {!loading && dataFetched && weatherLocation && (
//           <WeatherCard
//             location={weatherLocation}
//             highestTemp={highestTemp}
//             lowestTemp={lowestTemp}
//             avgHumidity={avgHumidity}
//             avgWindSpeed={avgWindSpeed}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Weather;
