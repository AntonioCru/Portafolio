import React from "react";
import styles from "../styles/StylesSectionGalery.module.css";
import image1 from "../img/1.png";
import image2 from "../img/2.png";
import image3 from "../img/3.png";

// import { motion } from "framer-motion";

export const SectionGalery = () => {
  return (
    <div className={styles.containerGalery}>
      {/* <img src={logoslack} alt="slak" className={`${styles.imgGalery}`}/> */}
      {/* <div className={`${styles.div1imgGalery}`}>
        <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          VIEW PROJECT
        </motion.span>
      </div> */}
      <img src={image1} alt="slak" className={`${styles.imgGalery}`} />

      <img
        src={image2}
        alt="slak"
        className={`${styles.imgGalery}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />

      <img src={image3} alt="slak" className={`${styles.imgGalery}`} />
      {/* <img src={image4} alt="slak" className={`${styles.imgGalery}`} /> */}
      {/* <img src={social} alt="slak" className={`${styles.imgGalery}`} />
      <img src={brand} alt="slak" className={`${styles.imgGalery}`} />
      <img src={bugatti} alt="slak" className={`${styles.imgGalery}`} />
      <img src={cafe} alt="slak" className={`${styles.imgGalery}`} />
      <img src={cupra} alt="slak" className={`${styles.imgGalery}`} />
      <img src={skoda} alt="slak" className={`${styles.imgGalery}`} /> */}
    </div>
  );
};
