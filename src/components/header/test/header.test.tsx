/* eslint-disable no-undef */
import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Header from '../header';

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

it('close header', () => {
  act(() => {
    render(<Header />, container);
  });

  const burger = container.querySelector('.header__burger');
  burger.dispatchEvent(new Event('click', { bubbles: true }));

  const closedLogo = container.querySelector('.header__colored-logo_closed');
  const closedBurger = container.querySelector('.header__burger_closed');
  const closedNavigationBar = container.querySelector('.header__navigation-bar_closed');
  const closedSearchBar = container.querySelector('.header__search-bar_closed');
  const burgerElement = container.querySelector('.header__burger-element_opened');

  expect(closedLogo).not.toBeNull();
  expect(closedBurger).not.toBeNull();
  expect(closedNavigationBar).not.toBeNull();
  expect(closedSearchBar).not.toBeNull();
  expect(burgerElement).toBeNull();
});