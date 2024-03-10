import axios from 'axios';
import { React, useState } from 'react';
import "./auth.css";
import Login from './Login';
import Register from './Register';


export default Authentication = ({
  setIsLoggedIn,
  setUserUsername,
}) => {
  const [_switch, setSwitch] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("false");

  function handleSwitch(value) {
    setSwitch(value);
    setPassword("");
    setUsername("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (_switch) {
      axios.post(process.env.REACT_APP_API_LOGIN, {username, password}).then(
        res => {
          if (res.data.accessToken) {
            localStorage.setItem("accessToken", res.data.accessToken);
            setUserUsername(username);
            setIsLoggedIn(true);
          }
        }
      )
    } else {
      axios.post(process.env.REACT_APP_API_REGISTER, {username, password}).then(
        res => {
          if (res.data.accessToken) {
            localStorage.setItem("accessToken", res.data.accessToken);
            setUserUsername(username);
            setIsLoggedIn(true);
          }
        }
      )
    }
  }

  return (
    <form className="auth" onSubmit={handleSubmit}>
      <body>
        <ul>
          <li onClick={() => handleSwitch(true)} className={_switch ? 'active' : ''}>Sign In</li>
          <li onClick={() => handleSwitch(false)} className={!_switch ? 'active' : ''}>Sign Up</li>
        </ul>
        <main>
          {_switch ? <Login username={username} setUsername={setUsername}
            password={password} setPassword={setPassword}/>
            : <Register username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>}
        </main>
      </body>
    </form>
  )
}
