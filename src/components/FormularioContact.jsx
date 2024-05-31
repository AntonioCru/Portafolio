import React from "react";
import styles from "../styles/StylesFormularioContact.module.css";
import stylesTwo from "../styles/StylesContainer1.module.css";

export const FormularioContact = () => {
  return (
    <div className={styles.containerFormularioContact} id="MyContact">
      <div className={styles.containerContact}>
        <h2 className={styles.subtitleContact}>Contactame</h2>
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
          <div className={stylesTwo.containerbotom2}>
            <button className={stylesTwo.butttomContact2}>
              <div className={stylesTwo.icon2}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </div>
              <span className={stylesTwo.span2}>Contactar</span>
            </button>
          </div>
        </div>
      </div>
      {/* <div className={styles.containerMap}>MAPA</div> */}
    </div>
  );
};
