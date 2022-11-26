import { Slider, SliderFilledTrack, SliderTrack } from "@chakra-ui/react";
import React from "react";

const Slide = () => {
  return (
    <Slider aria-label="slider-ex-4" defaultValue={80}>
      <SliderTrack bg="orange">
        <SliderFilledTrack bg="green" />
      </SliderTrack>
    </Slider>
  );
};

export default Slide;
