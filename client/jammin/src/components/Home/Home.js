import React from 'react';
import {Link} from 'react-router-dom';
import './home.css'
// import FindJam from './FindJam';
// import CreateJam from './CreateJam';
// import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';


function Home() {
  return (
    <div className="main">
      <div className="slogan">
        <h1>Music is meant to be shared.</h1>
      </div>
      <div className="btn-container">
        <Link to='/createjam'>
          <button className="home-btn">CREATE YOUR JAM</button>
        </Link>
        <Link to='/findjam'>
          <button className="home-btn">FIND A JAM</button>
        </Link>
      </div>
      </div>
  )
}

export default Home
