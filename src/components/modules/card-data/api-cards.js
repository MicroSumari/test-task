import React from "react";
import { Box } from "../../primitives/assets";
import CardData from "./CardData";
import styled from "styled-components";

const NowS = (props) => {
  let colorStatus = {
    alive: "green",
    dead: "red",
    unknown: "light-gray",
  };

  if (!props.status || typeof props.status !== "string") return <></>;

  return (
    <Box
      style={{ borderRadius: "50%" }}
      color={colorStatus[props.status.toLowerCase()] || "dark-gray"}
      pad="xxs"
      {...props}
    />
  );
};

const { DataPanel, Item, Label, Data, Subtitle, Title } = CardData;

/* Small Cards */

const SmallCardMain = styled(CardData)`
  min-height: 270px;
  @media (max-width: 896px) {
    min-height: auto;
  }
`;

const EllipsisTitle = styled(Title)`
  width: 170px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 896px) {
    width: auto;
    white-space: inherit;
    overflow: inherit;
    text-overflow: inherit;
  }
`;

export const CharacterCardSM = (props) => {
  const { data } = props;

  return (
    <SmallCardMain image={data?.image}>
      <DataPanel>
        <Item pad-h="xs">
          <EllipsisTitle size="smx">{data.name}</EllipsisTitle>
          <Box>
            <NowS status={data.status} mar-r="xs" />
            <Subtitle>{data.status}</Subtitle>
          </Box>
        </Item>

        <Item
          label="Last known location:"
          data={data.location.name}
          pad-h="xs"
        />

        <CardData.Item
          label="First seen in:"
          data={data.episode[0].name}
          pad-h="xs"
        />
      </DataPanel>
    </SmallCardMain>
  );
};

export const LocationCardSM = (props) => {
  const { data } = props;

  return (
    <SmallCardMain image={data?.image} pad="md">
      <DataPanel>
        <Title pad-h="xs">{data.name}</Title>

        <Item label="Dimension:" data={data.dimension} pad-h="xs" />

        <Item label="Type:" data={data.type} pad-h="xs" />
      </DataPanel>
    </SmallCardMain>
  );
};

export const EpisodeCardSM = (props) => {
  const { data } = props;

  return (
    <SmallCardMain image={data?.image} pad="md">
      <DataPanel>
        <Title pad-h="xs">{data.name}</Title>

        <Item label="Episode:" data={data.episode} pad-h="xs" />
      </DataPanel>
    </SmallCardMain>
  );
};

/* Large Cards */

const arrayToString = (array, limit = 47) => {
  const generateStringOfIds = (array) => array.map((e) => e.id).join(", ");
  const stringOfIds = generateStringOfIds(array);
  const parsedStringLength =
    stringOfIds.length > limit
      ? stringOfIds.substring(0, limit) + "..."
      : stringOfIds;

  return parsedStringLength;
};

const CardDataLG = styled(CardData)`
  max-height: 75vh;

  .data-panels-container {
    align-items: start;
    justify-content: space-around;
    width: 100%;

    .large-data-text {
      max-width: 300px;
    }
  }

  :hover {
    transform: none;
  }
`;

const CardLGItem = (props) => (
  <Item pad-h="xs">
    <Label size="smx">{props.label}:</Label>
    <Data size="smx" className={props?.data?.length > 40 && "large-data-text"}>
      {props.data}
    </Data>
  </Item>
);

export const CharacterCardLG = (props) => {
  const { data } = props;

  console.log(data);

  return (
    <CardDataLG image={data?.image}>
      <Box className="data-panels-container" pad-h="mdx">
        <DataPanel>
          <CardLGItem label="Name" data={data.name} />

          <CardLGItem label="Status" data={data.status} />

          <CardLGItem label="Species" data={data.species} />

          <CardLGItem label="Gender" data={data.gender} />
        </DataPanel>
        <DataPanel>
          <CardLGItem label="Origin" data={data.origin.name} />

          <CardLGItem label="Location" data={data.location.name} />

          <CardLGItem label="Episodes" data={arrayToString(data.episode)} />
        </DataPanel>
      </Box>
    </CardDataLG>
  );
};

export const LocationCardLG = (props) => {
  const { data } = props;

  console.log(data);

  return (
    <CardDataLG image={data?.image}>
      <Box className="data-panels-container" pad-h="mdx">
        <DataPanel>
          <CardLGItem label="Name" data={data.name} />

          <CardLGItem label="Dimension" data={data.dimension} />

          <CardLGItem label="Type" data={data.type} />
        </DataPanel>
        <DataPanel>
          <CardLGItem label="Residents" data={arrayToString(data.residents, 100)} />
        </DataPanel>
      </Box>
    </CardDataLG>
  );
};

export const EpisodeCardLG = (props) => {
  const { data } = props;

  console.log(data);

  return (
    <CardDataLG image={data?.image}>
      <Box className="data-panels-container" pad-h="mdx">
        <DataPanel>
          <CardLGItem label="Name" data={data.name} />

          <CardLGItem label="Episode" data={data.episode} />
        </DataPanel>
        <DataPanel>
          <CardLGItem label="Characters" data={arrayToString(data.characters, 100)} />
        </DataPanel>
      </Box>
    </CardDataLG>
  );
};
