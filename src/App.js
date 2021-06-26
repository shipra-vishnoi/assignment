import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import './App.css';
var VIDEOS = [
  {
    id: 1,
    video: 'https://player.vimeo.com/external/180176353.sd.mp4?s=88b759e26e55d2bd1ed3670fbdc42a3711ca2501&profile_id=164&oauth2_token_id=57447761',
  },
  {
    id: 2,
    video: 'https://player.vimeo.com/external/365208306.sd.mp4?s=d4291f8b07f69dcbc189a05f29b3532342ddea07&profile_id=139&oauth2_token_id=57447761',
  },
  {
    id: 3,
    video: 'https://player.vimeo.com/external/503933873.sd.mp4?s=361a8523f371783a9e969198ea774e3d6e03a9dc&profile_id=139&oauth2_token_id=57447761',
  }
];

function App() {
  const [source, setSource] = useState(VIDEOS[0].video);
  sessionStorage.setItem("videoID", 1);

  // function setCookie(cName, cValue) {
  //   document.cookie = cName + "=" + cValue + "; path=/;";
  // }
  useEffect(() => {
    for (var i = 0 ; i < VIDEOS.length ; i++) {
      if (sessionStorage.getItem('videoID') !== VIDEOS[i].id) {
        sessionStorage.setItem("videoID", VIDEOS[i].id);
        setSource(VIDEOS[i].video);
        break;
      }
    }
    // VIDEOS.forEach((obj) => {
    //   if (sessionStorage.getItem('videoID') !== obj.id) {
    //     sessionStorage.setItem("videoID", obj.id);
    //     setSource(obj.video);
    //   }
    //   return;
    // });
  }, []);
  return (
    <div className="mainContainer">
      <div className="videoContainer">
        <video 
            autoPlay
            loop
            muted
            className="background-video"
            src={source} />
      </div>
      <div className="content">
        <h1>Lucid Air</h1>
        <ul className="dataContainer">
          <li>
            <div>
              <h4 className="label">Projected range</h4>
              <p className="values">500+ mi</p>
            </div>
          </li>
          <li>
            <div>
              <h4 className="label">Starting from</h4>
              <p className="values">$69,900</p>
            </div>
          </li>
          <li>
            <div>
              <h4 className="label">Max power</h4>
              <p className="values">1,080hp</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
