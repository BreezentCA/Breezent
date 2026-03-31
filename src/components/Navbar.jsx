import logo from "../assets/BreezentLogo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top breezent-navbar">
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center gap-2"
          href="#home"
        >
          <img src={logo} alt="Breezent logo" className="brand-logo" />
          <span className="brand-text">Breezent</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item mt-3 mt-lg-0">
              <a className="btn breezent-btn" href="#contact">
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
