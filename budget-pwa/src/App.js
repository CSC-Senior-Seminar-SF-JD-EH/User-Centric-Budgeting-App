import logo from './logo.svg';
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item> <Link>Profile</Link></Dropdown.Item>
          <Dropdown.Item> <Link>Settings</Link></Dropdown.Item>
          <Dropdown.Item hr> <Link>Log Out</Link></Dropdown.Item>
        </DropdownButton>
        <Switch>
          <Route path="/" component={Home}></Route>
        </Switch>
        
      </Router>
      
    </div>
  );
}

export default App;
