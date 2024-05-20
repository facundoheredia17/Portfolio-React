import React from 'react';
import './Footer.css';
import linkedinLogo from './linkedin.png';
import githubLogo from './github.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contenido-footer">
        <p>Contacta conmigo en:</p>
        <a href="https://www.linkedin.com/in/facundo-alejandro-heredia-532313214/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" className="logo" />
        </a>
        <a href="https://github.com/facundoheredia17" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" className="logo" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

