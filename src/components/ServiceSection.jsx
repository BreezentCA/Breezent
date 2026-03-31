const services = [
  {
    icon: "bi-briefcase",
    title: "Brand Presentation",
    text: "Create a polished business image that feels modern, trustworthy, and aligned with your audience.",
  },
  {
    icon: "bi-window",
    title: "Web Presence",
    text: "Build a sleek online presence that clearly communicates your value and makes contact easy.",
  },
  {
    icon: "bi-megaphone",
    title: "Marketing Support",
    text: "Present your services with simple, confident messaging that is easy to understand and remember.",
  },
];

function ServicesSection() {
  return (
    <section id="services" className="section-spacing section-soft">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-tag justify-content-center">Services</p>
          <h2 className="section-title centered-title">
            What Breezent can help you present.
          </h2>
          <p className="section-text centered-text">
            Start with a clean, professional foundation and grow your brand from
            there.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="service-card h-100">
                <div className="service-icon-wrap">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contact" className="service-link">
                  Learn more <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
