import Topbar from './components/Topbar/Topbar';
import FindJam from './components/FindJam/FindJam';
import CreateJam from './components/CreateJam/CreateJam.jsx';
import Home from './components/Home/Home';
import EventPage from './components/EventPage/EventPage';
import SignUp from './components/Signup/SignUp';
import LogIn from './components/LogIn/LogIn';
import './App.css';
import Background from './images/back2.jpg';
import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// let sectionStyle = {
//   widht: '100vw',
//   height: '100vh',
//   backgroundImage: `url(${Background})`,
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center',
//   backgroundSize: 'cover',
// };

function App() {
  const [jams, setJams] = useState([]);
  const [searchVal, setSearchVal] = useState('');
  const [center, setCenter] = useState(null);
  const [markers, setMarkers] = useState([]);

  const [hasSearch, setHasSearch] = useState(false);

  useEffect(() => {
    setJams([]);
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="app-container">
          <Topbar />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Home
                  {...props}
                  jams={jams}
                  setJams={setJams}
                  setHasSearch={setHasSearch}
                />
              )}
              // component={Home}
            />
            <Route path="/createjam" exact component={CreateJam} />
            <Route
              path="/findjam"
              exact
              render={(props) => (
                <FindJam
                  {...props}
                  jams={jams}
                  setJams={setJams}
                  searchVal={searchVal}
                  setSearchVal={setSearchVal}
                  center={center}
                  setCenter={setCenter}
                  markers={markers}
                  setMarkers={setMarkers}
                  hasSearch={hasSearch}
                  setHasSearch={setHasSearch}
                />
              )}
              // component={FindJam}
            />
            <Route path="/jams/:id" exact component={EventPage} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/login" exact component={LogIn} />
          </Switch>
        </div>
        {/* <Route
          path="'/findjam"
          render={(props) => (
            <FindJam {...props} jams={jams} setJams={setJams} />
          )}
        /> */}
        {/* render={(props) => <FindJam {...props} jams={jams} setJams={setJams} />} */}
        {/* <div className="overlay"></div> */}
      </div>
    </Router>
  );
}

export default App;
