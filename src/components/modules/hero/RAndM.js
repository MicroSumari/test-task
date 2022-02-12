import React from "react";
import styled from "styled-components";
import { Text, Box } from "../../primitives/assets";
import rm_img from "../../../assets/rickMorty.png";

export const RAndMStyle = styled(Box)`
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: start;

  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0) 70%
    ),
    url(${(props) => props.image || rm_img}) no-repeat center / cover;

  background-position: 90%;

  .rm-panel {
    flex-direction: column;
    align-items: start;
    left: 10%;

    z-index: 2;

    @media (max-width: 450px) {
      & {
        position: absolute;
        top: 22%;
        left: 7%;
      }
    }

    .title {
      width: 70%;
    }
  }
`;

const RAndMPanel = (props) => (
  <Box className="rm-panel" data-scroll data-scroll-speed="2" {...props}>
    {props.children}
  </Box>
);

const RAndMTitle = (props) => (
  <Text size="lg" color="white" weight="900" className="title" {...props}>
    {props.children}
  </Text>
);

const RAndMSubtitle = (props) => (
  <Text size="md" color="white" weight="400" pad-h="md" {...props}>
    {props.children}
  </Text>
);


const RAndM = (props) => {
  const { bgImage, children } = props;

  return (
    <RAndMStyle>
      
    </RAndMStyle>
  );
};

RAndM.Main = RAndMStyle;
RAndM.Panel = RAndMPanel;
RAndM.Title = RAndMTitle;
RAndM.Subtitle = RAndMSubtitle;

export default RAndM;
