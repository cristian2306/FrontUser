import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Login.css';
import { LoginButton } from './LoginButton';


export class Login extends React.Component {
  render() {
    return (
      <div id="LoginDiv">
        <form>
            <label id="UserLogId">User Login</label>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <div id="ButtonDiv">
              <LoginButton />
            </div>
        </form>
      </div>
    );
  }
}
