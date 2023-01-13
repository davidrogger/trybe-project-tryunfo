import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.props;

    return (
      <section className="card-edge">
        <section className="card-content">
          <h2 data-testid="name-card">{cardName}</h2>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />

          { cardTrunfo && (
            <span data-testid="trunfo-card">Super Trunfo</span>
          )}

          <em data-testid="description-card">{cardDescription}</em>

          <h3 data-testid="rare-card">
            {cardRare}
          </h3>
          <section className="attriContainer">
            <p>
              <em>Primeiro:</em>
              <strong data-testid="attr1-card">{cardAttr1}</strong>
            </p>
            <p>
              <em>Segundo:</em>
              <strong data-testid="attr2-card">{cardAttr2}</strong>
            </p>
            <p>
              <em>Terceiro:</em>
              <strong data-testid="attr3-card">{cardAttr3}</strong>
            </p>
          </section>
        </section>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
