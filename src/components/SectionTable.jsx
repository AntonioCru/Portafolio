import React from "react";
import { Cards } from "../components/Cards";
// import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/StylesTable.module.css";

export const SectionTable = () => {
  const cards = [
    {
      id: 1,
      title: "WEB DEVELOPMENT",
      subtitle: "Fundamentos de HTML5 y CCS",
      paragraph:
        "El lenguaje de marcado de hipertexto (HTML) estructura documeentos como paginas web",
        color: '#e4ee89',
    },
    {
      id: 2,
      title: "WEB DEVELOPMENT",
      subtitle: "Fundamentos de JavaScript",
      paragraph: "Fundamentos basicos de programacion WEB",
    },
    {
      id: 2,
      title: "SQL y Bases de Datos",
      subtitle: "Fundamentos basicos de BD y SQL",
      paragraph: "Fundamentos basicos para la creacion de BD",
    },
    {
      id: 3,
      title: "Framer Motion",
      subtitle: "Fundamentos basicos de Framer Motion",
      paragraph: "Animaciones utilizando la libreria",
    },
    {
      id: 4,
      title: "Github",
      subtitle: "Uso de tecnologia con fundamentoas solidos",
      paragraph:
        "Utilizar el sistema de gestion de versiones Git cuando estas tienen un ran numero de archivos de codigo fuente",
    },
    {
      id: 5,
      title: "API",
      subtitle: "Interfaz de Programación de Aplicaciones",
      paragraph:
        "Conocimiento para la comunicacion entre dos componenttes de software comunicarse entre si mediante el un conjunto de definiciones y protocolos",
    },
  ];

  return (
    <div className={styles.app}>
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          {cards.map((card) => (
            <div className="col-md-4" key={card.key}>
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
