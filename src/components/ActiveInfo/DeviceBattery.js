import React from "react";
import { Container, Row } from "react-bootstrap";

const DeviceBattery = ({ lastKnownBattery, isCharging }) => (
  <Container>
    <Row>
      Battery: {lastKnownBattery} (
      {isCharging === true ? "Charging" : "Unplugged"})
    </Row>
  </Container>
);

export default DeviceBattery;
