import React, { useState, useEffect } from 'react';
import './App.css';
var VIDEOS = [
  {
    id: 1,
    video: 'https://player.vimeo.com/external/368320203.sd.mp4?s=38b1bac5d627b94fb902597643461ee5f233d00a&profile_id=139&oauth2_token_id=57447761',
  },
  {
    id: 2,
    video: 'https://player.vimeo.com/external/365208306.sd.mp4?s=d4291f8b07f69dcbc189a05f29b3532342ddea07&profile_id=139&oauth2_token_id=57447761',
  },
  {
    id: 3,
    video: 'https://player.vimeo.com/external/314714772.sd.mp4?s=b3d92ace8cc000fb98770b2e59ade626f98ce642&profile_id=164&oauth2_token_id=57447761',
  }
];

function App() {
  const [source, setSource] = useState();

  console.log(window.location);
  useEffect(() => {
    let arr = [];
    VIDEOS.forEach((obj) => {
      arr.push(obj.id);
    })
    for (var i = 0 ; i < VIDEOS.length ; i++) {
      if (sessionStorage.getItem('videoID') == null) {
        sessionStorage.setItem("videoID", VIDEOS[i].id);
        setSource(VIDEOS[i].video);
        break;
      } else if (sessionStorage.getItem('videoID') != VIDEOS[i].id) {
        const filterArr = arr.filter((id) => id != sessionStorage.getItem('videoID'));
        let randomValue = filterArr[Math.floor(Math.random() * filterArr.length)];
        console.log(randomValue);
        sessionStorage.setItem("videoID", randomValue);
        setSource(VIDEOS[randomValue-1].video);
        break;
      }
    }
    
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
