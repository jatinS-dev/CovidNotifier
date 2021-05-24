// import Image from 'react-bootstrap/Image';
import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { getAvailabilityByPin } from "./api";
import img2 from "./Images/logo.png";
import { NoMatch } from "./NoMatch";

// import img2 from "./Images/logo.png";
import "./Vc.css";
// import { Form, Col, Button, Accordion, Card } from "react-bootstrap";

export const VaccineNotification = (props) => {
  const [found, setFound] = useState(false);
  const values = props.location.state;

  useEffect(() => {
    if (values.method === "pincode") {
      getAvailabilityByPin(values.pincode)
        .then(({ available }) => {
          if (available) {
            setFound(true);
          }
        })
    }
  }, [])
  return (
    <React.Fragment>
      {!found ?
        <div className="mainBody">
          <div className="covidlogo">
            <img src={img2} alt="/" className="cowinlogo" />
          </div>
          <h1>Finding Vaccine Slots for You. . .</h1>
          <div class="wrapper">
            <div class="container">
              <div class="heart"></div>
            </div>
          </div>
        </div> :
        <NoMatch />
      }
    </React.Fragment>
  )
};
