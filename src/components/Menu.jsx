import React from "react";
import styles from "../styles/StylesMenu.module.css";
import icon from "../img/icon.png";
import icon2 from "../img/icon2.png";
import iconFacebook from '../img/facebook.png'
import iconWhatsapp from '../img/whatsapp.png'
import iconTwitter from '../img/twitter.png'
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <img className={styles.logo} src={icon2} alt="logo" />
      <h2 className={styles.name}>Antony</h2>
      <h5 className={styles.subTitle}>Desarrollador Web</h5>

      <ButtonGroup className={styles.buttonGroup} vertical>
        <Button variant='dark'>Sobre</Button>
        <Button variant='dark'>Mis habilidades</Button>

        <Button variant='dark'>Trabajar</Button>
        <Button variant='dark'>Contacto</Button>
        <Button variant='dark'>Blog</Button>
      </ButtonGroup>

      <img className={styles.iconFacebook} src={iconFacebook} alt="facebook.icon" />
      <img className={styles.iconInstagram} src={iconWhatsapp} alt="whatsapp.icon" />
      <img className={styles.iconTwitter} src={iconTwitter} alt="twitter.icon" />
    </div>
  );
};
