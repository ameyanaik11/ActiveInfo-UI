import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const ColYoutube = styled(Col)`
  font-style: italic;
  text-align: center;

  .row {
    display: block;
  }
`;

const ListeningTo = ({ albumName, artistName, songName, timestamp }) => (
  <Container>
    <Row>
      <Col>
        <Row>Album: {albumName}</Row>
        <Row>Artist: {artistName}</Row>
        <Row>Song: {songName}</Row>
      </Col>
      <ColYoutube sm={4}>
        <a
          alt="Play on Youtube"
          href={`https://www.youtube.com/results?search_query=${encodeURI(
            songName
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Row>
            <FontAwesomeIcon icon={["fab", "youtube"]} size="3x" />
          </Row>
          <Row>
            <small>Play on Youtube</small>
          </Row>
        </a>
      </ColYoutube>
    </Row>
  </Container>
);

export default ListeningTo;
