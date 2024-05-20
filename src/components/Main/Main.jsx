import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <div className="contenidomain">
        <h2>Acerca de mí</h2>
        <p>
          Soy Facundo Heredia, un apasionado desarrollador de software con
          experiencia en diversas tecnologías de programación y un enfoque
          particular en el desarrollo web.
        </p>

        <h2>Educación</h2>
        <ul>
          <li>
            Estudiante de Programación en la Facultad Regional Tucumán de la
            Universidad Tecnológica Nacional
          </li>
          <li>
            Cursos complementarios en desarrollo web, incluyendo HTML, CSS,
            JavaScript y React
          </li>
        </ul>

        <h2>Habilidades</h2>
        <ul>
          <li>Programación: C#, JavaScript, HTML, CSS</li>
          <li>Frameworks y bibliotecas: React, Bootstrap</li>
          <li>Gestión de bases de datos: SQL</li>
          <li>Herramientas de control de versiones: Git</li>
        </ul>

        <h2>Experiencia Laboral</h2>
        <p>
          Actualmente estoy buscando oportunidades laborales en el campo del
          desarrollo web. Anteriormente, he realizado pasantías en empresas de
          desarrollo de software donde he adquirido experiencia en proyectos
          reales y colaborado con equipos multidisciplinarios.
        </p>
      </div>
    </main>
  );
};

export default Main;
