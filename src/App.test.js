import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow} from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

configure({ adapter: new Adapter() });

describe(' Test App.js', function() {
  it('No existe el componente "Hola Mundo"', function() {
    const render = shallow(<App />); 
    const helloWord = <h1>Hola Mundo!</h1>;
    expect(render.contains(helloWord)).to.equal(false);
  });
});




