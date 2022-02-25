import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  render() {
    const { stateUpdate } = this.props;
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
      </>
    );
  }
}

Search.propTypes = {
  stateUpdate: PropTypes.func.isRequired,
};

export default Search;
