import IProduct from "./IProduct";

interface IProductsState {
  allProducts: Array<IProduct>;
  activeProducts: Array<IProduct>;
}

export default IProductsState;
