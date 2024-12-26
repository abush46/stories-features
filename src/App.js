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
import { useState, useEffect } from "react";
/* import StoryCarousel from "./components/StoryCarousel";
import StoriesFeatures from "./components/StoriesFeatures";
import UserRegistration from "./components/UserRegistration";
import Story from "./components/story"; */
import "./App.css";

function App() {
  const [username, setUsername] = useState();
  useEffect(() => {
    //if (window.Telegram?.WebApp) {
    // first we should validate that the information is correct with initData but we can use initDataUnsafe for now
    // how to validate: https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app
    //const telegram_user = window.Telegram.WebApp.initDataUnsafe?.user;
    //setUsername(telegram_user);
    //}
  }, []);
  const handleSend = () => {
    const command = document.getElementById("command").value;
    const responseDiv = document.getElementById("response");
    //const telegram_user = window.Telegram.WebApp.initDataUnsafe?.user;
    if (command) {
      // Send command to the Telegram bot
      fetch(
        `https://my-bot-beryl-iota.vercel.app/api/bot`,
        //`https://api.telegram.org/7242228033:AAGeQDRDv5Texj6aLM586TMbdiZcZy2gd_8/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: {
              chat: {
                id: "123",
              },
              from: {
                id: "1",
                first_name: "mic",
              },
              text: command,
              chat_id: "12345",
            },
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.ok) {
            responseDiv.innerHTML = "Command sent successfully!" + data;
          } else {
            responseDiv.innerHTML =
              "Error sending command: " + data.description;
          }
        })
        .catch((error) => {
          responseDiv.innerHTML = "Error: " + error.message;
        });
    } else {
      responseDiv.innerHTML = "Please enter a command.";
    }

    // responseDiv.innerHTML = command;
    // document.getElementById("command").innerHTML = "";
  };

  return (
    <div className="App">
      <header>
        <h1>Telegram Crypto App Clone</h1>
      </header>
      <div class="main-content">
        <p>{username?.first_name}</p>
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
