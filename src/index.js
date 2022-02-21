import React from "react";
import ReactDOM from "react-dom";
import Ripple from "./Ripple";
import styled from "styled-components";

const Button = styled.button`
  overflow: hidden;
  position: relative;
  cursor: pointer;

  background: #3f51b5;
  padding: 5px 30px;
  color: #fff;
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid #fff;
  text-align: center;
`;

function App() {
  return (
    <div className="App">
      <Button>
        Ripple it up!
        <Ripple />
      </Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
