import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";
import "../App.css";
import Story from "./story";
import StoryCarousel from "./StoryCarousel";
/* const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const StoriesContainer = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
`;

const Story = styled.div`
  flex: 1;
  height: 400px;
  position: relative;
  backgroundcolor: gray;
  img {
    width: 50%;
    height: 50%;
    object-fit: cover;
  }
`;

const AddStory = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: 2px dashed #007bff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #e0f7ff;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const ProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 5px;
  background: #007bff;
  transition: width 3s linear;
`;

const StoryIndicator = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  span {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: ${(props) => (props.active ? "#007bff" : "#ccc")};
    margin: 0 5px;
  }
`; */

const StoriesFeatures = () => {
  const [stories, setStories] = useState([]);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [image, setImage] = useState("Stories");
  useEffect(() => {
    loadStories();
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const timeout = setTimeout(() => {
        nextStory();
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [currentStoryIndex, isPlaying]);

  const loadStories = () => {
    const storedStories = JSON.parse(localStorage.getItem("stories")) || [];
    const now = Date.now();
    const validStories = storedStories.filter((story) => now < story.expiry);
    setStories(validStories);
    localStorage.setItem("stories", JSON.stringify(validStories));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const img = new Image();
      img.onload = () => {
        if (img.width <= 1080 && img.height <= 1920) {
          const reader = new FileReader();
          reader.onloadend = () => {
            const newStory = {
              image: reader.result,
              expiry: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
            };
            const updatedStories = [...stories, newStory];
            setStories(updatedStories);
            localStorage.setItem("stories", JSON.stringify(updatedStories));
          };
          reader.readAsDataURL(file);
        } else {
          alert("Image dimensions must not exceed 1080px x 1920px.");
        }
      };
      img.src = URL.createObjectURL(file);
    }
  };

  const nextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    } else {
      setIsPlaying(false);
      setCurrentStoryIndex(0); // Reset to first story after the last
    }
  };

  const prevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextStory,
    onSwipedRight: prevStory,
  });

  const startPlaying = () => {
    setIsPlaying(true);
  };

  const ShowImage = (ind) => {
    setImage(ind);
    console.log(ind);
  };
  const MyButton = ({ handleClick }) => {
    return <button onClick={handleClick}>Click Me!</button>;
  };
  const handleClick = () => {
    setImage("Button Clicked!");
  };
  return (
    <>
      <div className="container" {...handlers}>
        {stories.length === 0 ? (
          <button
            className="AddStory"
            onClick={() => document.getElementById("fileInput").click()}
          >
            +
          </button>
        ) : (
          <div className="storiesContainer">
            <button
              className="AddStory"
              onClick={() => document.getElementById("fileInput").click()}
            >
              +
            </button>

            <div className="Story">
              {/* <ProgressBar style={{ width: isPlaying ? "100%" : "0%" }} /> */}
              {stories.map((story, index) => (
                <button key={index} onClick={() => ShowImage(story.image)}>
                  <img
                    src={story.image}
                    alt={`Story ${index}`}
                    onLoad={startPlaying}
                  />
                </button>
              ))}
            </div>
          </div>
        )}
        <div>
          {/* <MyButton handleClick={handleClick} />
        <img className="showStory" src={image} alt="Story" /> */}
          <Story image={image} />
          {/* <h1>{image}</h1> */}
        </div>
        {/*<>
           <StoriesContainer>
            <AddStory
              onClick={() => document.getElementById("fileInput").click()}
            >
              +
            </AddStory>
            {stories.map((story, index) => (
              <Story
                key={index}
                style={{
                  display: index === currentStoryIndex ? "block" : "none",
                }}
              >
                <ProgressBar style={{ width: isPlaying ? "100%" : "0%" }} />
                <img
                  src={story.image}
                  alt={`Story ${index}`}
                  onLoad={startPlaying}
                />
              </Story>
            ))}
          </StoriesContainer>
          <StoryIndicator active={true}>
            {stories.map((_, index) => (
              <span key={index} active={index === currentStoryIndex}></span>
            ))}
          </StoryIndicator>
        </>
      )} 
      <FileInput
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      /> */}
        <input
          className="FileInput"
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>

      <StoryCarousel story={stories} />
    </>
  );
};

export default StoriesFeatures;
