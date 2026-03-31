function AboutSection() {
  return (
    <section id="about" className="section-spacing bg-white">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <p className="section-tag">About Breezent</p>
            <h2 className="section-title">
              A brand built to feel polished, approachable, and memorable.
            </h2>
            <p className="section-text">
              Breezent is designed around a simple idea: strong presentation
              builds trust. We focus on delivering a clean, modern image that
              helps businesses stand out and connect with people from the first
              glance.
            </p>
            <p className="section-text">
              Our approach blends fresh design, thoughtful messaging, and a
              professional look that feels both elegant and inviting. Every
              detail is shaped to support credibility, clarity, and growth.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="about-card">
              <div className="row g-4">
                <div className="col-sm-6">
                  <div className="info-card h-100">
                    <i className="bi bi-stars icon-style"></i>
                    <h3>Modern Identity</h3>
                    <p>
                      A clean visual presence designed to leave a lasting
                      impression.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="info-card h-100">
                    <i className="bi bi-heart icon-style"></i>
                    <h3>Client Focused</h3>
                    <p>
                      Every interaction is shaped around trust, clarity, and
                      consistency.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="info-card h-100">
                    <i className="bi bi-lightning-charge icon-style"></i>
                    <h3>Fresh Energy</h3>
                    <p>
                      A bright, confident style that feels professional without
                      feeling cold.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="info-card h-100">
                    <i className="bi bi-patch-check icon-style"></i>
                    <h3>Reliable Image</h3>
                    <p>
                      A strong brand presence that helps your business look
                      established and credible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
