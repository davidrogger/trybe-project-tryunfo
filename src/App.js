import React from 'react';
import './Styles.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
    };
  }

  render() {
    const { cardName } = this.state;
    return (
      <div className="cardCreation">
        <Form
          cardName={ cardName }
        />

        <Card
          cardName="PrimeiraCarta"
          cardDescription="descricao da carta"
          cardAttr1="80"
          cardAttr2="80"
          cardAttr3="80"
          cardImage="./images/imgTest.jpg"
          cardRare="Muito Rara"
          cardTrunfo={ false }
        />
      </div>
    );
  }
}

export default App;
