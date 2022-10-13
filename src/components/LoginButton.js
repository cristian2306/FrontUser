import React from "react";
import ReactDOM from "react-dom"; 
import "../styles/LoginButton.css";


export class LoginButton extends React.Component {
  render() {
    return (
      <div id="LoginButtonDiv">
        <button id="LoginButton">LOGIN</button>
        <button id="SignButton">SIGN UP</button>
      </div>
    );
  }
}
