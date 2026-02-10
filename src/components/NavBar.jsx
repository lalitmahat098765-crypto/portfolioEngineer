import styles from './NavBar.module.css'
import logo from '../assets/images/civillogo.webp'
function NavBar(){
  return(
    <>
      <nav className={`navbar navbar-expand-lg bg-dark border-bottom border-body ${styles.nav}`}
        data-bs-theme="dark">
        <div className="container-fluid">
          <img src={logo} alt="logo" className={`${styles.logoimage}`} />
          <div className ={`${styles.logoheading}`}>
            <a className="navbar-brand fw-bold" href="#">
              Lalit Mahato
            </a>
            <p className={`${styles.navsubheading}`}>Civil Engineer</p>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            {/* CENTER Search Bar */}
            <form className="d-flex mx-auto col-lg-4" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>

            {/* RIGHT Menu */}
            <ul className={`navbar-nav ms-auto gap-5 ${styles.navlist}`}>
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-link">Skills</li>
              <li className="nav-item">
                <a className="nav-link" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default NavBar;
