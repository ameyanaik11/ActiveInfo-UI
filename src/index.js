import ActiveInfo from "./components/ActiveInfo";
import { activeInfoRef } from "./config/firebase";
import DebugFirebase from "./components/DebugFirebase";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeInfo: undefined
    };
  }

  componentDidMount() {
    activeInfoRef.on("value", snapshot => {
      this.setState({
        activeInfo: snapshot.val()
      });
    });

    library.add(fab);
  }

  render() {
    const { activeInfo } = this.state;
    return (
      <div className="App">
        <DebugFirebase data={activeInfo} />
        {activeInfo && <ActiveInfo activeInfo={activeInfo} />}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
