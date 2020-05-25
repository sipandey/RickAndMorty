import styled from "styled-components";

const CharactersList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Center = styled.div`
  text-align: center;
`;

const InnerSection = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: block;
  }
`;

const SearchAndSortBar = styled.div`
  padding-left: 20px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const FilterBar = styled.div`
  margin: 0 auto;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
`;

export { CharactersList, Center, SearchAndSortBar, FilterBar, InnerSection };
