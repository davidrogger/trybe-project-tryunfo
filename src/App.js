import React from 'react';
import './Styles.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.stateUpdate = this.stateUpdate.bind(this);
    this.saveCard = this.saveCard.bind(this);
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
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
    };
  }

  textValidation(valueList) {
    return valueList.every((value) => value.length > 0);
  }

  numberValidation(numbersList) {
    const minNumber = 0;
    const maxNumber = 90;
    const sumlimit = 210;
    const minMaxTest = numbersList
      .every((number) => number >= minNumber && number <= maxNumber);
    const sumNumber = numbersList.reduce((sum, number) => sum + number, 0);
    const sumLimitTest = sumNumber <= sumlimit;
    return minMaxTest && sumLimitTest;
  }

  stateUpdate({ target }) {
    const { name } = target;
    let newValue = target.type === 'checkbox' ? target.checked : target.value;
    if (name === 'cardAttr1' || name === 'cardAttr2' || name === 'cardAttr3') {
      newValue = Number(newValue);
    }
    this.setState({
      [name]: newValue,
    }, () => {
      const { cardName, cardDescription, cardImage,
        cardAttr1, cardAttr2, cardAttr3 } = this.state;
      console.log(typeof cardAttr1);
      const textResult = this.textValidation([cardName, cardDescription, cardImage]);
      const numberResult = this.numberValidation([cardAttr1, cardAttr2, cardAttr3]);

      this.setState({
        isSaveButtonDisabled: !(textResult && numberResult),
      });
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
      cardTrunfo,
    } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardRare,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      savedCards: [card, ...prevState.savedCards],
      hasTrunfo: cardTrunfo,
    }));

    this.resetState();
  }

  render() {
    const { cardName, cardDescription } = this.state;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const { cardImage, cardRare, cardTrunfo, hasTrunfo } = this.state;
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
          hasTrunfo={ hasTrunfo }
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
