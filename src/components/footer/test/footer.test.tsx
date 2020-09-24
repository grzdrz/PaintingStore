/* eslint-disable no-undef */
import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Footer from '../footer';

let container: Element;
beforeEach(() => {
  container = document.createElement('div');
  document.body.append(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = undefined;
});

it('footer is exist', () => {
  act(() => {
    render(<Footer />, container);
  });

  const footer = container.querySelector('.footer');
  expect(footer).not.toBeNull();
});


