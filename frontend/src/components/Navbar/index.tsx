import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import { ReactComponent as LogoMovie } from "assets/img/logomovie.svg";
import "./styles.css";

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="devmovie-nav-content">
          <h1>DEVMovie</h1>

          <div className="devmovie-title-content">
            <LogoMovie />
          </div>

          <a href="https://github.com/TiagoABarbosa">
            <div className="devmovie-contact-content">
              <GithubIcon />
              <p className="devmovie-contact-link">/TiagoBarbosa</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;