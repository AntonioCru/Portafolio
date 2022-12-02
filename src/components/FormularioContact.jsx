import React from "react";
import styles from "../styles/StylesFormularioContact.module.css";

export const FormularioContact = () => {
  return (
    <div className={styles.containerFormularioContact}>
      <div className={styles.containerContact}>
        <h2 className={styles.subtitleContact}>Contact</h2>
        <p className={styles.paragraphContact}>
          Estoy interesado en oportunidades, especialmente en proyectos grandes.
          No obstante, si tienes otra petición o pregunta, no dudes en utilizar
          el formulario.
        </p>

        <div className={styles.formulario}>
          <input type="text" className={styles.inputText}/>
          <input type="text" className={styles.inputText}/>
          <input type="text" className={styles.inputText2}/>
          <input type="text" className={styles.inputText2}/>
        </div>
      </div>

      <div className={styles.containerMap}>MAPA</div>
    </div>
  );
};
