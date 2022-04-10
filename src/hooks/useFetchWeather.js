import { useEffect, useState } from "react";
import axios from "axios";
import { cityLatLong } from "../utils/index";

const useFetchWeather = (city) => {
  const [todayForecast, setTodayForecast] = useState([]);
  const [fourDayForecast, setFourDayForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { lat, long } = cityLatLong(city);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: response } = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude=hourly,minutely&appid=d972a5e9b46e3e9ad6397fad8e939bb6`
        );

        const todayForcastData = response.daily.slice(0, 1);
        setTodayForecast(todayForcastData);

        const fourDayForcastData = response.daily.slice(1, 5);
        setFourDayForecast(fourDayForcastData);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [lat, long]);

  return {
    todayForecast,
    fourDayForecast,
    loading,
    error,
  };
};

export default useFetchWeather;
