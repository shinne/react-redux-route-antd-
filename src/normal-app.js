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

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            route: window.location.hash.substr(1)
        }

    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            })
        })
    }

    render() {
        let Child
        switch (this.state.route) {
            case '/about':
                Child = About;
                break;
            default:
                Child = Inbox;
        }

        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><a href="#/about">About</a></li>
                    <li><a href="#/inbox">Inbox</a></li>
                </ul>
                <div className="Content-wrap">
                    <Child/>
                </div>
            </div>
        )
    }
}
