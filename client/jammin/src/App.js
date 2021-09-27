import Topbar from './components/Topbar/Topbar';
import FindJam from './components/FindJam/FindJam';
import CreateJam from './components/CreateJam/CreateJam.jsx';
import Home from './components/Home/Home';
import EventPage from './components/EventPage/EventPage';
import SignUp from './components/Signup/SignUp';
import LogIn from './components/LogIn/LogIn';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [jams, setJams] = useState([]);
  const [searchVal, setSearchVal] = useState('');
  const [center, setCenter] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [userData, setUserData] = useState(null);

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
            <Route
              path="/signup"
              exact
              render={(props) => (
                <SignUp
                  {...props}
                  userData={userData}
                  setUserData={setUserData}
                />
              )}
            />
            <Route
              path="/login"
              exact
              render={(props) => (
                <LogIn
                  {...props}
                  userData={userData}
                  setUserData={setUserData}
                />
              )}
            />
            <Route
              path="/dashboard"
              exact
              render={(...props) => (
                <Dashboard
                  {...props}
                  userData={userData}
                  setUserData={setUserData}
                />
              )}
            />
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
