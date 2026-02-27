import React from 'react';

function Header({ isMenuOpen, onOpenMenu, onCloseMenu }) {
  return (
    <div id="header">
      <div className="container">
        <nav>
          <h1 style={{ fontSize: '38px' }}>
            <span style={{ color: '#ff004f' }}>Sunil</span>
            Kharsu<span className="dot" />
          </h1>
          <div
            className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}
            onClick={onCloseMenu}
            aria-hidden={!isMenuOpen}
          />
          <ul id="sidemenu" style={{ right: isMenuOpen ? '0' : '-200px' }}>
            <li>
              <a href="#header" onClick={onCloseMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={onCloseMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={onCloseMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={onCloseMenu}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" onClick={onCloseMenu}>
                Contact Me
              </a>
            </li>
            <i className="fa-solid fa-xmark fas" onClick={onCloseMenu} />
          </ul>
          <i className="fa-solid fa-bars fas" onClick={onOpenMenu} />
        </nav>
        <div className="header-text">
          <p className="header-role">Backend Engineer | Java & Spring Boot</p>
          <h1>
            Hi, I&apos;m <span>Sunil</span> <br />
          </h1>
          <div className="header-subtext-wrap">
            <p className="header-subtext">I build secure, scalable backend systems and REST APIs with Spring Boot.</p>
            <p className="header-subtext"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
