import _ from "lodash";
import DeviceBattery from "./DeviceBattery";
import DeviceConnection from "./DeviceConnection";
import { iftttDateOrUndefined } from "./helpers";
import ListeningTo from "./ListeningTo";
import moment from "moment";
import Moment from "react-moment";
import YoutubeVideo from "./YoutubeVideo";
import React, { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";

const ActiveInfo = ({ activeInfo }) => {
  const devices = _.mapValues(activeInfo.devices, recalculateLastTimestamp);

  return (
    <Tabs
      defaultActiveKey={deviceNameWithRecentTimestamp(devices)}
      id="uncontrolled-tab-example"
    >
      {_.keys(devices).map((deviceName, index) => {
        const device = devices[deviceName];
        const {
          connection,
          isCharging,
          lastKnownBattery,
          lastTimestamp,
          listeningTo
        } = device;
        const likedYoutubeVideoUrl = _.at(device, "videoLike.url")[0];

        return (
          <Tab eventKey={deviceName} title={tabTitle(deviceName, device)}>
            {connection && <DeviceConnection {...connection} />}
            {lastKnownBattery && (
              <DeviceBattery {...{ lastKnownBattery, isCharging }} />
            )}
            {likedYoutubeVideoUrl && (
              <YoutubeVideo url={likedYoutubeVideoUrl} />
            )}
            {listeningTo && <ListeningTo {...listeningTo} />}
            {lastTimestamp && `Timestamp: ${lastTimestamp}`}
          </Tab>
        );
      })}
    </Tabs>
  );
};

/* Helpers */
const recalculateLastTimestamp = device => {
  const lastTimestamp =
    iftttDateOrUndefined(_.get(device, "listeningTo.timestamp")) ||
    iftttDateOrUndefined(_.get(device, "videoLike.timestamp")) ||
    moment(device.lastTimestamp);
  return {
    ...device,
    lastTimestamp
  };
};

const deviceNameWithRecentTimestamp = devices => {
  const recentTimestamp = _.chain(devices)
    .values()
    .map("lastTimestamp")
    .max()
    .value();
  return _.findKey(devices, { lastTimestamp: recentTimestamp });
};

const tabTitle = (deviceName, device) => (
  <span>
    <span style={{ display: "block" }}>{deviceName}</span>
    <span
      className="timestamp"
      style={{ color: "darkgrey", display: "block", fontSize: "small" }}
    >
      <i className="glyphicon glyphicon-time" />{" "}
      <Moment date={device.lastTimestamp} fromNow interval={60} />
    </span>
  </span>
);

/* Exports */
export default ActiveInfo;
