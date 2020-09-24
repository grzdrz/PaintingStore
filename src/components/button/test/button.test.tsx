/* eslint-disable no-undef */
import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Button from '../button';

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

describe('props values', () => {
  it('text', () => {
    const expectedText = 'test_button';
    act(() => {
      render(
        <Button text={expectedText} />,
        container,
      );
    });

    const textElement = container.querySelector('.button__text');
    const actualText = textElement.textContent;

    expect(actualText).toEqual(expectedText);
  });
});