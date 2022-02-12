import gql from "graphql-tag";

export const GET_CHARACTERS_QUERY = gql`
  query getCharacters($name: String!, $page: Int!) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        name
        status
        species
        location {
          name
        }
        image
        episode {
          name
        }
        id
      }
    }
  }
`;


export const GET_ALL_ITEMS_QUERY = gql`
  query getAllByName {
    characters {
      results {
        name
        status
        species
        location {
          name
        }
        image
        episode {
          name
        }
        id
      }
    }
    locations {
      results {
        name
        dimension
        type
        id
      }
    }
    episodes {
      results {
        name
        episode
        id
      }
    }
  }
`;

// Full Data
export const GET_CHARACTER_BY_ID = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      origin {
        name
      }
      image
      location {
        name
      }
      episode {
        id
      }
    }
  }
`;


export const QUERIES = {
  GET_CHARACTERS_QUERY,
  FOR_MANY_ITEMS: {
    characters: GET_CHARACTERS_QUERY,
  },
  FOR_SPECIFIC_ITEM: {
    characters: GET_CHARACTER_BY_ID,
  },
};

export default QUERIES;
