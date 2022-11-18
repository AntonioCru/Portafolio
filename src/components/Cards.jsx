import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import imagedatabases from "../img/databases.jpeg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "../styles/StylesTable.module.css";

export const Cards = ({title, subtitle, paragraph}) => {
  return (
    <Card style={{ width: "18rem", height: "15rem"}} className={styles.card}>
      {/* <Card.Img  src={imagedatabases} /> */}
      <div class="card-header text-center">Featured</div>
      <Card.Body>
          <h6>{subtitle}</h6>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {paragraph}
        </Card.Text>
        <Button className={styles.buttomCard} variant="primary">Go somewhere</Button>
        {/* <a href="#" class="btn btn-primary">
          Go somewhere
        </a> */}
      </Card.Body>
    </Card>
  );
};
