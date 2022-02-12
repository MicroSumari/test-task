import React, { createContext, useState, useEffect } from "react";
import QUERIES from "../../../api/RickAndMortyAPI_graphql";
import { getApiData as getCategories } from "../../../api/RickAndMortyAPI_fetch";
import { useQuery as useGraphqlQuery } from "@apollo/react-hooks";
import { useUrlParams, ObjectToQueryString } from "./helpers/hooks";
import { useHistory } from "react-router-dom";
import { isCategoryValid } from "../../pages/Info/helpers/functions";

export const SearchBoardContext = createContext({});

export const SearchBoardProvider = (props) => {
  const [categories, setCategories] = useState([]);
  const { category, name, page } = useUrlParams({ category: "characters" });
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const history = useHistory();

  const GraphqlData = useGraphqlQuery(
    QUERIES.FOR_MANY_ITEMS[isCategoryValid(category) ? category : "characters"],
    {
      variables: { name: name || "", page: parseInt(page) || 1 },
    }
  );


  const HandleSearch = (params = {}) => {
    const inputValue = document.getElementById("searchControl-Input").value;
    const selectValue = document.getElementById("searchControl-Select").value;

    const currentParams = {
      category: selectValue,
      name: inputValue,
      page: parseInt(page),
      ...params,
    };

    history.push({
      search: ObjectToQueryString(currentParams),
    });
  };

  // Assign categories
  useEffect(() => {
    setCategories(["Characters"]);
  }, []);

  return (
    <SearchBoardContext.Provider
      value={{
        categories,
        setCategories,
        GraphqlData,
        HandleSearch,
        category,
        name,
        history,
        page,
        itemsPerPage,
        setItemsPerPage,
      }}
    >
      {props.children}
    </SearchBoardContext.Provider>
  );
};

export default SearchBoardProvider;
