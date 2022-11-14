import React from "react";
import { Cards } from "../components/Cards";
// import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/StylesTable.module.css";

export const SectionTable = () => {
  return (
    <div className={styles.app}>
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          <div className="col-md-4">
            <Cards />
          </div>

          <div className="col-md-4">
            <Cards />
          </div>

          <div className="col-md-4">
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};
