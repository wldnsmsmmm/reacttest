import React, { Component } from 'react';
import { createPortal } from "react-dom";

class Portals extends Component {
  render() {
    return createPortal(
      <Message/>,
      document.getElementById("touchme")
    );
  }
}

const Message = () => "Just touched it!";

class ReturnType extends Component {
  render() {
    return "hello";
  }
}

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ReturnType/>
        <Portals/>
      </React.Fragment>
    );
  }
}

export default App;
