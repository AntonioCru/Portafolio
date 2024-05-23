import React from "react";
import styles from "../styles/StylesFormularioContact.module.css";

export const FormularioContact = () => {
  return (
    <div className={styles.containerFormularioContact}>
      <div className={styles.containerContact}>
        <h2 className={styles.subtitleContact}>Contact</h2>
        <p className={styles.paragraphContact}>
          Estoy interesado en oportunidades. No obstante, si tienes otra
          petición o pregunta, no dudes en utilizar el formulario.
        </p>

        <div className={styles.formulario}>
          <input
            placeholder="Nombre"
            type="text"
            className={styles.inputText1}
          />
          <input
            placeholder="Telefono"
            type="text"
            className={styles.inputText2}
          />
          <input
            placeholder="Correo"
            type="text"
            className={styles.inputText3}
          />
          <input
            placeholder="Dirección"
            type="text"
            className={styles.inputText4}
          />
        </div>
      </div>

      {/* <div className={styles.containerMap}>MAPA</div> */}
    </div>
  );
};
