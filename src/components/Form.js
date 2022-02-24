import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3 } = this.props;
    const { cardImage, cardRare, cardTrunfo } = this.props;
    const { /* hasTrunfo , */ isSaveButtonDisabled } = this.props;
    const { onInputChange, onSaveButtonClick } = this.props;
    return (
      <section className="addCard">
        <form className="formsCard">

          <h1>Adicionar Carta</h1>

          <label htmlFor="nameInput">
            Nome:
            <input
              type="text"
              id="nameInput"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
              name="cardName"
            />
          </label>

          <label htmlFor="descripInput">
            Descrição:
            <textarea
              type="areatext"
              id="descripInput"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
              name="cardDescription"
            />
          </label>

          <label htmlFor="attr1Input">
            Attr01:
            <input
              type="number"
              id="attr1Input"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              name="cardAttr1"
            />
          </label>

          <label htmlFor="attr2Input">
            Attr02:
            <input
              type="number"
              id="attr2Input"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              name="cardAttr2"
            />
          </label>

          <label htmlFor="attr3Input">
            Attr03:
            <input
              type="number"
              id="attr3Input"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              name="cardAttr3"
            />
          </label>

          <label htmlFor="imgInput">
            Imagem:
            <input
              type="text"
              id="imgInput"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
              name="cardImage"
            />
          </label>

          <label htmlFor="rarityInput">
            <select
              id="rarityInput"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              name="cardRare"
            >
              <option value="" disabled>Escolha uma Raridade</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label htmlFor="trunfoInput">
            <input
              type="checkbox"
              id="trunfoInput"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              name="cardTrunfo"
            />
            Super Trybe Trunfo
          </label>

          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar

          </button>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
