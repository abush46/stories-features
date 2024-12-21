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
    <StoryWrapper>
      <StoryImage src={image} alt="story" />
      <ProgressBar progress={progress} />
    </StoryWrapper>
  );
};

export default Story;
