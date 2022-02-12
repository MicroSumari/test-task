import React, { createContext, useEffect, useState, useContext } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { graphQLConnect } from "../../../api/ApolloClient";
import { getApiData } from "../../../api/RickAndMortyAPI_fetch";

const ConnectionStateContext = createContext(false);

export function useConnectionState() {return useContext(ConnectionStateContext);}

const ConnectionProvider = (props) => {
  const [isConnOn, setIsConnOn] = useState(false);

  useEffect(() => {
    getApiData().then(results => {
      if (!isConnOn) setIsConnOn(Boolean(results));
    });
  }, [isConnOn]);

  return (
    <ConnectionStateContext.Provider value={isConnOn}>
      <ApolloProvider client={graphQLConnect}>{props.children}</ApolloProvider>
    </ConnectionStateContext.Provider>
  );
};

export default ConnectionProvider;
