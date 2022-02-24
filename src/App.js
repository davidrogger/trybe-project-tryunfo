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
    this.deleteCard = this.deleteCard.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
      excludeButton: false,
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
      .every((number) => Number(number) >= minNumber && Number(number) <= maxNumber);
    const sumNumber = numbersList.reduce((sum, number) => sum + Number(number), 0);
    const sumLimitTest = sumNumber <= sumlimit;
    return minMaxTest && sumLimitTest;
  }

  stateUpdate({ target }) {
    const { name } = target;
    const newValue = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: newValue,
    }, () => {
      const { cardName, cardDescription, cardImage,
        cardAttr1, cardAttr2, cardAttr3 } = this.state;
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
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
    });
  }

  saveCard(event) {
    event.preventDefault();
    const { cardName, cardDescription, cardRare, cardImage, cardAttr1, cardAttr2,
      cardAttr3, cardTrunfo,
    } = this.state;

    // Solucação encontrada no slackoverflow, usuário Fabio montefuscolo, gero um número aleatório, converto para hexa, e elimino os 2 primeiros dígitos, que seriam 0 e o .
    const hexa = 16;
    const newId = Math.random().toString(hexa).slice(2);

    // Minha solução não foi aceita pelo lint.
    // const idMax = 1000;
    // let newId;

    // let notRepetedNumber = false;

    // while (!notRepetedNumber) {
    //   newId = Math.floor(Math.random() * idMax);
    //   if (savedCards.every((card) => card.id !== newId)) notRepetedNumber = true;
    // }

    const card = {
      newId,
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
      savedCards: [...prevState.savedCards, card],
      hasTrunfo: cardTrunfo,
    }));

    this.resetState();
  }

  deleteCard(id) {
    const { savedCards } = this.state;
    const card = savedCards.find((cardValue) => cardValue.newId === id);
    const allIds = savedCards.map(({ newId }) => newId);
    if (card.cardTrunfo) {
      this.setState({
        hasTrunfo: false,
      });
    }
    const cardPosition = allIds.indexOf(id);
    savedCards.splice([cardPosition], 1);
    this.setState({
      savedCards,
    });
    console.log(this.state);
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, savedCards, excludeButton } = this.state;

    return (
      <div>
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
            excludeButton={ excludeButton }
          />
        </div>
        <div>
          {savedCards.map((card) => (
            <div key={ card.newId }>
              <Card
                key={ card.newId }
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
                excludeButton={ card.excludeButton }
              />
              <button
                type="button"
                data-testid="delete-button"
                onClick={ () => this.deleteCard(card.newId) }
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
