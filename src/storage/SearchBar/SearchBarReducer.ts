import IAction from "../IAction";
import IProduct from "../Products/IProduct";
import IProductsState from "../Products/IProductsState";
import Reducer from "../Reducer";
import ReducerManager from "../ReducerManager";
import ISearchBarAction from "./actions/ISearchBarAction";
import ISearchBarState from "./ISearchBarState";

const initialState: ISearchBarState = {
  textPattern: '',
  matchedProducts: [],
};

class SearchBarReducer extends Reducer<ISearchBarState> {
  constructor(reducerManager: ReducerManager, state: ISearchBarState = { ...initialState }) {
    super(reducerManager, state);
  }

  public reduce = (state = this.state, action: ISearchBarAction) => {
    this.state = { ...state };

    switch (action.type) {
      case 'FIND_ITEMS': {
        this.state.textPattern = action.textPattern;
        if (action.textPattern)
          this.state.matchedProducts = this.selectProductsByPattern(this.state.textPattern);
        /* else {
          this.state.products = [];
        } */
        break;
      }
      default: {
        break;
      }
    }

    return this.state;
  }

  private selectProductsByPattern(text: string) {
    const { allProducts } = this.reducerManager.productsReducer.state;
    const pattern = new RegExp(`${text}`, 'gi');
    const products = allProducts.filter((product) => {
      const match = product.name.match(pattern);
      return match;
    });
    return products;
  }
}

export default SearchBarReducer;
