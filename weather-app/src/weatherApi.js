const API_KEY = 'b78ba8d33f6d95e439a0364c304ad58c';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function fetchCurrentWeather(city) {
  const response = await fetch(
    `${BASE_URL}/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`
  );
  if (!response.ok) {
    if (response.status === 404) throw new Error('City not found. Please check the name and try again.');
    if (response.status === 401) throw new Error('Invalid API key. Please check your OpenWeatherMap API key. Note: New keys take up to 2 hours to activate.');
    throw new Error('Failed to fetch weather data. Please try again.');
  }
  return response.json();
}

export async function fetchForecast(city) {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`
  );
  if (!response.ok) {
    if (response.status === 404) throw new Error('City not found. Please check the name and try again.');
    if (response.status === 401) throw new Error('Invalid API key. Please check your OpenWeatherMap API key. Note: New keys take up to 2 hours to activate.');
    throw new Error('Failed to fetch forecast data. Please try again.');
  }
  const data = await response.json();

  // Group by day and pick one entry per day (noon preferred)
  const dailyMap = {};
  data.list.forEach((entry) => {
    const date = entry.dt_txt.split(' ')[0];
    const hour = parseInt(entry.dt_txt.split(' ')[1].split(':')[0], 10);
    if (!dailyMap[date] || Math.abs(hour - 12) < Math.abs(parseInt(dailyMap[date].dt_txt.split(' ')[1].split(':')[0], 10) - 12)) {
      dailyMap[date] = entry;
    }
  });

  // Skip today, return next 5 days
  const today = new Date().toISOString().split('T')[0];
  return Object.entries(dailyMap)
    .filter(([date]) => date !== today)
    .slice(0, 5)
    .map(([date, entry]) => ({
      date,
      temp: Math.round(entry.main.temp),
      tempMin: Math.round(entry.main.temp_min),
      tempMax: Math.round(entry.main.temp_max),
      condition: entry.weather[0].main,
      description: entry.weather[0].description,
      icon: entry.weather[0].icon,
    }));
}
