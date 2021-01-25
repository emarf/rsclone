import 'regenerator-runtime/runtime';
const KEY = 'a8b7c2d7aa082a0b2c1b86049b8bcd32';

export const getWeatherData = async function a(city) {
  const base = 'http://api.openweathermap.org/data/2.5/weather';
  const query = `?q=${city}&appid=${KEY}`;

  const response = await fetch(base + query);
  return response.json();
};
