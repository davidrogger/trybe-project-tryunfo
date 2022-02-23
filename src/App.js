import React from 'react';
import Form from './components/Form';
import './Styles.css';

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
      <div>
        <Form
          cardName={ cardName }
        />
      </div>
    );
  }
}

export default App;
