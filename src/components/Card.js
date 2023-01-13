import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Sparkle } from 'phosphor-react';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.props;

    return (
      <section className="card-edge">
        <section className="card-content">
          <h2
            className="card-title"
            data-testid="name-card"
          >
            {cardName}
          </h2>

          <section className="card-image-container">
            <img
              className="image-card"
              src={ cardImage }
              alt={ cardName }
              data-testid="image-card"
            />
            { cardTrunfo && (
              <span
                className="trunfo-ico"
                data-testid="trunfo-card"
              >
                <Sparkle color="yellow" size={ 15 } />
                tryunfo
              </span>
            )}
          </section>
          <section className="description-container">
            <h3
              className="type-card"
              data-testid="rare-card"
            >
              {cardRare}
            </h3>
            <em
              className="description-text"
              data-testid="description-card"
            >
              {cardDescription}
            </em>
          </section>
          <section className="card-attribute-container ">
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
