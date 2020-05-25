import React, { Component } from "react";
import PropTypes from "prop-types";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Router from "next/router";
import Character from "../components/Character";
import GenderFilter from "./GenderFilter";
import SpeciesFilter from "./SpeciesFilter";
import Pagination from "./Pagination";
import NameSearch from "./NameSearch";
import {
  CharactersList,
  Center,
  SearchAndSortBar,
  FilterBar,
  InnerSection
} from "./Characters.style";

const ALL_CHARACTERS_QUERY = gql`
  query ALL_CHARACTERS_QUERY(
    $name: String
    $gender: String
    $species: String
    $page: Int
  ) {
    characters(
      page: $page
      filter: { name: $name, gender: $gender, species: $species }
    ) {
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

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: ""
    };
    this.updateQueryParams = this.updateQueryParams.bind(this);
    this.setGenderFilter = this.setGenderFilter.bind(this);
    this.setSpeciesFilter = this.setSpeciesFilter.bind(this);
    this.handleNameSearch = this.handleNameSearch.bind(this);
  }

  updateQueryParams() {
    Router.push({
      pathname: "/",
      query: { page: 1 }
    });
  }

  setGenderFilter(event) {
    this.setState({
      gender: event.target.value
    });
    this.updateQueryParams();
  }

  setSpeciesFilter(event) {
    this.setState({
      species: event.target.value
    });
    this.updateQueryParams();
  }

  handleNameSearch(event, value) {
    event.preventDefault();
    this.setState({ name: value });
    this.updateQueryParams();
  }

  render() {
    const { gender, species, name } = this.state;
    const { page } = this.props;
    return (
      <div>
        <SearchAndSortBar>
          <NameSearch handleNameSearch={this.handleNameSearch} />
        </SearchAndSortBar>
        <Center>
          <Pagination
            page={page}
            gender={gender}
            species={species}
            name={name}
          />
          <InnerSection>
            <FilterBar>
              <GenderFilter setGenderFilter={this.setGenderFilter} />
              <SpeciesFilter setSpeciesFilter={this.setSpeciesFilter} />
            </FilterBar>
            <Query
              query={ALL_CHARACTERS_QUERY}
              variables={{
                name: name,
                gender: gender,
                species: species,
                page: page
              }}
            >
              {({ data, loading, error }) => {
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
          </InnerSection>
          <Pagination
            page={page}
            gender={gender}
            species={species}
            name={name}
          />
        </Center>
      </div>
    );
  }
}

Characters.propTypes = {
  page: PropTypes.number.isRequired
};

export default Characters;
