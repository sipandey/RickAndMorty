import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  CharacterStyles,
  CharacterTraits,
  Overlay,
  TraitKey,
  TraitValue
} from "./Character.style";
import { dayDiff } from "../lib/utils";

const CHARACTER_TRAITS = ["status", "species", "gender", "origin", "location"];

class Character extends Component {
  constructor(props) {
    super(props);
    this.renderCharacterTraits = this.renderCharacterTraits.bind(this);
  }
  renderCharacterTraits(character) {
    return CHARACTER_TRAITS.map(trait => {
      return (
        <CharacterTraits key={trait}>
          <TraitKey>{trait}</TraitKey>
          {trait === "origin" || trait === "location" ? (
            <TraitValue>{character[trait].name}</TraitValue>
          ) : (
            <TraitValue>{character[trait]}</TraitValue>
          )}
        </CharacterTraits>
      );
    });
  }

  render() {
    const { character } = this.props;
    return (
      <CharacterStyles>
        <Overlay>
          {character.name}
          <p>{`Id: ${character.id} - Created: ${dayDiff(
            new Date(character.created),
            new Date()
          )} years ago`}</p>
        </Overlay>
        {character.image && <img src={character.image} alt={character.name} />}
        {this.renderCharacterTraits(character)}
      </CharacterStyles>
    );
  }
}

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
};

export default Character;
