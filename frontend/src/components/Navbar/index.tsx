import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import "./styles.css";

function Navbar() {

  return (
    <header>
      <nav className="container">
        <div className="devmovie-nav-content">
          <h1>DEVMovie</h1>

          <a href="https://github.com/TiagoABarbosa">
            <div className="devmovie-contact-content">
              <GithubIcon />
              <p className="devmovie-contact-link">/ tiagoBarbosa</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
