import { getFirebaseApiKey } from "../config/storeSecret";
import moment from "moment";
import Moment from "react-moment";
import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  background: lightgrey;
  border-bottom: solid;
  font-size: small;
  font-style: italic;
`;

const DebugFirebase = React.memo(({ data }) => {
  const lastUpdated = moment.now();
  return (
    <StyledParagraph>
      API Key: {getFirebaseApiKey()}
      <br />
      Data last updated: <Moment date={lastUpdated} fromNow />
    </StyledParagraph>
  );
});

export default DebugFirebase;
