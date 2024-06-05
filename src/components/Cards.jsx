import React from "react";
import Card from "react-bootstrap/Card";
import styles from "../styles/StylesTable.module.css";

export const Cards = ({ title, subtitle, paragraph, color }) => {
  return (
    <Card style={{ width: "21rem", height: "18rem" }} className={styles.card}>
      <div class="card-header text-center">{subtitle}</div>
      <Card.Body className={styles.descripcionCard}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{paragraph}</Card.Text>
      </Card.Body>
    </Card>
  );
};
