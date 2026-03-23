const features = [
  {
    icon: '🌡️',
    title: 'Live Temperature Updates',
    description:
      'Get accurate, real-time temperature readings updated every minute for your exact location.',
  },
  {
    icon: '📍',
    title: 'Location-Based Forecast',
    description:
      'Automatic detection of your location to deliver hyper-local weather data you can trust.',
  },
  {
    icon: '📅',
    title: '7-Day Weather Prediction',
    description:
      'Plan your week ahead with detailed 7-day forecasts including highs, lows, and conditions.',
  },
];

function Features() {
  return (
    <section className="features" id="features">
      <div className="features-inner">
        <h2>Why Choose WeatherApp?</h2>
        <p className="section-subtitle">
          Everything you need to stay ahead of the weather
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <span className="feature-icon" role="img" aria-label={feature.title}>
                {feature.icon}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
