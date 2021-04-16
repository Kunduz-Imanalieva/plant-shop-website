import logo from "./images/logo.svg";
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Location from './components/Location/Location';
import Service from './components/Service/Service';

function App() {
  return (
    <div className="App">
      <ul>
<img src={logo} alt="logo"/>
        <li>
          <NavLink
          to="/"
          exact>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
          to="/service">
            Service
          </NavLink>
        </li>

        <li>
          <NavLink
          to="/location">
            Location
          </NavLink>
        </li>


      </ul>

      <Route exact path="/" component={Home}/>
      <Route path="/service" component={Service}/>
      <Route path="/location" component={Location}/>
    </div>
  );
}

export default App;
