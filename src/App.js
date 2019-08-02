import React from 'react';
import { Provider } from 'react-redux'
import store from './Store'
import EvenAndOddNumber from './Componentes/evenOdd'

class App extends React.Component {
  render() {
    return (
     <Provider store={store}>
       <EvenAndOddNumber/>
      </Provider>
    );
  }
}

export default App;