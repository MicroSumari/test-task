import React, { useContext } from "react";
import {
  CharacterCardSM,
  LocationCardSM,
  EpisodeCardSM,
} from "../card-data/api-cards";
import { RouteLink as Link } from "../../pages/link";
import { Box, Text, CardBoard, Img } from "../../primitives/assets";
import { SearchBoardContext } from "./search-board-context";
import { isCategoryValid } from "../../pages/Info/helpers/functions";
import pickeRick from '../../../assets/pickle-rick.png'
import styled from "styled-components";

const ErrorMessage = (props) => (
  <Box
    style={{
      width: "100%",
      flexDirection: "column",
    }}
  >
    <Text size="md" color="white" weight="100" mar-h="smx">
      We found nothing...
    </Text>
    <Text size="sm" color="white" weight="600">
      Error 404
    </Text>
    <Img
      pad="sm"
      style={{ maxWidth: "100px" }}
      src={pickeRick}
    />

    {props.hasLastSearch && (
      <Box style={{ width: "100%", justifyContent: "start" }}>
        <Text size="smx" color="white" weight="100" mar-h="smx">
          Last search:
        </Text>
      </Box>
    )}
  </Box>
);

const LoadingMessage = () => (
  <Box style={{ width: "100%", position: "absolute" }}>
    <Text size="md" color="black" weight="100">
      Loading...
    </Text>
  </Box>
);

const ResultsBoardMain = styled(Box)`
  width: "100%";
  flex-direction: column;

  .card {
    transition: 0.2s ease-in-out;
    :hover {
      box-shadow: 0px 40px 30px 1px rgba(0, 0, 0, 0.6);
      filter: saturate(1.8);
      border-radius:15vh;
      z-index: 20;
    }
  }
`;

const ResultsBoard = () => {
  const { GraphqlData, category, itemsPerPage } =
    useContext(SearchBoardContext);

  let { data, loading, error } = GraphqlData;
  let hasData = !!data;
  let isLoading = !!loading;
  let hasError = !!error;
  let hasCategory = !!category;
  let dataReady = hasData && !isLoading && hasCategory;
  let hasLastSearch = dataReady && !!data[category]?.results && hasError;
  let validCategory = isCategoryValid(category);

  return (
    <ResultsBoardMain
      color="lightGrey"
      pad="mdx"
      mar-h="md"
      style={{ width: "100%" }}
    >
      {(hasError || !validCategory) && (
        <ErrorMessage hasLastSearch={hasLastSearch} />
      )}

      <CardBoard minCol="380px" gap="smx" className="card-board">
        {isLoading && <LoadingMessage />}

        {dataReady &&
          validCategory &&
          data[category]?.results
            .slice(0, itemsPerPage)
            .map((data, idx) => {
              const LINK_TO_INFO_PAGE = `/info/${category}/${data.id}`;

              return (
                <Link
                  className="grid-item-container-link"
                  to={LINK_TO_INFO_PAGE}
                  key={"search-board-card" + idx}
                >
                  <Box className={`card ${idx === 0 && "glow"}`}>
                    {category === "characters" && (
                      <CharacterCardSM data={data} />
                    )}
                    {category === "locations" && <LocationCardSM data={data} />}
                    {category === "episodes" && <EpisodeCardSM data={data} />}
                  </Box>
                </Link>
              );
            })}
      </CardBoard>
    </ResultsBoardMain>
  );
};

export default ResultsBoard;
