import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SpeciesFilterStyle = styled.div`
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.bs};
  padding: 10px 30px;
  text-align: left;
  margin-top: 30px;
  @media (max-width: 768px) {
    margin-top: 0px;
    margin-left: 30px;
  }
`;

class SpeciesFilter extends Component {
  render() {
    const { setSpeciesFilter } = this.props;
    return (
      <SpeciesFilterStyle>
        By Species
        <form>
          <label>
            Human:
            <input
              name="species"
              type="radio"
              value="Human"
              onClick={event => setSpeciesFilter(event)}
            />
          </label>
          <br />
          <label>
            Alien:
            <input
              name="species"
              type="radio"
              value="Alien"
              onClick={event => setSpeciesFilter(event)}
            />
          </label>
          <br />
          <label>
            Mythologs:
            <input
              name="species"
              type="radio"
              value="Mytholog"
              onClick={event => setSpeciesFilter(event)}
            />
          </label>
          <br />
          <label>
            Robots:
            <input
              name="species"
              type="radio"
              value="Robot"
              onClick={event => setSpeciesFilter(event)}
            />
          </label>
          <br />
          <label>
            Vampires:
            <input
              name="species"
              type="radio"
              value="Vampire"
              onClick={event => setSpeciesFilter(event)}
            />
          </label>
        </form>
      </SpeciesFilterStyle>
    );
  }
}

SpeciesFilter.propTypes = {
  setSpeciesFilter: PropTypes.func.isRequired
};

export default SpeciesFilter;
