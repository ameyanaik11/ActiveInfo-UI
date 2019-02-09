import { Container } from "react-bootstrap";
import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";

const StyledContainer = styled(Container)`
  border: dotted 1px;
  text-align: center;
`;

const YoutubeVideo = ({ url }) => (
  <StyledContainer>
    <YouTube videoId={getYoutubeVideoId(url)} />
  </StyledContainer>
);

/* Helper */
const getYoutubeVideoId = url => {
  // https://gist.github.com/takien/4077195
  var ID = "";
  url = url
    .replace(/(>|<)/gi, "")
    .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if (url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
  } else {
    ID = url;
  }
  return ID;
};

export default YoutubeVideo;
