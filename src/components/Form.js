import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { LinkSimple } from 'phosphor-react';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;

    return (
      <section className="form-container">
        <form className="forms-card">

          <h1 className="title-primary">Adicionar Nova Carta</h1>

          <label
            className="name-create input-label column-input"
            htmlFor="nameInput"
          >
            Nome:
            <input
              className="name-input bottom-line"
              placeholder="Jonas Silva"
              type="text"
              id="nameInput"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
              name="cardName"
            />
          </label>

          <label
            className="description-input  input-label"
            htmlFor="descripInput"
          >
            Descrição:
            <textarea
              className="description-input bottom-line column-input"
              type="areatext"
              id="descripInput"
              data-testid="description-input"
              placeholder="One step every day"
              value={ cardDescription }
              onChange={ onInputChange }
              name="cardDescription"
            />
          </label>
          <div className="attribute-container">
            <label
              className="input-label row-label"
              htmlFor="attr1Input"
            >
              <span>
                HardSkills:
              </span>
              <input
                className="attribute-input"
                type="number"
                id="attr1Input"
                data-testid="attr1-input"
                placeholder="70"
                value={ cardAttr1 }
                onChange={ onInputChange }
                name="cardAttr1"
              />
            </label>

            <label
              className="input-label row-label"
              htmlFor="attr2Input"
            >
              <span>
                SoftSkills:
              </span>
              <input
                className="attribute-input"
                type="number"
                id="attr2Input"
                data-testid="attr2-input"
                placeholder="50"
                value={ cardAttr2 }
                onChange={ onInputChange }
                name="cardAttr2"
              />
            </label>

            <label
              className="input-label row-label"
              htmlFor="attr3Input"
            >
              <span>
                WillPower:
              </span>
              <input
                className="attribute-input"
                type="number"
                id="attr3Input"
                data-testid="attr3-input"
                placeholder="90"
                value={ cardAttr3 }
                onChange={ onInputChange }
                name="cardAttr3"
              />
            </label>
          </div>

          <label
            className="input-label row-label"
            htmlFor="imgInput"
          >
            <span>
              Imagem
            </span>
            <div className="image-container">
              <LinkSimple className="link-ico" size="27" />
              <input
                className="image-input"
                type="text"
                id="imgInput"
                data-testid="image-input"
                value={ cardImage }
                onChange={ onInputChange }
                name="cardImage"
              />
            </div>
          </label>

          <label
            className="input-label column-input"
            htmlFor="rarityInput"
          >
            Raridade
            <select
              className="bottom-line select-box"
              id="rarityInput"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              name="cardRare"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          {hasTrunfo ? (
            <span>Você já tem um Super Trunfo em seu baralho</span>
          )
            : (
              <label
                className="input-label checkbox-super"
                htmlFor="trunfoInput"
              >
                <input
                  className="checkbox-super"
                  type="checkbox"
                  id="trunfoInput"
                  data-testid="trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                  name="cardTrunfo"
                />
                <span>
                  Super Trybe Trunfo
                </span>
              </label>)}

          <button
            className="save-btn"
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
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
