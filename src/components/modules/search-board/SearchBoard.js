import React from "react";
import { Box } from "../../primitives/assets";
import styled from "styled-components";
import SearchControl from "./search-control";
import PaginationControl from "./pagination-control";

import { SearchBoardProvider } from "./search-board-context";

import ResultsBoard from "./results-card-board";

const SearchBoardMain = styled(Box)`
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: 
  .card-board {
    min-height: 60vh;
    .grid-item-container-link {
      width: 100%;
    }
    .card {
      width: 100%;
      cursor: pointer;
    }
    .glow {
      filter: drop-shadow(0 0 15px white);
    }
  }
`;

const SearchBoard = () => {

  return (
    <SearchBoardProvider>
        <SearchBoardMain color="lightGreen" pad-t="mdx">
          <SearchControl />

          <ResultsBoard />

          <PaginationControl />
        </SearchBoardMain>
    </SearchBoardProvider>
  );
};

export default SearchBoard;
