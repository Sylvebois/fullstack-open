import axios from 'axios';

const weatherApiKey = process.env.REACT_APP_OWM_KEY;

const countryUrl = 'https://restcountries.com/v3.1';
const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather';

export const getAll = () =>
  axios
    .get(`${countryUrl}/all`)
    .then(response => response.data)
    .catch(err => []);

export const getWeather = (city) =>
  axios
    .get(`${weatherUrl}?q=${city}&appid=${weatherApiKey}&units=metric`)
    .then(async (response) => await response.data)
    .catch(err => null);