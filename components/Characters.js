import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import styled from "styled-components";
import Character from "../components/Character";

const ALL_CHARACTERS_QUERY = gql`
  query ALL_CHARACTERS_QUERY {
    characters {
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image
        created
      }
    }
  }
`;

const CharactersList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

class Characters extends Component {
  render() {
    return (
      <div>
        <Query query={ALL_CHARACTERS_QUERY}>
          {({ data, loading, error }) => {
            console.log(data);
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error... {error.message}</p>;
            return (
              <CharactersList>
                {data.characters.results.map(character => (
                  <Character character={character} key={character.id} />
                ))}
              </CharactersList>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Characters;
