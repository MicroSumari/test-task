import ApolloClient from "apollo-boost";

export const graphQLConnect = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
});