import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
`;

const StoryImage = styled.img`
  width: 100px;
  height: 100px;
`;

const ProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.progress}%;
  height: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  transition: width 0.3s;
`;

const Story = ({ image }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <header>
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

  );
};

export default Story;
