import Moment from "react-moment";
import React from "react";

const ListeningTo = ({ albumName, artistName, songName, timestamp }) => (
  <React.Fragment>
    <p>Album: {albumName}</p>
    <p>Artist: {artistName}</p>
    <p>Song: {songName}</p>
    <p>
      <a
        href={`https://www.youtube.com/results?search_query=${encodeURI(
          songName
        )}`}
        target="_blank"
      >
        Play on Youtube
      </a>
    </p>
  </React.Fragment>
);

export default ListeningTo;
