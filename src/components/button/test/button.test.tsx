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

  it('handleClick', () => {
    const mockHandler = jest.fn();
    act(() => {
      render(
        <Button handleClick={mockHandler} />,
        container,
      );
    });

    const button = container.querySelector('.button');
    button.dispatchEvent(new Event('click', { bubbles: true }));

    expect(mockHandler).toBeCalled();
  });

  it('withCheckMark', () => {
    act(() => {
      render(
        <Button withCheckMark />,
        container,
      );
    });

    const buttonWithCheckMark = container.querySelector('.button_with-check-mark');
    expect(buttonWithCheckMark).not.toBeNull();
    const checkMark = container.querySelector('.button__check-mark');
    expect(checkMark).not.toBeNull();
  });

  it('disabled', () => {
    act(() => {
      render(
        <Button disabled />,
        container,
      );
    });

    const button = container.querySelector('.button') as HTMLButtonElement;
    expect(button.disabled).not.toBeUndefined();
  });
});