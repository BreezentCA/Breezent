function ContactSection() {
  return (
    <section id="contact" className="section-spacing contact-section">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <p className="section-tag">Contact</p>
            <h2 className="section-title">
              Let’s build a strong first impression for your business.
            </h2>
            <p className="section-text">
              Ready to give Breezent a professional online presence? Reach out
              and start the conversation.
            </p>

            <div className="contact-list mt-4">
              <div className="contact-item">
                <i className="bi bi-envelope-fill"></i>
                <span>nasim@breezent.ca</span>
              </div>
              <div className="contact-item">
                <i className="bi bi-geo-alt-fill"></i>
                <span>Ontario, Canada</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-card">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Tell us a little about what you need"
                  ></textarea>
                </div>
                <button type="submit" className="btn breezent-btn w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
