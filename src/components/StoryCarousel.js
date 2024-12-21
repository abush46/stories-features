import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Story from "./story";
import UploadStory from "./UploadStory";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselWrapper = styled.div`
  width: 100%;
  height: 300px;
`;

const StoryWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StoryIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: url(${(props) => props.image}) no-repeat center center/cover;
  margin: 0 10px;
`;

const AddButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
`;

const initialStories = [
  { id: 1, image: "path/to/image1.jpg" },
  { id: 2, image: "path/to/image2.jpg" },
  // Add more initial stories here
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const StoryCarousel = ({ story }) => {
  const [stories, setStories] = useState(story);

  const addStory = (newStory) => {
    setStories([newStory, ...stories]);
  };

  return (
    <>
      {/*  <UploadStory addStory={addStory} /> */}
      <StoryWrapper>
        <AddButton>+</AddButton>
        {stories.map((story, index) => (
          <StoryIcon key={index} image={story.image} />
        ))}
      </StoryWrapper>
      <CarouselWrapper>
        <Slider {...settings}>
          {stories.map((story, index) => (
            <Story key={index} image={story.image} />
          ))}
        </Slider>
      </CarouselWrapper>
    </>
  );
};

export default StoryCarousel;
