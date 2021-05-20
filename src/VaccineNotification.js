// import Image from 'react-bootstrap/Image';
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import img2 from "./Images/logo.png";

// import img2 from "./Images/logo.png";
import "./Vc.css";
// import { Form, Col, Button, Accordion, Card } from "react-bootstrap";

export const VaccineNotification = () => (
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
  </div>
);
