import Reducer from '../Reducer';
import ReducerManager from '../ReducerManager';
import IShoppingCartAction from './actions/IShoppingCartAction';
import IShoppingCartState from './IShoppingCartState';

const initialState: IShoppingCartState = {
  isFetching: false,
  productsId: [],
};

class ShoppingCartReducer extends Reducer<IShoppingCartState>{
  constructor(reducerManager: ReducerManager, state: IShoppingCartState = { ...initialState }) {
    super(reducerManager, state);
  }

  addProduct(id: number) {
    if (!this.state.productsId.includes(id)) this.state.productsId.push(id);
  }

  reduce = (state = this.state, action: IShoppingCartAction) => {
    this.state = { ...state };
    this.state.isFetching = action.buyingProduct ? action.buyingProduct.isFetching : false;

    switch (action.type) {
      case 'PUSH_PRODUCT': {
        if (!this.state.isFetching && action.buyingProduct.productId !== undefined) {
          this.addProduct(action.buyingProduct.productId);
        }
        break;
      }
      case 'POP_PRODUCT': {
        if (!this.state.isFetching && action.buyingProduct.productId !== undefined) {
          this.state.productsId = this.state.productsId.filter((id) => id !== action.buyingProduct.productId);
        }
        break;
      }
    }

    return this.state;
  }
}

export default ShoppingCartReducer;
