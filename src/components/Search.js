import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  render() {
    const { stateUpdate, rareFilter } = this.props;
    return (
      <>
        <h1>Busca</h1>
        <input
          data-testid="name-filter"
          name="cardLibrary"
          type="text"
          placeholder="Busque pelo nome"
          onChange={ stateUpdate }
        />
        <select
          data-testid="rare-filter"
          name="rareFilter"
          value={ rareFilter }
          onChange={ stateUpdate }
        >
          <option value="todas">Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
      </>
    );
  }
}

Search.propTypes = {
  stateUpdate: PropTypes.func.isRequired,
  rareFilter: PropTypes.string.isRequired,
};

export default Search;
