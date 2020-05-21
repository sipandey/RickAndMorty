import styled from "styled-components";

const CharacterStyles = styled.div`
  background: white;
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.bs};
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 250px;
  }
  p {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 65px;
  top: 185px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;
  color: ${props => props.theme.offWhite};
  padding: 0px 5px;
  font-size: 2rem;
  line-height: 2;
  p {
    margin: 0 auto;
    padding: 0;
    line-height: 1;
    font-size: 1.5rem;
  }
`;

const CharacterTraits = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 5px;
  font-size: 1.4rem;
  background-color: ${props => props.theme.darkGrey};
  color: ${props => props.theme.offWhite};
  border-bottom: 1px solid;
`;

const TraitKey = styled.div`
  color: ${props => props.theme.offWhite};
  text-transform: uppercase;
`;

const TraitValue = styled.div`
  color: ${props => props.theme.orange};
`;

export { CharacterStyles, CharacterTraits, Overlay, TraitValue, TraitKey };
