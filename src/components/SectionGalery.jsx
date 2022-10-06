import React from 'react';
import styles from '../styles/StylesSectionGalery.module.css';
import logoslack from '../img/logoslack.jpeg';
import black from '../img/black.webp';
import lobo from '../img/lobo.webp';
import silver from '../img/silver.webp';
import social from '../img/social.png';
import brand from '../img/brand.webp';
import bugatti from '../img/bugatti.webp';
import cafe from '../img/cafe.jpeg';
import cupra from '../img/cupra.webp';
import skoda from '../img/skoda.webp';

export const SectionGalery = () => {
  return (
    <div className={styles.containerGalery}>
      <img src={logoslack} alt="slak" className={`${styles.imgGalery}`}/>
      <img src={black} alt="slak" className={`${styles.imgGalery}`}/>
      <img src={lobo} alt="slak" className={`${styles.imgGalery}`}/>
      <img src={silver} alt="slak" className={`${styles.imgGalery}`}/>
      <img src={social} alt="slak" className={`${styles.imgGalery}`}/>
      <img src={brand} alt="slak" className={`${styles.imgGalery}`}/>
      <img src={bugatti} alt="slak" className={`${styles.imgGalery}`}/>
      <img src={cafe} alt="slak" className={`${styles.imgGalery}`}/>
      <img src={cupra} alt="slak" className={`${styles.imgGalery}`}/>
      <img src={skoda} alt="slak" className={`${styles.imgGalery}`}/>
    </div>
  )
}

