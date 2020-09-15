import IBuyingProduct from '../IBuyingProduct';

interface IShoppingCartAction {
  type: string,
  buyingProduct: IBuyingProduct,
}

export default IShoppingCartAction;
