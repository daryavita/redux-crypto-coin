function Footer() {
  return (
    <footer className="footer">
      <hr className="footer__line"></hr>
      <div className="footer__container">
        <p className="footer__author">&copy; 2023 Darya Vita</p>
        <nav className="footer__links">
          <li>
            <a
              className="footer__link"
              href="https://www.linkedin.com/in/darya-popova/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="footer__link"
              href="https://github.com/daryavita"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
