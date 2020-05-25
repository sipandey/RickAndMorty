import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = styled.input`
  font-size: 1.5rem;
  padding: 5px;
  margin-right: 5px;
  border: 1px solid ${props => props.theme.lightGrey};
`;

const SubmitBtn = styled.input`
  padding: 5px;
  border: 1px solid lightblue;
  font-size: 1.5rem;
  background-color: royalblue;
  color: white;
  box-shadow: ${props => props.theme.bs};
`;

class NameSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { handleNameSearch } = this.props;
    const { value } = this.state;
    return (
      <form onSubmit={event => handleNameSearch(event, value)}>
        <label>
          Search By Name
          <br />
          <Input
            name="name"
            type="text"
            placeholder="Search by Name"
            value={value}
            onChange={this.handleChange}
          />
        </label>
        <SubmitBtn type="submit" value="Search" />
      </form>
    );
  }
}

NameSearch.propTypes = {
  handleNameSearch: PropTypes.func.isRequired
};

export default NameSearch;
