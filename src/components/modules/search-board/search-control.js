import React, { useContext, useEffect } from "react";
import {
  Select,
  Input,
  Img,
  Button,
  Separator,
  ControlBar,
  Indicator,
} from "../../primitives/assets";
import styled from "styled-components";
import { SearchBoardContext } from "./search-board-context";

const SearchControlMain = styled(ControlBar)`
  .capitalize {
    text-transform: capitalize;
  }

  .search-control-input {
    width: 100%;
  }
`;

const SearchControl = () => {
  let { categories, category, name, HandleSearch } =
    useContext(SearchBoardContext);

  const HandleCategoryChange = (e) => {
    HandleSearch({ page: 1 });
  };

  useEffect(() => {
    const input = document.getElementById("searchControl-Input");
    const enterKeyEvent = (e) => {
      e.code === "Enter" && HandleSearch({ page: 1 });
    };
    input.addEventListener("keydown", enterKeyEvent);
    return () => {
      input.removeEventListener("keydown", enterKeyEvent);
    };
  }, [HandleSearch]);

  return (
    categories && (
      <SearchControlMain
        color="dark-gray"
        pad-w="xs"
        pad-h="xxs"
        fontColor="white"
      >
        <Indicator pad-w="sm" showOnHover>
          <Select
            pad="xs"
            option-color="white"
            option-bg="dark-gray"
            id="searchControl-Select"
            className="capitalize"
            defaultValue={category || categories[0]}
            onChange={HandleCategoryChange}
          >
            {category && (
              <option value={category} className="capitalize">
                {category}
              </option>
            )}
            {categories.map((cat) => {
              return (
                cat !== category && (
                  <option
                    key={"category-select-option-" + cat}
                    className="capitalize"
                    value={cat}
                  >
                    {cat}
                  </option>
                )
              );
            })}
          </Select>
        </Indicator>

        <Separator color="white" opacity="0.2" mar-w="sm" />

        <Input
          placeholder="Type to search..."
          pad="xs"
          mar-w="xs"
          pad-w="sm"
          className="search-control-input"
          id="searchControl-Input"
          defaultValue={name}
          type="search"
        />

        <Button pad="xs" onClick={HandleSearch}>
          <Img
            src="https://tpng.net/download/800x800_87-872187_lupa-png.png"
            alt="search"
            size="sm"
          />
        </Button>
      </SearchControlMain>
    )
  );
};

export default SearchControl;
