import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <section className="addCard">
        <form>
          <label htmlFor="nameInput">
            Nome:
            <input type="text" id="nameInput" data-testid="name-input" />
          </label>
          <label htmlFor="descripInput">
            Descrição:
            <input type="areatext" id="descripInput" data-testid="description-input" />
          </label>
          <label htmlFor="attr1Input">
            Attr01:
            <input type="number" id="attr1Input" data-testid="attr1-input" />
          </label>
          <label htmlFor="attr2Input">
            Attr02:
            <input type="number" id="attr2Input" data-testid="attr2-input" />
          </label>
          <label htmlFor="attr3Input">
            Attr02:
            <input type="number" id="attr3Input" data-testid="attr3-input" />
          </label>
          <label htmlFor="imgInput">
            Imagem:
            <input type="text" id="imgInput" data-testid="image-input" />
          </label>
          <label htmlFor="rarityInput">
            <select id="rarityInput" data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfoInput">
            <input type="checkbox" data-testid="trunfo-input" />
          </label>
          <button type="submit" data-testid="save-button">Salvar</button>
        </form>
      </section>
    );
  }
}

export default Form;
