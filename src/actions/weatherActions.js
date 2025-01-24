import axios from "axios";

const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "0041fa7a1af832941f949eb4860e0a41";

export const fetchWeather = (location) => async(dispatch) => {
    dispatch({ type: "FETCH_WEATHER_REQUEST" });

    try {
        const response = await axios.get(WEATHER_API_URL, {
            params: {
                q: location,
                appid: API_KEY,
                units: "metric",
            },
        });
        dispatch({ type: "FETCH_WEATHER_SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({
            type: "FETCH_WEATHER_FAILURE",
            payload: error.response ? error.response.data.message : "Network error",
        });
    }
};