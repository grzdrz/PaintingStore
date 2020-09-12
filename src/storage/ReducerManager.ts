import { Reducer } from 'react';
import { AnyAction, CombinedState, combineReducers } from 'redux';
import IReducedState from './IReducedState';
import ProductsReducer from './Products/ProductsReducer';
import SearchBarReducer from './SearchBar/SearchBarReducer';

class ReducerManager {
  public productsReducer: ProductsReducer;
  public searchBarReducer: SearchBarReducer;
  public reducer: Reducer<CombinedState<IReducedState>, AnyAction>;

  constructor() {
    this.productsReducer = new ProductsReducer(this);
    this.searchBarReducer = new SearchBarReducer(this);

    this.reducer = combineReducers({
      products: this.productsReducer.reduce,
      searchBar: this.searchBarReducer.reduce,
    });
  }
}

export default ReducerManager;
