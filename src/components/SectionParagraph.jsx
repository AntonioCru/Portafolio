import { useAnimationFrame } from "framer-motion";
import React, { useRef } from "react";
import styles from "../styles/StylesSectionParagraph.module.css";
import { motion, useInView } from "framer-motion";
import LinearProgressComponent from "./LinearProgressComponent";

export const SectionParagraph = () => {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 4000) * 200;
    const y = (1 + Math.sin(t / 1000000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  const isInView = useInView(ref, { once: true });
  const stylesC = {
    transform: isInView ? "none" : "translateX(-200px)",
    opacity: isInView ? 1 : 0,
    // transition: '1.3s all cubic-bezier(.17,.86,.76,.66)'
  };

  return (
    <div className={styles.containerSectionParagraph} translate="no">
      <div className={styles.sectionParagraph} ref={ref}>
        <h2 id="MyHabilities">
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 3,
                mass: 4, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            M
          </motion.span>
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 3,
                mass: 4, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            i
          </motion.span>
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 3,
                mass: 4, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            s
          </motion.span>
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 3,
                mass: 4, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            -
          </motion.span>
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 3,
                mass: 4, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            H
          </motion.span>
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 3,
                mass: 4, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            a
          </motion.span>
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 3,
                mass: 4, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            b
          </motion.span>
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 3,
                mass: 4, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            i
          </motion.span>
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 3,
                mass: 4, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            l
          </motion.span>
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 3,
                mass: 4, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            i
          </motion.span>
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 3,
                mass: 4, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            d
          </motion.span>
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 3,
                mass: 4, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            a
          </motion.span>
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 3,
                mass: 4, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            d
          </motion.span>
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 3,
                mass: 4, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            e
          </motion.span>
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 3,
                mass: 4, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            s
          </motion.span>
        </h2>

        <div className={styles.containerHabilities}>
          <LinearProgressComponent skillName="Eslint" skillLevel={3.5} />
          <LinearProgressComponent
            skillName="Visual Studio Code"
            skillLevel={3.5}
          />
          <LinearProgressComponent
            skillName="MySql, PostgreSql"
            skillLevel={2.5}
          />
          <LinearProgressComponent skillName="Ingles" skillLevel={2.5} />
          <LinearProgressComponent skillName="Autodidacta" skillLevel={4.5} />
          <LinearProgressComponent skillName="Adaptable" skillLevel={4.5} />
          <LinearProgressComponent skillName="Comprometido" skillLevel={4.5} />
          <LinearProgressComponent skillName="Responsable" skillLevel={4.5} />
          <LinearProgressComponent skillName="Git" skillLevel={3.5} />
          <LinearProgressComponent skillName="Bootstrap" skillLevel={3.5} />
          <LinearProgressComponent skillName="Tailwind" skillLevel={3.5} />
          <LinearProgressComponent
            skillName="Trabajo en equipo"
            skillLevel={4.5}
          />
          <LinearProgressComponent skillName="Comunicación" skillLevel={3.5} />
          <LinearProgressComponent
            skillName="Base de datos relacionales"
            skillLevel={3.5}
          />
          <LinearProgressComponent
            skillName="Html5, css y JavaScript"
            skillLevel={4.5}
          />
          <LinearProgressComponent
            skillName="Programas de edición"
            skillLevel={1.5}
          />
          <LinearProgressComponent skillName="React js" skillLevel={3.5} />
          <LinearProgressComponent skillName="Cypress" skillLevel={1.5} />
        </div>
        {/* <p>       
        </p> */}
      </div>

      <div className={styles.container3d}>
        <div className={styles.containerCube}>
          <div className={styles.cube} ref={ref}>
            {/* <div className={`${styles.side}${styles.front}`}></div> */}
            <div className={styles.side + " " + styles.front}>
              REACT, JAVASCRIPT
            </div>
            <div className={styles.side + " " + styles.left}>
              CSS, TAIILWIND, BOOTSTRAP, SASS, FIGMA
            </div>
            <div className={styles.side + " " + styles.right}>
              FRAMER MOTION, MATERIAL UI
            </div>
            <div className={styles.side + " " + styles.top}>HTML</div>
            <div className={styles.side + " " + styles.bottom}>
              GIT, GITHUB, JIRA, BITBUCKET
            </div>
            <div className={styles.side + " " + styles.back}>CYPRESS</div>
          </div>
        </div>
      </div>
    </div>
  );
};
