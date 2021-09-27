import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home(props) {
  const setJams = props.setJams;
  const setHasSearch = props.setHasSearch;

  useEffect(() => {
    setJams([]);
    setHasSearch(false);
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
