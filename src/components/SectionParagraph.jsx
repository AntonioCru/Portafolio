import { useAnimationFrame } from "framer-motion";
import React, { useRef } from "react";
import styles from "../styles/StylesSectionParagraph.module.css";

export const SectionParagraph = () => {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 4000) * 200;
    const y = (1 + Math.sin(t / 1000000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div className={styles.containerSectionParagraph}>
      <div className={styles.sectionParagraph}>
        <h2>
          <span>M</span>
          <span>e</span>,<span>M</span>
          <span>y</span>
          <span>s</span>
          <span>e</span>
          <span>l</span>
          <span>f</span>
          <span>a</span>
          <span>n</span>
          <span>d</span>
          <span>l</span>
        </h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          laudantium labore saepe quod numquam sed quidem ullam veritatis dicta
          necessitatibus tempora quia architecto officiis inventore, et, iusto
          soluta neque ipsam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Porro, sed eius. Asperiores ullam illo nemo fugit ducimus ipsum
          suscipit, provident doloremque! Officiis atque, explicabo blanditiis
          dolor molestias laborum a labore. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Atque eos sit aperiam suscipit ipsa
          adipisci ea neque ullam ut earum natus beatae excepturi, nobis cum
          fugiat id, quia error? Quod?
        </p>
      </div>


      <div className={styles.container3d}>
        <div className={styles.containerCube}>
          <div className={styles.cube} ref={ref}>
            {/* <div className={`${styles.side}${styles.front}`}></div> */}
            <div className={styles.side + " " + styles.front}>JAVASCRIPT</div>
            <div className={styles.side + " " + styles.left}>CSS</div>
            <div className={styles.side + " " + styles.right}>FRAMER MOTION</div>
            <div className={styles.side + " " + styles.top}>HTML</div>
            <div className={styles.side + " " + styles.bottom}>BOOSTRAP</div>
            <div className={styles.side + " " + styles.back}>REACT JS</div>
          </div>
        </div>
      </div>
    </div>
  );
};
