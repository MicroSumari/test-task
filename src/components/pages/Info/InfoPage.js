import React from "react";
import RAndM from "../../modules/hero/RAndM";
import {
  CharacterCardLG,
  LocationCardLG,
  EpisodeCardLG,
} from "../../modules/card-data/api-cards";
import styled from "styled-components";
import { Box } from "../../primitives/assets";
import { useParams } from "react-router-dom";
import QUERIES from "../../../api/RickAndMortyAPI_graphql";
import { useQuery as useGraphqlQuery } from "@apollo/react-hooks";
import { useConnectionState } from "../../environment/Client/provider";
import { isCategoryValid } from "./helpers/functions";

const InfoPageRAndM = styled(RAndM.Main)`
  min-height: ${(props) => (props.fullScreen ? "100vh" : "60vh")};
  width: 100%;

  :after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";

    background: rgba(0, 0, 0, 0.5);
  }
`;

const CardInfoContainer = styled(Box)`
  min-height: 50vh;
  width: 80%;

  @media screen and (max-width: 1150px) {
    padding: 0;
  }
`;

const InfoPage = () => {
  const serverStatus = useConnectionState();
  let { category, id } = useParams();

  const query =
    QUERIES.FOR_SPECIFIC_ITEM[
      isCategoryValid(category) ? category : "characters"
    ];

  const GraphqlData = useGraphqlQuery(query, {
    variables: { id: id || "1" },
  });

  let { data, loading, error } = GraphqlData;

  let isLoading = !!loading;
  let hasError = !!error;

  let heroTitle = {
    characters: data?.character?.name,
    locations: data?.location?.name,
    episodes: data?.episode?.name,
  };

  return (
    <React.Fragment>
      <InfoPageRAndM fullScreen={!serverStatus || hasError}>
        (
        <RAndM.Panel>
          {hasError ||
            (!isCategoryValid(category) && (
              <RAndM.Subtitle>Something went wrong... :(</RAndM.Subtitle>
            ))}

          {data && <RAndM.Title>{heroTitle[category]}</RAndM.Title>}

          {isLoading && <RAndM.Subtitle>Loading...</RAndM.Subtitle>}
        </RAndM.Panel>
        )
      </InfoPageRAndM>

      {serverStatus && data && !isLoading && (
        <CardInfoContainer pad="lg" color="white">
          {category === "characters" && (
            <CharacterCardLG data={data?.character} />
          )}
          {category === "locations" && <LocationCardLG data={data?.location} />}
          {category === "episodes" && <EpisodeCardLG data={data?.episode} />}
        </CardInfoContainer>
      )}
    </React.Fragment>
  );
};

export default InfoPage;
