import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './style.css';

function NavBar() {
	return (
		<header>
	      <nav className="container">
	        <div className="mamovie-nav-content">
	          <h1>MAMovie</h1>
	          <a href="https://github.com/michel-a">
	            <div className="mamovie-contact-container">
	              <GithubIcon />
	              <p className="mamovie-contact-link">/michel-a</p>
	            </div>
	          </a>
	        </div>
	      </nav>
	    </header>
    );
}

export default NavBar;