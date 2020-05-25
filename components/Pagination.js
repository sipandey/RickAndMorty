import React from "react";
import PropTypes from "prop-types";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Link from "next/link";
import PaginationStyles from "./Pagination.style";

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY($gender: String, $species: String, $name: String) {
    characters(filter: { gender: $gender, species: $species, name: $name }) {
      info {
        count
        pages
        prev
        next
      }
    }
  }
`;

const Pagination = props => (
  <Query
    query={PAGINATION_QUERY}
    variables={{
      gender: props.gender,
      species: props.species,
      name: props.name
    }}
  >
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error... {error.message}</p>;
      const pageCount = data.characters.info.pages;
      const page = props.page;
      const count = data.characters.info.count;
      return (
        <PaginationStyles>
          <Link
            href={{
              query: { page: page - 1 }
            }}
          >
            <a className="prev" aria-disabled={page <= 1}>
              Prev
            </a>
          </Link>
          <p>
            Page {page} of {pageCount}
          </p>
          <p>{count} Characters Total</p>
          <Link
            href={{
              query: { page: page + 1 }
            }}
          >
            <a className="next" aria-disabled={page >= pageCount}>
              Next
            </a>
          </Link>
        </PaginationStyles>
      );
    }}
  </Query>
);

Pagination.propTypes = {
  name: PropTypes.string,
  gender: PropTypes.string,
  species: PropTypes.string,
  page: PropTypes.number
};

export default Pagination;
