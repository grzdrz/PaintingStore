import { Reducer } from 'react';
import { AnyAction, CombinedState, combineReducers } from 'redux';
import IReducedState from './IReducedState';
import ProductsReducer from './Products/ProductsReducer';
import SearchBarReducer from './SearchBar/SearchBarReducer';
import ShoppingCartReducer from './ShoppingCart/ShoppingCartReducer';

class ReducerManager {
  public productsReducer: ProductsReducer;
  public searchBarReducer: SearchBarReducer;
  public shoppingCartReducer: ShoppingCartReducer;
  public reducer: Reducer<CombinedState<IReducedState>, AnyAction>;

  constructor() {
    this.productsReducer = new ProductsReducer(this);
    this.searchBarReducer = new SearchBarReducer(this);
    this.shoppingCartReducer = new ShoppingCartReducer(this);

    this.reducer = combineReducers({
      products: this.productsReducer.reduce,
      searchBar: this.searchBarReducer.reduce,
      shoppingCart: this.shoppingCartReducer.reduce,
    });
  }
}

export default ReducerManager;
