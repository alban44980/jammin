import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
// import FindJam from './FindJam';
// import CreateJam from './CreateJam';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Home(props) {
  // const [jams, setJams] = useState([]);

  // console.log('FindJam props : ', props);
  // const jams = props.jams;
  const setJams = props.setJams;

  useEffect(() => {
    setJams([]);
  }, []);

  return (
    <div className="main">
      <div className="slogan">
        <h1>JAMMIN'</h1>
        <h2>Music is meant to be shared.</h2>
      </div>
      <div className="btn-container">
        <Link to="/createjam">
          <button className="home-btn">CREATE YOUR JAM</button>
        </Link>
        <Link
          to={{
            pathname: '/findjam',
          }}
        >
          <button className="home-btn">FIND A JAM</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
