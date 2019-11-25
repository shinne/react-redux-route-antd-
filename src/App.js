/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

import React from 'react'
/*
import {render} from 'react-dom'
*/
import './App.css';
import About from './componet/About'
import Inbox from './componet/Inbox'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'

export default class App extends React.Component {
    render() {
        return (
            <Router>
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox"inbox>Inbox</Link></li>
                </ul>
                <div className="Content-wrap">
                    <Route path='/about' component={About}></Route>
                    <Route path='/inbox' component={Inbox}></Route>
                </div>
            </div>
            </Router>
        )
    }
}
