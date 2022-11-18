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
    },
    {
      id: 2,
      title: "WEB DEVELOPMENT",
      subtitle: "Fundamentos de JavaScript",
      paragraph: "fundamentos basicos de programacion WEB",
    },
    {
      id: 2,
      title: "SQL y Bases de Datos",
      subtitle: "Fundamentos basicos de BD y SQL",
      paragraph: "fundamentos basicos para la creacion de BD",
    },
  ];

  return (
    <div className={styles.app}>
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          {cards.map((card) => (
            <div className="col-md-4" key={card.key}>
              <Cards title={card.title} subtitle={card.subtitle} paragraph={card.paragraph}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
