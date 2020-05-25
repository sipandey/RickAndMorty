import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const GenderFilterStyle = styled.div`
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.bs};
  padding: 10px 30px;
  text-align: left;
`;

class GenderFilter extends Component {
  render() {
    const { setGenderFilter } = this.props;
    return (
      <GenderFilterStyle>
        By Gender
        <form>
          <label>
            Male:
            <input
              name="gender"
              type="radio"
              value="Male"
              onClick={event => setGenderFilter(event)}
            />
          </label>
          <br />
          <label>
            Female:
            <input
              name="gender"
              type="radio"
              value="Female"
              onClick={event => setGenderFilter(event)}
            />
          </label>
          <br />
          <label>
            Genderless:
            <input
              name="gender"
              type="radio"
              value="Genderless"
              onClick={event => setGenderFilter(event)}
            />
          </label>
          <br />
          <label>
            Unknown:
            <input
              name="gender"
              type="radio"
              value="Unknown"
              onClick={event => setGenderFilter(event)}
            />
          </label>
        </form>
      </GenderFilterStyle>
    );
  }
}

GenderFilter.propTypes = {
  setGenderFilter: PropTypes.func.isRequired
};

export default GenderFilter;
