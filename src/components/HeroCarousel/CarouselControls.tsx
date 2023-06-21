import React, { type FC } from "react";
import styled from "styled-components";

import { IconButton } from "~components/IconButton";

export interface CarouselControlsProps {
  onPrev?: () => void;
  onNext?: () => void;
}

const ControlsRoot = styled.div`
  margin-top: 42px;

  > *:nth-child(2) {
    margin-left: -1px;
  }
`;

const CarouselControls: FC<CarouselControlsProps> = ({ onPrev, onNext }) => {
  return (
    <ControlsRoot>
      <IconButton
        variant="primary-inverted"
        icon="arrow-left"
        aria-label="Prev"
        onClick={onPrev}
        testId="prev"
      />
      <IconButton
        variant="primary-inverted"
        icon="arrow-right"
        aria-label="Next"
        onClick={onNext}
        testId="next"
      />
    </ControlsRoot>
  );
};

export default CarouselControls;
