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
import Story from "./components/story";


function App() {
  return (
    <div className="App">
      header>
        <h1>Telegram Crypto App Clone</h1>
    </header>

    <!-- Main Content -->
    <div class="main-content">
        <!-- Crypto Price and User Balance Section -->
        <div class="info-section">
            <div>
                <h3>Bitcoin Price</h3>
                <p>$45,000</p>
            </div>
            <div>
                <h3>User Balance</h3>
                <p>0.5 BTC</p>
            </div>
            <div>
                <h3>Ethereum Price</h3>
                <p>$3,000</p>
            </div>
        </div>

        <!-- Messages Section -->
        <div class="messages">
            <div class="message sent">Hello, how's the market today?</div>
            <div class="message received">It's looking good! Bitcoin is up.</div>
            <div class="message sent">Great news!</div>
        </div>

        <!-- Input Area -->
        <div class="input-area">
            <input type="text" placeholder="Type a message...">
            <button>Send</button>
        </div>
    </div>
    </div>
  );
}
export default App;
