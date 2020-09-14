import '../base/base';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import ReducerManager from '../../storage/ReducerManager';

import Header from '../../components/header/header';
import ProductsList from './products-list/products-list';
import Footer from '../../components/footer/footer';

import './prod-pages.scss';


class App extends React.Component {
  render() {
    return (
      <div className='prod-pages'>
        <div className='prod-pages__header'>
          <Header />
        </div>
        <div className='prod-pages__products-list'>
          <ProductsList />
        </div>
        <div className='prod-pages__footer'>
          <Footer />
        </div>
      </div>
    );
  }
}

const reducerManager = new ReducerManager();
const store = createStore(reducerManager.reducer);
store.dispatch({
  type: 'default',
});

const appContainer = document.querySelector('.prod-pages');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  appContainer
);