import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import imagedatabases from "../img/databases.jpeg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "../styles/StylesTable.module.css";

export const Cards = () => {
  return (
    // <div className="card " style={{ width: '20rem', height: '38rem'}}>
    //   <img src={imagedatabases} alt="DataBases" />
    //   <div class="card-header text-center">Featured</div>
    //   <div className="card-body">
    //     <div class="card-body">
    //       <h4 className="card-title">My title</h4>
    //       <p className="card-text text-secondary">
    //         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
    //         magni dolores unde provident sit maiores iusto! Dolorem perspiciatis
    //         aut explicabo nisi reprehenderit nihil non eaque ab dolore, animi
    //         eius tempore.
    //       </p>
    //       <a href="#" class="btn btn-primary">
    //         Go somewhere
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <Card style={{ width: "18rem", height: "29rem" }}>
      <Card.Img  src={imagedatabases} />
      <div class="card-header text-center">Featured</div>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className={styles.buttomCard} variant="primary">Go somewhere</Button>
        {/* <a href="#" class="btn btn-primary">
          Go somewhere
        </a> */}
      </Card.Body>
    </Card>
  );
};
