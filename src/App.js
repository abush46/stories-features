/* import logo from './logo.svg';
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
}

export default App;
 */

import React from "react";
import StoryCarousel from "./components/StoryCarousel";
import StoriesFeatures from "./components/StoriesFeatures";
import UserRegistration from "./components/UserRegistration";
import Story from "./components/Story";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Story />
    </div>
  );
}
export default App;
