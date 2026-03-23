import { useState } from 'react';
import { fetchCurrentWeather, fetchForecast } from '../weatherApi';

function WeatherSearch() {
  const [city, setCity] = useState('');
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const trimmed = city.trim();
    if (!trimmed) return;

    setLoading(true);
    setError('');
    setCurrent(null);
    setForecast([]);

    try {
      const [weatherData, forecastData] = await Promise.all([
        fetchCurrentWeather(trimmed),
        fetchForecast(trimmed),
      ]);
      setCurrent(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDay = (dateStr) => {
    const date = new Date(dateStr + 'T12:00:00');
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  const getCountryName = (countryCode) => {
    try {
      const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
      return regionNames.of(countryCode);
    } catch (e) {
      return countryCode;
    }
  };

  return (
    <section className="weather-search" id="weather-search">
      <div className="ws-inner">
        <h2>Search Live Weather</h2>
        <p className="section-subtitle">Enter any city to get the current weather and 5-day forecast</p>

        <form className="ws-form" onSubmit={handleSearch}>
          <div className="ws-input-group">
            <input
              type="text"
              className="ws-input"
              placeholder="Enter city name (e.g., London)"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit" className="btn-primary ws-btn" disabled={loading}>
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>

        {error && (
          <div className="ws-error">
            <span>⚠️</span> {error}
          </div>
        )}

        {loading && (
          <div className="ws-loading">
            <div className="ws-spinner"></div>
            <p>Fetching weather data...</p>
          </div>
        )}

        {current && (
          <div className="ws-results">
            {/* Current Weather */}
            <div className="ws-current-card">
              <div className="ws-current-header">
                <div>
                  <h3 className="ws-city">
                    {current.name}, {getCountryName(current.sys.country)}
                  </h3>
                  <p className="ws-condition-text">{current.weather[0].description}</p>
                </div>
                <img
                  className="ws-weather-icon"
                  src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}
                  alt={current.weather[0].description}
                />
              </div>

              <div className="ws-current-body">
                <p className="ws-temp-big">{Math.round(current.main.temp)}°C</p>
                <div className="ws-details-grid">
                  <div className="ws-detail">
                    <span className="ws-detail-label">Feels Like</span>
                    <span className="ws-detail-value">{Math.round(current.main.feels_like)}°C</span>
                  </div>
                  <div className="ws-detail">
                    <span className="ws-detail-label">Humidity</span>
                    <span className="ws-detail-value">{current.main.humidity}%</span>
                  </div>
                  <div className="ws-detail">
                    <span className="ws-detail-label">Wind</span>
                    <span className="ws-detail-value">{Math.round(current.wind.speed * 3.6)} km/h</span>
                  </div>
                  <div className="ws-detail">
                    <span className="ws-detail-label">Pressure</span>
                    <span className="ws-detail-value">{current.main.pressure} hPa</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 5-Day Forecast */}
            {forecast.length > 0 && (
              <div className="ws-forecast">
                <h3 className="ws-forecast-title">5-Day Forecast</h3>
                <div className="ws-forecast-grid">
                  {forecast.map((day) => (
                    <div className="ws-forecast-card" key={day.date}>
                      <p className="ws-forecast-day">{formatDay(day.date)}</p>
                      <img
                        className="ws-forecast-icon"
                        src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                        alt={day.description}
                      />
                      <p className="ws-forecast-temp">{day.temp}°C</p>
                      <p className="ws-forecast-range">
                        {day.tempMin}° / {day.tempMax}°
                      </p>
                      <p className="ws-forecast-condition">{day.condition}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default WeatherSearch;
