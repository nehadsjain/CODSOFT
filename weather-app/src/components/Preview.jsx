const weatherData = [
  {
    city: 'New York',
    icon: '🌤️',
    temp: '24°C',
    condition: 'Partly Cloudy',
    humidity: '58%',
    wind: '12 km/h',
  },
  {
    city: 'London',
    icon: '🌧️',
    temp: '16°C',
    condition: 'Rainy',
    humidity: '78%',
    wind: '20 km/h',
  },
  {
    city: 'Mumbai',
    icon: '☀️',
    temp: '33°C',
    condition: 'Sunny',
    humidity: '42%',
    wind: '8 km/h',
  },
];

function Preview() {
  return (
    <section className="preview" id="preview">
      <div className="preview-inner">
        <h2>App Preview</h2>
        <p className="section-subtitle">
          See what your weather dashboard looks like
        </p>
        <div className="preview-cards">
          {weatherData.map((item, index) => (
            <div className="weather-card" key={index}>
              <p className="city-name">{item.city}</p>
              <span className="weather-icon-large" role="img" aria-label={item.condition}>
                {item.icon}
              </span>
              <p className="temperature">{item.temp}</p>
              <p className="condition">{item.condition}</p>
              <div className="details">
                <div className="detail-item">
                  <span>Humidity</span>
                  <strong>{item.humidity}</strong>
                </div>
                <div className="detail-item">
                  <span>Wind</span>
                  <strong>{item.wind}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Preview;
