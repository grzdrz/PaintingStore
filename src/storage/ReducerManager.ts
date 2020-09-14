import { Reducer } from 'react';
import { AnyAction, CombinedState, combineReducers } from 'redux';
import BuyingButtonReducer from './BuyingButton/BuyingButtonReducer';
import IReducedState from './IReducedState';
import ProductsReducer from './Products/ProductsReducer';
import SearchBarReducer from './SearchBar/SearchBarReducer';

class ReducerManager {
  public productsReducer: ProductsReducer;
  public searchBarReducer: SearchBarReducer;
  public buyingButtonReducer: BuyingButtonReducer;
  public reducer: Reducer<CombinedState<IReducedState>, AnyAction>;

  constructor() {
    this.productsReducer = new ProductsReducer(this);
    this.searchBarReducer = new SearchBarReducer(this);
    this.buyingButtonReducer = new BuyingButtonReducer(this);

    this.reducer = combineReducers({
      products: this.productsReducer.reduce,
      searchBar: this.searchBarReducer.reduce,
      buyingButton: this.buyingButtonReducer.reduce,
    });
  }
}

export default ReducerManager;
