import axios from 'axios'; //similar to jquery ajax
const API_KEY = '2f0fc2172c62e50b46720731a6d0be7d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    // console.log('request: ', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}