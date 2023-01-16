import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  render() {
    const { stateUpdate, rareFilter, trunfoFilter } = this.props;
    return (
      <section className="filter-container">
        <h1 className="title-primary">Filtro de busca</h1>
        <section className="filter-options">
          <input
            className="name-input bottom-line"
            data-testid="name-filter"
            name="cardLibrary"
            type="text"
            placeholder="Nome da Carta"
            onChange={ stateUpdate }
            disabled={ trunfoFilter }
          />

          <select
            className="bottom-line select-box"
            data-testid="rare-filter"
            name="rareFilter"
            value={ rareFilter }
            onChange={ stateUpdate }
            disabled={ trunfoFilter }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>

          <label
            className="input-label checkbox-super"
            data-testid="trunfo-filter"
            htmlFor="superTrunfo"
          >
            <input
              name="trunfoFilter"
              id="superTrunfo"
              type="checkbox"
              checked={ trunfoFilter }
              onChange={ stateUpdate }
            />
            <span className="text-format">
              Super Tryunfo
            </span>
          </label>
        </section>
      </section>
    );
  }
}

Search.propTypes = {
  stateUpdate: PropTypes.func.isRequired,
  rareFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
};

export default Search;
