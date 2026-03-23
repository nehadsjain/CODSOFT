function CTA() {
  const handleTryNow = () => {
    const searchSection = document.getElementById('weather-search');
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="cta" id="cta">
      <div className="cta-inner">
        <h2>Start Tracking Weather Today</h2>
        <p>
          Join thousands of users who never get caught in the rain. Get
          instant, accurate forecasts delivered right to you.
        </p>
        <button className="btn-secondary" onClick={handleTryNow}>
          Try Now
        </button>
      </div>
    </section>
  );
}

export default CTA;
