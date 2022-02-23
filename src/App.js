import React from 'react';
import './Styles.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.stateUpdate = this.stateUpdate.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.numberTest = this.numberTest.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 2,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      allFilled: false,
    };
  }

  numberTest(value) {
    if (typeof value === 'boolean') return value;
    const number = Number(value);
    return Number.isNaN(number) ? value : number;
  }

  stateUpdate({ target }) {
    const { name } = target;
    const newValue = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: this.numberTest(newValue),
    });
  }

  saveCard() {

  }

  render() {
    const { cardName, cardDescription } = this.state;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const { cardImage, cardRare, cardTrunfo } = this.state;
    const { allFilled } = this.state;

    return (
      <div className="cardCreation">
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.stateUpdate }
          isSaveButtonDisabled={ allFilled }
          onSaveButtonClick={ this.saveCard }
        />

        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
