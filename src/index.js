import ActiveInfo from "./components/ActiveInfo";
import { activeInfoRef } from "./config/firebase";
import ApiKey from "./components/ApiKey";
import moment from "moment";
import Moment from "react-moment";
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeInfo: undefined,
      lastUpdated: moment()
    };
  }

  componentDidMount() {
    activeInfoRef.on("value", snapshot => {
      this.setState({
        activeInfo: snapshot.val(),
        lastUpdated: moment()
      });
    });
  }

  render() {
    const { activeInfo, lastUpdated } = this.state;
    return (
      <div className="App">
        Last updated: <Moment date={lastUpdated} fromNow interval={30} />
        <ApiKey />
        {activeInfo && <ActiveInfo activeInfo={activeInfo} />}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
