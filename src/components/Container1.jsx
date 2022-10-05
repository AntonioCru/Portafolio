import React from "react";
import styles from "../styles/StylesContainer1.module.css";

export const Container1 = () => {
  return (
    <div className={styles.container1}>
      <h1 className={styles.title}>
        <span>H</span>
        <span>o</span>
        <span>l</span>
        <span>a</span>,<br />
        <span>s</span>
        <span>o</span>
        <span>y</span>
        <span>A</span>
        <span>n</span>
        <span>t</span>
        <span>o</span>
        <span>n</span>
        <span>y</span>, <br />
        <span>D</span>
        <span>e</span>
        <span>s</span>
        <span>a</span>
        <span>r</span>
        <span>r</span>
        <span>o</span>
        <span>l</span>
        <span>l</span>
        <span>a</span>
        <span>d</span>
        <span>o</span>
        <span>r</span>
        <span>W</span>
        <span>e</span>
        <span>b</span>
      </h1>

      <p className={styles.subtitulo}>Desarrollador Front End</p>

      <div className={styles.containerButtom1}>
        <button className={styles.butttomContact}>
          <div className={styles.icon}>
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
          <span>¡Contactame!</span>
        </button>
      </div>

      <div className={styles.containerbotom2}>
        <button className={styles.butttomContact2}>
          <div className={styles.icon2}>
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
          <span className={styles.span2}>¡Contactame!</span>
        </button>
      </div>

      <div className={styles.containerSubTitulo}>
        <h2 className={styles.SubTitleH2}>
            <span>METRO</span>
            <span>y</span>
            <span>PAGS</span>
            <span>o</span>
            <span>r</span>
            <span>t</span>
            <span>F</span>
            <span>o</span>
            <span>y</span>
            <span>o</span>
            <span>i</span>
            <span>o</span>
        </h2>
          <div className={styles.containerparagraph2}>
        <p className={styles.paragraph2}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, repudiandae facere recusandae accusantium, cum eveniet officia sapiente molestias nesciunt aperiam rerum! Impedit, quae amet eligendi debitis velit consequatur molestias nobis!</p>
        <button className={styles.buttonsec2}>¡Ver mas!</button>
        </div>

        
      </div>
    </div>
  );
};
