import logo from './logo.svg';
import Topbar from './components/Topbar';
import FindJam from './components/FindJam';
import CreateJam from './components/CreateJam';
import Home from './components/Home'
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';


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
