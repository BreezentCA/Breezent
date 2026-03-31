import logo from "../assets/BreezentLogo.png";

function Hero() {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
            <p className="section-tag">Fresh. Modern. Reliable.</p>
            <h1 className="display-4 fw-bold mb-3">
              Modern business presence with a clean and confident edge.
            </h1>
            <p className="lead hero-text mb-4">
              Breezent brings together style, clarity, and professionalism to
              help your brand make a strong first impression.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <a href="#services" className="btn breezent-btn btn-lg">
                Explore Services
              </a>
              <a
                href="#contact"
                className="btn btn-outline-light btn-lg hero-outline-btn"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <div className="hero-logo-card mx-auto">
              <img
                src={logo}
                alt="Breezent logo"
                className="img-fluid hero-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
