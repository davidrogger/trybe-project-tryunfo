import React from 'react';
import './Styles.css';
import Form from './components/Form';
import Preview from './components/PreviewCard';
import Search from './components/Search';

class App extends React.Component {
  constructor() {
    super();

    this.stateUpdate = this.stateUpdate.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.resetState = this.resetState.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.filterCard = this.filterCard.bind(this);
    this.allInputsValidations = this.allInputsValidations.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
      excludeButton: false,
      cardLibrary: '',
      rareFilter: 'todas',
      trunfoFilter: false,
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

  allInputsValidations() {
    const { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const textResult = this.textValidation([cardName, cardDescription, cardImage]);
    const minAttrDigit = 3;
    const isAllAttrFilled = cardAttr1.length + cardAttr2.length + cardAttr3.length
    >= minAttrDigit;
    const numberResult = isAllAttrFilled
      ? this.numberValidation([cardAttr1, cardAttr2, cardAttr3])
      : false;

    this.setState({
      isSaveButtonDisabled: !(textResult && numberResult),
    });
  }

  stateUpdate({ target }) {
    const { name } = target;
    const newValue = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: newValue,
    },
    () => {
      if (name !== 'cardLibrary') {
        this.allInputsValidations();
      }
    });
  }

  resetState() {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      isSaveButtonDisabled: true,
      cardTrunfo: false,
    });
  }

  saveCard(event) {
    event.preventDefault();
    const { cardName, cardDescription, cardRare, cardImage, cardAttr1, cardAttr2,
      cardAttr3, cardTrunfo, hasTrunfo,
    } = this.state;

    // Solucação encontrada no slackoverflow, usuário Fabio montefuscolo,
    // gero um número aleatório, converto para hexa, e elimino os 2 primeiros
    // dígitos, que seriam 0 e o .
    const hexa = 16;
    const newId = Math.random().toString(hexa).slice(2);

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

    const trunfoUpdate = hasTrunfo ? true : cardTrunfo;

    this.setState((prevState) => ({
      savedCards: [...prevState.savedCards, card],
      hasTrunfo: trunfoUpdate,
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
        cardTrunfo: false,
      });
    }
    const cardPosition = allIds.indexOf(id);
    savedCards.splice([cardPosition], 1);
    this.setState({
      savedCards,
    });
  }

  filterCard() {
    const { savedCards, cardLibrary, rareFilter, trunfoFilter } = this.state;

    return savedCards
      .filter((card) => {
        if (!cardLibrary && rareFilter === 'todas' && !trunfoFilter) return true;
        if (trunfoFilter) {
          return card.cardName.toLowerCase()
            .includes(cardLibrary.toLowerCase()) && card.cardTrunfo;
        }
        if (rareFilter !== 'todas') {
          return card.cardName.toLowerCase()
            .includes(cardLibrary.toLowerCase()) && card.cardRare === rareFilter;
        }
        return card.cardName.toLowerCase().includes(cardLibrary.toLowerCase());
      });
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, excludeButton, rareFilter, trunfoFilter } = this.state;

    const cardFiltered = this.filterCard();

    return (
      <div>
        <div className="top-container">
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

          <Preview
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
        <div className="displayCards">
          <div className="cardsFilter">
            <Search
              stateUpdate={ this.stateUpdate }
              rareFilter={ rareFilter }
              trunfoFilter={ trunfoFilter }
            />
          </div>
          <div className="cardsLibrary">
            {cardFiltered.map((card) => (
              <div className="eachCard" key={ card.newId }>
                <Preview
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
      </div>
    );
  }
}

export default App;
