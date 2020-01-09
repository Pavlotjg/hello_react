import React from 'react';
import ReactDOM from 'react-dom';
import App, { sum, isNull } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('two plus two plus three is seven', () => {
  expect(sum(2,2,3)).toBe(7);
});

test('Should be null', () => {
  expect(isNull()).toBeNull()
});