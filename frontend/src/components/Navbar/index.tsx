import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import "./styles.css";

function Navbar() {
  return (
    <header className="sticky-top">
      <nav className="container">
        <div className="devmovie-nav-content">
          <a href="/">
            <h1>DEVMovie</h1>
          </a>

          <a href="https://github.com/TiagoABarbosa" target="_blank" rel="noreferrer">
            <div className="devmovie-contact-content">
              <GithubIcon />
              <p className="devmovie-contact-link">/ TiagoBarbosa</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
