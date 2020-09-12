import IProduct from "../IProduct";
import IProductAction from "./IProductAction";

function updateItemAction(product: IProduct): IProductAction {
  return {
    type: 'UPDATE',
    product,
  };
}

export default updateItemAction;