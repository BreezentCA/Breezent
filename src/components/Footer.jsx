function Footer() {
  return (
    <footer className="footer-section py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <p className="mb-0">© 2026 Breezent. All rights reserved.</p>
        <div className="d-flex gap-3">
          <a href="#home" aria-label="Home">
            <i className="bi bi-house-door"></i>
          </a>
          <a href="#services" aria-label="Services">
            <i className="bi bi-grid"></i>
          </a>
          <a href="#contact" aria-label="Contact">
            <i className="bi bi-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
