// import Image from 'react-bootstrap/Image';
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import img3 from "./Images/check-circle.gif";
import "./NM.css";
// import { Form, Col, Button, Accordion, Card } from "react-bootstrap";

export const NoMatch = () => (
  <div className="mainBody">
    <div className="done">
      <img src={img3} alt="/" className="cowinlog" />
      <div className="awe">
        <h1 className="pokk">Awesome!</h1>
        <h1 className="pook11">We found Vaccine Slots for you</h1>
        <h3 className="cli">
          Click here to Open Cowin Portal -
          <a href="https://www.cowin.gov.in/home">Cowin Portal</a>
        </h3>
      </div>
    </div>
  </div>
);
