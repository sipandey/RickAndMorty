import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  CharacterStyles,
  CharacterTraits,
  Overlay,
  TraitKey,
  TraitValue
} from "./Character.style";

const CHARACTER_TRAITS = ["status", "species", "gender", "origin", "location"];

class Character extends Component {
  renderCharacterTraits = character => {
    return CHARACTER_TRAITS.map(trait => {
      return (
        <CharacterTraits>
          <TraitKey>{trait}</TraitKey>
          {trait === "origin" || trait === "location" ? (
            <TraitValue>{character[trait].name}</TraitValue>
          ) : (
            <TraitValue>{character[trait]}</TraitValue>
          )}
        </CharacterTraits>
      );
    });
  };

  render() {
    const { character } = this.props;
    return (
      <CharacterStyles>
        <Overlay>
          {character.name}
          <p>{`Id: ${character.id} - Created: ${character.created}`}</p>
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
    status: PropTypes.string.isRequired
  })
};

export default Character;
