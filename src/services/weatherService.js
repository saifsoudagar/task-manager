import axios from "axios";

const API_KEY = "0041fa7a1af832941f949eb4860e0a41"; // Replace with your API key
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async(city) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: city,
                appid: API_KEY,
                units: "metric", // Temperature in Celsius
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
};