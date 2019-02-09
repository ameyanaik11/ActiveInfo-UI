import React from "react";

const DeviceBattery = ({ lastKnownBattery, isCharging }) => (
  <p>
    Battery: {lastKnownBattery} (
    {isCharging === true ? "Charging" : "Unplugged"})
  </p>
);

export default DeviceBattery;
