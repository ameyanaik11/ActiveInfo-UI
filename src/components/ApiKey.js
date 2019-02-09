import { getFirebaseApiKey } from "../config/storeSecret";
import React from "react";

const ApiKey = () => (
  <span>
    <p>
      <i>API Key: {getFirebaseApiKey()}</i>
    </p>
    <hr />
  </span>
);

export default ApiKey;
