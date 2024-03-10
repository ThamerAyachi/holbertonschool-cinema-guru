import './App.css';
import { React, useEffect, useState } from 'react';
import axios from "axios";


function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    axios.post(process.env.AUTH, {}, {
      headers: { authorization: `Bearer ${accessToken}`}
    }).then(response => {
      setIsLoggedIn(true);
      userUsername(true);
      setUserUsername(response.data.username);
    })
  }, []);

  return (
    <div className="App">
      {IsLoggedIn ? <Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      : ( <Authentication IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} /> )}
    </div>
  );
}

export default App;
