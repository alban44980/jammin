import Topbar from './components/Topbar/Topbar';
import FindJam from './components/FindJam/FindJam';
import CreateJam from './components/CreateJam/CreateJam.jsx';
import Home from './components/Home/Home';
import EventPage from './components/EventPage/EventPage';
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
                <Home {...props} jams={jams} setJams={setJams} />
              )}
              // component={Home}
            />
            <Route path="/createjam" exact component={CreateJam} />
            <Route
              path="/findjam"
              exact
              render={(props) => (
                <FindJam {...props} jams={jams} setJams={setJams} />
              )}
              // component={FindJam}
            />
            <Route path="/jams/:id" exact component={EventPage} />
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
