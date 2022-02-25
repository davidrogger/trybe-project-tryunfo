import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  render() {
    const { stateUpdate, rareFilter, trunfoFilter } = this.props;
    return (
      <>
        <h1>Busca</h1>
        <input
          data-testid="name-filter"
          name="cardLibrary"
          type="text"
          placeholder="Busque pelo nome"
          onChange={ stateUpdate }
          disabled={ trunfoFilter }
        />

        <select
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

        <label data-testid="trunfo-filter" htmlFor="superTrunfo">
          <input
            name="trunfoFilter"
            id="superTrunfo"
            type="checkbox"
            checked={ trunfoFilter }
            onChange={ stateUpdate }
          />
          Super Trunfo
        </label>
      </>
    );
  }
}

Search.propTypes = {
  stateUpdate: PropTypes.func.isRequired,
  rareFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
};

export default Search;
