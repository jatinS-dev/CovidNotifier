// import Image from 'react-bootstrap/Image';
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import img2 from "./Images/logo.png";
import "./Home.css";
import { Form, Col, Button } from "react-bootstrap";

export const Home = () => (
  <div className="mainBody">
    <div className="covidlogo">
      <img src={img2} alt="/" />
    </div>
    <div className="mainDiv">
      <div className="name">
        <Form.Group>
          <Form.Control size="lg" type="text" placeholder="Name" />
        </Form.Group>
      </div>
      <div className="state">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Control size="lg" as="select" defaultValue="Choose...">
            <option>- State -</option>
            <option>Andhra Pradesh</option>
            <option>Arunachal Pradesh</option>
            <option> Assam</option>
            <option>Bihar</option>
            <option>Chhattisgarh</option>
            <option>Goa</option>
            <option>Gujarat</option>
            <option>Haryana</option>
            <option>Himachal Pradesh</option>
            <option>Jharkhand</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Madhya Pradesh</option>
            <option>Maharashtra</option>
            <option>Manipur</option>
            <option>Meghalaya</option>
            <option>Mizoram</option>
            <option>Nagaland</option>
            <option>Odisha</option>
            <option>Punjab</option>
            <option>Rajasthan</option>
            <option>Sikkim</option>
            <option>Tamil Nadu</option>
            <option>Telangana</option>
            <option>Tripura</option>
            <option>Uttar Pradesh</option>
            <option>Uttarakhand</option>
            <option>West Bengal</option>
          </Form.Control>
        </Form.Group>

        <div className="name">
          <Form.Group>
            <Form.Control size="lg" type="text" placeholder="City Name" />
          </Form.Group>
        </div>

        <div className="pin">
          <Form.Group>
            <Form.Control size="lg" type="text" placeholder="Pin Code" />
          </Form.Group>
        </div>
      </div>
      <div className="mybutton">
        <Button variant="outline-success" size="lg">
          Get Notified
        </Button>{" "}
      </div>
    </div>
  </div>
);
