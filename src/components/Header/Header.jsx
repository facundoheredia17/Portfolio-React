import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="contenido-header">
        <img src={`${process.env.PUBLIC_URL}/FotoPerfil.jpg`} alt="Foto de perfil" className="fotoperfil" />
        <h1>Facundo Heredia</h1>
      </div>
    </header>
  );
}

export default Header;

