import Moment from "react-moment";
import React from "react";
import styled from "styled-components";

const Line = styled.section``;

const ListeningTo = ({ albumName, artistName, songName, timestamp }) => (
  <React.Fragment>
    <Line>Album: {albumName}</Line>
    <Line>Artist: {artistName}</Line>
    <Line>Song: {songName}</Line>
    <Line>
      <a
        href={`https://www.youtube.com/results?search_query=${encodeURI(
          songName
        )}`}
        target="_blank"
      >
        Play on Youtube
      </a>
    </Line>
  </React.Fragment>
);

export default ListeningTo;
