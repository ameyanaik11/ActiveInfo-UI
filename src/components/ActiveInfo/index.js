import _ from "lodash";
import DeviceBattery from "./DeviceBattery";
import DeviceConnection from "./DeviceConnection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iftttDateOrUndefined } from "./helpers";
import ListeningTo from "./ListeningTo";
import moment from "moment";
import Moment from "react-moment";
import React from "react";
import styled from "styled-components";
import YoutubeVideo from "./YoutubeVideo";
import { Container, Tab, Tabs } from "react-bootstrap";

const Timestamp = styled.section`
  color: darkgray;
  font-size: small;
  font-style: italic;
`;

const ActiveInfo = ({ activeInfo }) => {
  const devices = _.mapValues(activeInfo.devices, recalculateLastTimestamp);

  return (
    <Tabs
      defaultActiveKey={deviceNameWithRecentTimestamp(devices)}
      id="active-info-tabs"
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
            <Container>
              {connection && <DeviceConnection {...connection} />}
              {lastKnownBattery && (
                <DeviceBattery {...{ lastKnownBattery, isCharging }} />
              )}
              {likedYoutubeVideoUrl && (
                <YoutubeVideo url={likedYoutubeVideoUrl} />
              )}
              {listeningTo && <ListeningTo {...listeningTo} />}
              {lastTimestamp && (
                <Timestamp>Last updated: {lastTimestamp.toString()}</Timestamp>
              )}
            </Container>
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
  <React.Fragment>
    {deviceName}
    <Timestamp>
      <FontAwesomeIcon icon={["far", "clock"]} />{" "}
      <Moment date={device.lastTimestamp} fromNow />
    </Timestamp>
  </React.Fragment>
);

/* Exports */
export default ActiveInfo;
