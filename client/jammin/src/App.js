import Topbar from './components/Topbar/Topbar';
import FindJam from './components/FindJam/FindJam';
import CreateJam from './components/CreateJam/CreateJam';
import Home from './components/Home/Home'
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Topbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/createjam' exact component={CreateJam}/>
        <Route path='/findjam' exact component={FindJam}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
