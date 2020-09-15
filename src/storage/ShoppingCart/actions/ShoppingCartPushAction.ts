import IBuyingProduct from '../IBuyingProduct';
import IShoppingCartAction from './IShoppingCartAction';


function shoppingCartPushAction(buyingProduct: IBuyingProduct): IShoppingCartAction {
  return {
    type: 'PUSH_PRODUCT',
    buyingProduct,
  };
}

export default shoppingCartPushAction;
