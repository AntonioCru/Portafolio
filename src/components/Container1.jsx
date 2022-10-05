import React, { useEffect, useRef } from "react";
import styles from "../styles/StylesContainer1.module.css";

export const Container1 = () => {
  const titulo = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target;

        if (entry.isIntersecting) {
          target.classList.add(styles.animate__bounce);
        }

      });
    });

    console.log(titulo.current);
    observer.observe(titulo.current);
  }, []);

  return (
    <div className={styles.container1}>
      <h1 className={styles.title} ref={titulo}>
        Hola, soy Antony, desarrollador web
      </h1>
    </div>
  );
};
