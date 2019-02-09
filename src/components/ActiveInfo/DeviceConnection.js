import React from "react";

const DeviceConnection = ({ isWifi, network }) => {
  const readableNetwork = network
    ? `${network} ${isWifi === true && "(WiFi)"}`
    : "Mobile Data";

  return <p>Connection: {readableNetwork}</p>;
};

export default DeviceConnection;
