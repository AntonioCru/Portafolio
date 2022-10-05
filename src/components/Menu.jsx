//react
import React, { useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

//styles
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/StylesMenu.module.css";

//files
import icon from "../img/icon.png";
import iconFacebook from "../img/facebook.png";
import iconInstagram from "../img/instagram.png";
import iconTwitter from "../img/twitter.png";

export const Menu = () => {
  const title = useRef(null);
  const facebook = useRef(null);
  const instagram = useRef(null);
  const twitter = useRef(null);

  useEffect(() => {
    let observer;

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target;

        if (entry.isIntersecting) {
          target.classList.add(styles.animate__bounce);
        } else {
          target.classList.remove(styles.animate__bounce);
        }
      });
    }, options);

    observer.observe(title.current);
    observer.observe(facebook.current);
    observer.observe(instagram.current);
    observer.observe(twitter.current);
    return undefined;
  }, []);

  return (
    <div className={styles.menuContainer}>
      <img className={styles.logo} src={icon} alt="logo" />
      <h2 className={styles.name}>Antony</h2>
      <h5 className={styles.subTitle} ref={title}>
        Desarrollador Web
      </h5>

      <ButtonGroup className={styles.buttonGroup} vertical>
        <Button variant="dark">Sobre</Button>
        <Button variant="dark">Mis habilidades</Button>

        <Button variant="dark">Trabajar</Button>
        <Button variant="dark">Contacto</Button>
        <Button variant="dark">Blog</Button>
      </ButtonGroup>

      <img
        className={styles.iconFacebook + " " + styles.animateBase}
        src={iconFacebook}
        alt="facebook.icon"
        ref={facebook}
      />
      <img
        className={styles.iconInstagram}
        src={iconInstagram}
        alt="instagram.icon"
        ref={instagram}
      />
      <img
        className={styles.iconTwitter}
        src={iconTwitter}
        alt="twitter.icon"
        ref={twitter}
      />
    </div>
  );
};
