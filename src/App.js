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
  <script>
        document.getElementById('sendCommand').onclick = function() {
            const command = document.getElementById('command').value;
            const responseDiv = document.getElementById('response');

            if (command) {
                // Send command to the Telegram bot
                fetch(`https://api.telegram.org/botYOUR_BOT_TOKEN/sendMessage`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        chat_id: 'YOUR_CHAT_ID', // Replace with your chat ID
                        text: command
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.ok) {
                        responseDiv.innerHTML = 'Command sent successfully!';
                    } else {
                        responseDiv.innerHTML = 'Error sending command: ' + data.description;
                    }
                })
                .catch(error => {
                    responseDiv.innerHTML = 'Error: ' + error.message;
                });
            } else {
                responseDiv.innerHTML = 'Please enter a command.';
            }
        };
    </script>

export default App;
 */

import React from "react";
/* import StoryCarousel from "./components/StoryCarousel";
import StoriesFeatures from "./components/StoriesFeatures";
import UserRegistration from "./components/UserRegistration";
import Story from "./components/story"; */
import "./App.css";

function App() {
  const handleSend = () => {
    const command = document.getElementById("command").value;
    const responseDiv = document.getElementById("response");
    responseDiv.innerHTML = command;
  };

  return (
    <div className="App">
      <header>
        <h1>Telegram Crypto App Clone</h1>
      </header>
      <div class="main-content">
        <p>Michael Samson</p>
        <div class="info-section">
          <div>
            <h3>Bitcoin Price</h3>
            <p>$45,000</p>
          </div>
          <div>
            <h3>User Balance</h3>
            <p>1.5 BTC</p>
          </div>
          <div>
            <h3>Ethereum Price</h3>
            <p>$3,000</p>
          </div>
        </div>

        <div class="messages">
          <div class="message sent">Hello, how's the market today?</div>
          <div class="message received">It's looking good! Bitcoin is up.</div>
          <div class="message sent">Great news!</div>
          <div class="message sent" id="response"></div>
        </div>

        <div class="input-area">
          <input id="command" type="text" placeholder="Type a message..." />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}
export default App;
