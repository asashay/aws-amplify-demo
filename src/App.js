import React from 'react';
import { Link, Router } from "@reach/router";
import logo from './logo.svg';
import './App.css';

function TestLink() {
  return <div>Test link, hello from test link</div>
}

function Home() {
  return <div>Home sweet home!</div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/">Go home</Link>
        <Link to="/test-link">Test link</Link>

        <Router>
          <Home path="/" />
          <TestLink path="/test-link" />
        </Router>
      </header>
    </div>
  );
}

export default App;
