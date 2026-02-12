import styles from './NavBar.module.css';
import logo from '../assets/images/civillogo.webp';
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className={`navbar navbar-expand-lg bg-dark border-bottom border-body ${styles.nav}`} data-bs-theme="dark">
      <div className="container-fluid">
        {/* Logo */}
        <img src={logo} alt="logo" className={styles.logoimage} />
        <div className={styles.logoheading}>
          <NavLink to="/" className="navbar-brand fw-bold text-white">
            Lalit Mahato
          </NavLink>
          <p className={styles.navsubheading}>Civil Engineer</p>
        </div>

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarColor01">
          {/* Center Search Bar */}
          <form className="d-flex mx-auto col-lg-4" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>

          {/* Right Menu */}
          <ul className={`navbar-nav ms-auto gap-4 ${styles.navlist}`}>
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) => isActive ? "nav-link active fw-bold" : "nav-link"}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) => isActive ? "nav-link active fw-bold" : "nav-link"}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/skills"
                className={({ isActive }) => isActive ? "nav-link active fw-bold" : "nav-link"}
              >
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                className={({ isActive }) => isActive ? "nav-link active fw-bold" : "nav-link"}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) => isActive ? "nav-link active fw-bold" : "nav-link"}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
