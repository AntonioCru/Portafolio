import React from "react";
import { Cards } from "../components/Cards";
// import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/StylesTable.module.css";

export const SectionTable = () => {
  const cards = [
    {
      id: 1,
      title: "WEB DEVELOPMENT",
      subtitle: "HTML5 y CCS.",
      paragraph:
        "El lenguaje de marcado de hipertexto (HTML) estructura que le damos al contenido web con tecnologias para describir la apariencia/presentación de una pagina web (CSS).",
      color: "#e4ee89",
    },
    {
      id: 2,
      title: "WEB DEVELOPMENT",
      subtitle: "JavaScript",
      paragraph:
        "Fundamentos de programacion en JS, front-end. Programacion a utilizar para obtener informacion desde una BD con una API y utilizando diferentes herramientas para la manipulación de la informacion y el consumo de servicios back-end.",
    },
    {
      id: 2,
      title: "SQL y Bases de Datos",
      subtitle: "Fundamentos de BD y SQL.",
      paragraph:
        "Creación de BD usando MySql, postgreSQL, almacenamiento de datos de forma estructurada. Lenguaje a uilizar para encontrar, cambiar, añadir o eliminar datos.",
    },
    {
      id: 3,
      title: "Framer Motion",
      subtitle: "Fundamentos basicos de Framer Motion",
      paragraph:
        "Animaciones utilizando esta biblioteca para animar y gestualizar componentes.",
    },
    {
      id: 4,
      title: "Git",
      subtitle:
        "Herramienta utilizada para aislar los cambios y/o combinarlos.",
      paragraph:
        "Las ramas, punteros ligeros para el trabajo en curso en la que administran esta separación. finalizado el trabajo creado en una rama, se puede combinar de nuevo en la rama principal del equipo.",
    },
    {
      id: 5,
      title: "API",
      subtitle: "Interfaz de Programación de Aplicaciones",
      paragraph:
        "Conocimiento para la comunicacion entre dos aplicaciones de software comunicarse entre si mediante el conjunto de definiciones y protocolos.",
    },
    {
      id: 6,
      title: "React Js",
      subtitle: "Libreria de Js.",
      paragraph:
        "Paradigma de programacion que enfocamos en componentes, donde cada componente es una pieza con la que el usuario puede interactuar. Bloques de codigo que se crean mediate una sintaxis de JSX, en la que escribimos HTML y opcionalmente CSS dentro de objetos Js. Podemos utilizar Gatsby con react.",
    },
    {
      id: 7,
      title: "React Js",
      subtitle: "Libreria de Js.",
      paragraph:
        "Paradigma de programacion que enfocamos en componentes, donde cada componente es una pieza con la que el usuario puede interactuar. Bloques de codigo que se crean mediate una sintaxis de JSX, en la que escribimos HTML y opcionalmente CSS dentro de objetos Js.",
    },
    {
      id: 8,
      title: "Cypress",
      subtitle: "Herramienta de automatización de pruebas frontend.",
      paragraph:
        "Herramienta que utilizamos para la automatizacion de pruebas de front-end utilizando programacion Js.",
    },
    {
      id: 9,
      title: "Tailwind",
      subtitle: "Framework de CSS.",
      paragraph:
        "Utilizar este framework CSS, donde se usan varias clases de utilidades de un solo propósito que se puede utilizar directamente dentro de un elemento.",
    },
    {
      id: 10,
      title: "Bootstrap",
      subtitle: "Framework, marco de diseño.",
      paragraph:
        "Utilizar varias clases de diferente utilidad para la creacion de aplicaciones web, ademas de sitios responcivos en diferentes pantallas. Utilizar Bootstrap con los componentes que ya cuenta este Framework para la creacion mas rapida de paginas web.",
    },
    {
      id: 11,
      title: "Material UI",
      subtitle: "Biblioteca de componentes de interfaz.",
      paragraph:
        "Utilizar los componentes listos para se usados y acelerar el desarrollo de aplicaciones web.",
    },
  ];

  return (
    <div className={styles.app}>
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          {cards.map((card) => (
            <div className={`col-md-4`} key={card.key}>
              <Cards
                title={card.title}
                subtitle={card.subtitle}
                paragraph={card.paragraph}
                color={card.color}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
