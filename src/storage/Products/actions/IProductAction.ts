import IProductsState from "../IProductsState";
import IAction from "../../IAction";
import IProduct from "../IProduct";

interface IProductAction extends IAction {
  type: string;

  product: IProduct/* sState */;
}

export default IProductAction;
