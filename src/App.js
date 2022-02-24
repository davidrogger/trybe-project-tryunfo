import React from 'react';
import './Styles.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.stateUpdate = this.stateUpdate.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.fieldValidation = this.textValidation.bind(this);
    this.positionTrack = this.textPositionTrack.bind(this);
    this.resetState = this.resetState.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
    };
  }

  textPositionTrack(name) {
    const noMagicNumber = 3;
    if (name === 'cardName') return 0;
    if (name === 'cardDescription') return 1;
    if (name === 'cardImage') return 2;
    if (name === 'cardRare') return noMagicNumber;
  }

  numberPosition(name) {
    if (name === 'cardAttr1') return 0;
    if (name === 'cardAttr2') return 1;
    if (name === 'cardAttr3') return 2;
  }

  numberValidation(currentName, currentValue) {
    const positionNumber = this.numberPosition(currentName);
    const values = Object.values(this.state)
      .filter((keyValue) => typeof keyValue === 'number');
    if (typeof currentValue === 'number') {
      values[positionNumber] = currentValue;
    }
    const maxNumber = 90;
    const minNumber = 0;
    const maxSum = 210;

    const minMaxNumberTest = values
      .every((value) => value >= minNumber && value <= maxNumber);

    const sumNumber = values.reduce((sum, number) => sum + number, 0);
    return minMaxNumberTest && sumNumber <= maxSum;
  }

  textValidation(currentName, currentValue) {
    const numberOfValues = 4;
    const positionField = this.textPositionTrack(currentName);

    const values = Object.values(this.state)
      .filter((_keyValue, index) => index < numberOfValues);

    if (typeof currentValue === 'string') {
      values[positionField] = currentValue;
    }

    return values.every((value) => value.length > 0);
  }

  finalValidation(currentName, currentValue) {
    const numberTest = this.numberValidation(currentName, currentValue);
    const textTest = this.textValidation(currentName, currentValue);
    return !(numberTest && textTest);
  }

  stateUpdate({ target }) {
    const { name } = target;
    let newValue = target.type === 'checkbox' ? target.checked : target.value;
    if (name === 'cardAttr1' || name === 'cardAttr2' || name === 'cardAttr3') {
      newValue = Number(newValue);
    }
    this.setState({
      [name]: newValue,
      isSaveButtonDisabled: this.finalValidation(name, newValue),
    });
  }

  resetState() {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
    });
  }

  saveCard(event) {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardRare, cardImage,
      cardAttr1, cardAttr2,
      cardAttr3,
    } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardRare,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    };

    this.setState((prevState) => ({
      savedCards: [card, ...prevState.savedCards],
    }));

    this.resetState();
  }

  render() {
    const { cardName, cardDescription } = this.state;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const { cardImage, cardRare, cardTrunfo } = this.state;
    const { isSaveButtonDisabled } = this.state;

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
          isSaveButtonDisabled={ isSaveButtonDisabled }
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
