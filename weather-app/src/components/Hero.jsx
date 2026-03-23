import Navbar from './Navbar';

function Hero() {
  const handleGetStarted = () => {
    const featuresSection = document.getElementById('weather-search');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <Navbar />
      <div className="hero-content">
        <span className="hero-icon" role="img" aria-label="weather">
          ⛅
        </span>
        <h1>Get Weather Updates Instantly</h1>
        <p>Stay prepared with real-time forecasts anywhere</p>
        <button className="btn-primary" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;
