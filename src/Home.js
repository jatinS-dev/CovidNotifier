// import Image from 'react-bootstrap/Image';
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import img2 from "./Images/logo.png";
import "./Home.css";
import { Form, Col, Button, Accordion, Card } from "react-bootstrap";

export const Home = () => (
  <div className="mainBody">
    <div className="covidlogo">
      <img src={img2} alt="/" className="cowinlogo" />
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
        <Button variant="danger" size="lg">
          Get Notified
        </Button>{" "}
      </div>
    </div>
    <div className="FAQ">*General Questions/ FAQ</div>
    <div className="acco">
      <Accordion defaultActiveKey="0" className="pokemon">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            How this site works?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Just enter either your pincode or state and district and this site
              will give you instant notification whenever we detect an
              availability. Note that to receive notification you have to keep
              the site open
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            How will I receive the notification?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              This site will make a bell like sound whenever an availability is
              detected. We suggest you to also keep cowin site open in order to
              immediately book the slot.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Is my personal data collected?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              No we do not collect any personal data from the user. This site
              remains 100% transparent. Any queries contact the developers
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>

    <div className="myFooter">
      <footer class="page-footer font-small blue">
        <div class="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="/"> Covid Relief Ninjas</a>
        </div>
      </footer>
    </div>
  </div>
);
