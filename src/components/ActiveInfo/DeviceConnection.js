import React from "react";
import { Container, Row } from "react-bootstrap";

const DeviceConnection = ({ isWifi, network }) => {
  const readableNetwork = network
    ? `${network} ${isWifi === true && "(WiFi)"}`
    : "Mobile Data";

  return (
    <Container>
      <Row>Connection: {readableNetwork}</Row>
    </Container>
  );
};

export default DeviceConnection;
