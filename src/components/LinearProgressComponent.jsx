import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import styles from "../styles/StylesLiearProgressComponent.module.css";

export default function LinearProgressComponent({ skillName, skillLevel }) {
  return (
    <div className={styles.containerLinearGradient}>
      <h3>{skillName}</h3>
      <LinearProgress variant="determinate" value={skillLevel * 20} />
    </div>
  );
}
