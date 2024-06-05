import React from "react";
import styles from "../styles/StylesMenu.module.css";
// import icon from "../img/icon.png";
import icon2 from "../img/icon2.png";
// import iconFacebook from "../img/facebook.png";
import iconWhatsapp from "../img/whatsapp.png";
// import iconTwitter from "../img/twitter.png";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export const Menu = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.menuContainer}>
      <img className={styles.logo} src={icon2} alt="logo" />
      <h2 className={styles.name}>Antonio</h2>
      <h5 className={styles.subTitle}>Desarrollador Web</h5>

      <ButtonGroup className={styles.buttonGroup} vertical>
        <Button variant="dark" onClick={() => scrollToSection("MyPortafolio")}>
          Sobre
        </Button>
        <Button variant="dark" onClick={() => scrollToSection("MyHabilities")}>
          Mis habilidades
        </Button>

        <Button
          variant="dark"
          onClick={() => scrollToSection("MyHabilitiesWork")}
        >
          Trabajar
        </Button>
        <Button variant="dark" onClick={() => scrollToSection("MyContact")}>
          Contacto
        </Button>
        {/* <Button variant="dark">Blog</Button> */}
      </ButtonGroup>

      {/* <img className={styles.iconFacebook} src={iconFacebook} alt="facebook.icon" /> */}
      <a
        className={styles.iconInstagram}
        href="https://api.whatsapp.com/send/?phone=527296879216&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={iconWhatsapp} alt="whatsapp.icon" />
      </a>
      {/* <img className={styles.iconTwitter} src={iconTwitter} alt="twitter.icon" /> */}
    </div>
  );
};
