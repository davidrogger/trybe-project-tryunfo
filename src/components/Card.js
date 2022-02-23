import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { cardName, cardDescription } = this.props;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.props;
    const { cardImage, cardRare, cardTrunfo } = this.props;

    return (
      <section className="previewCard">

        <h2 data-testid="name-card">{cardName}</h2>

        <img src={ cardImage } alt={ cardName } data-testid="image-card" />

        { cardTrunfo && (
          <span data-testid="trunfo-card">Super Trunfo</span>
        )}

        <em data-testid="description-card">{cardDescription}</em>

        <h3 data-testid="rare-card">
          {' '}
          {cardRare}
          {' '}
        </h3>
        <section className="attriContainer">
          <p>
            <em>Primeiro:</em>
            {' '}
            <strong data-testid="attr1-card">{cardAttr1}</strong>
          </p>
          <p>
            <em>Segundo:</em>
            {' '}
            <strong data-testid="attr2-card">{cardAttr2}</strong>
          </p>
          <p>
            <em>Terceiro:</em>
            {' '}
            <strong data-testid="attr3-card">{cardAttr3}</strong>
          </p>
        </section>

      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
