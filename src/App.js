// App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 
import 'animate.css/animate.min.css'; //css animazioni

const App = () => {
  const apiKey = "05f7a0c815e94107935de956387dcef1";
  const [HUsername, setUsername] = useState("");

  useEffect(() => {
    axios.get("https://www.bungie.net/Platform/Destiny2/2/Profile/4611686018471905751/LinkedProfiles/", {
      headers: {
        'x-api-key': apiKey,
      },
      crossdomain: true,
    })
      .then((result) => {
        console.log(result.data)
        console.log(result.data.Response.profiles[0].displayName)
        let Username = result.data.Response.profiles[0].displayName
        console.log("Username:" + Username)
        setUsername(Username)
      })
      .catch((error) => console.error(error));
  }, [])


  return (

    <div className="container mt-4">
    <div className="custom-background border border-light p-4 rounded animate__animated animate__slideInRight">
      <div className="mb-3 text-center">
        <h1 className="display-4 text-white">Benvenuto, <span className="font-italic">Guardiano</span></h1>
      </div>
      <div className="text-center">
        <p className="fs-4 text-white">Esplora il mondo di Destiny 2, IL_TUO_USERNAME !</p>
        <p className="fs-5 text-white">Scopri le avventure che ti aspettano.</p>
      </div>
    </div>
  </div>
  
  )
}

export default App;
