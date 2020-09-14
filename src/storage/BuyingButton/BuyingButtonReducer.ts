import IAction from "../IAction";
import IProduct from "../Products/IProduct";
import IProductsState from "../Products/IProductsState";
import Reducer from "../Reducer";
import ReducerManager from "../ReducerManager";
import IBuyingButtonAction from "./actions/IBuyingButtonAction";
import IBuyingButtonState from "./IBuyingButtonState";

const initialState: IBuyingButtonState = {
  isFetching: false,
  productsId: [],
};

class BuyingButtonReducer extends Reducer<IBuyingButtonState>{
  constructor(reducerManager: ReducerManager, state: IBuyingButtonState = { ...initialState }) {
    super(reducerManager, state);
  }

  addProduct(id: number) {
    if (!this.state.productsId.includes(id)) this.state.productsId.push(id);
  }

  reduce = (state = this.state, action: IBuyingButtonAction) => {
    this.state = { ...state };

    switch (action.type) {
      case 'BUY_PRODUCT': {
        if (!action.productForBuying.isFetching && action.productForBuying.productId !== undefined) {
          this.addProduct(action.productForBuying.productId);
        }
        break;
      }
    }

    return this.state;
  }
}

export default BuyingButtonReducer;
