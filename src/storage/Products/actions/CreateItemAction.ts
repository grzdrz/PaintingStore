import IProduct from "../IProduct";
import IProductAction from "./IProductAction";

function createItemAction(product: IProduct): IProductAction {
  return {
    type: 'CREATE',
    product,
  };
}

export default createItemAction;