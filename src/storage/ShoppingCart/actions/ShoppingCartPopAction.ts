import IBuyingProduct from '../IBuyingProduct';
import IShoppingCartAction from './IShoppingCartAction';


function shoppingCartPopAction(buyingProduct: IBuyingProduct): IShoppingCartAction {
  return {
    type: 'POP_PRODUCT',
    buyingProduct,
  };
}

export default shoppingCartPopAction;
