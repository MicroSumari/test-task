import React from "react";
import { Text, Box, Img } from "../../primitives/assets";
import styled from "styled-components";

const CardDataMain = styled(Box)`
  border-radius: 5vh;
  overflow: hidden;
  transition: 0.07s ease-out;
  display: table;

  width: 100%;

  .card-img-container {
    overflow: hidden;
    width: 40%;
    min-width: 200px;
    min-height: 250px;
    display: table-cell;

    .img-inset-shadow {
      width: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0) 75%,
        rgba(255, 255, 255, 1) 100%
      );
    }

    .card-img {
      width: 100%;
      height: 100%;
      position: absolute;

      object-fit: cover;
    }
  }

  .card-description-container {
    display: table-cell;
/*     flex-direction: column;
    align-items: flex-start; */

    &,
    * {
      line-height: 1.4;
    }

    .data-item {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  :hover {
    transition: 0.3s ease-in-out;
    z-index: 100;
  }

  &:hover .card-img {
    transition: 15s;
    transform: scale(1.3);
  }
`;

const Title = (props) => {
  return (
    <Text
      size="smx"
      weight="900"
      color="dark-gray"
      className="title"
      {...props}
    >
      {props.children}
    </Text>
  );
};

const SubTitle = (props) => {
  return (
    <Text size="sm" weight="800" color="dark-gray" {...props}>
      {props.children}
    </Text>
  );
};

const Label = (props) => {
  const { label, children } = props;
  return (
    <Text size="sm" weight="600" color="dark-gray" {...props}>
      {label}
      {children}
    </Text>
  );
};

const Data = (props) => {
  const { data, children } = props;
  return (
    <Text size="sm" color="dark-gray" {...props}>
      {data}
      {children}
    </Text>
  );
};

export const DataItem = (props) => {
  const { label, data } = props;

  return (
    <Box className="data-item" {...props}>
      {label && <Label label={label} />}
      {data && <Data data={data} />}
      {props.children}
    </Box>
  );
};

const ItemsContainer = (props) => (
  <Box className="card-description-container" pad="sm" {...props}>
    {props.children}
  </Box>
);

DataItem.Label = Label;
DataItem.Data = Data;
DataItem.Title = Title;
DataItem.Subtitle = SubTitle;

export const CardData = (props) => {
  const { image, children } = props;

  return (
    <CardDataMain color="greyShad" {...props}>
      {image && (
        <Box color="lightGrey" className="card-img-container">
          <Img src={image} className="card-img" />
          <Box className="img-inset-shadow" />
        </Box>
      )}

      {children}
    </CardDataMain>
  );
};

CardData.DataPanel = ItemsContainer;
CardData.Item = DataItem;
CardData.Title = Title;
CardData.Subtitle = SubTitle;
CardData.Label = Label;
CardData.Data = Data;

export default CardData;
