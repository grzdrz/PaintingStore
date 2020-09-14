import IProductAction from "./actions/IProductAction";
import ReducerManager from "../ReducerManager";
import Reducer from "../Reducer";
import IProductsState from "./IProductsState";
import IProduct from "./IProduct";

const allProducts = <Array<IProduct>>(require('../../data/productsData.json').products);

const initialState: IProductsState = {
  allProducts,
  activeProducts: [],
};

const baseProduct: IProduct = {
  id: 1,
  name: 'Черный квадрат',
  author: 'Малевич',
  price: 100500,
  currencyType: '$',
  isSold: false,
};

class ProductsReducer extends Reducer<IProductsState>{
  constructor(reducerManager: ReducerManager, state: IProductsState = { ...initialState }) {
    super(reducerManager, state);
  }

  public reduce = (state = this.state, action: IProductAction) => {
    this.state = { ...state };

    switch (action.type) {
      case 'CREATE': {
        const newItem = this.createItem(action.product);
        this.state.allProducts.push(newItem);
        break;
      }
      case 'UPDATE': {
        const updatedProducts = this.updateItem(action.product);
        this.state.allProducts = updatedProducts;
        break;
      }
      /* case 'DELETE': {
        const updatedProducts = this.deleteItem(action.productId);
        this.state.allProducts = updatedProducts;
        break;
      } */
      default: {
        break;
      }
    }

    this.state.activeProducts = this.obtainActiveProducts();
    return this.state;
  }

  private createItem(product: IProduct) {
    if (product) {
      const result = { ...baseProduct };
      if (product.currencyType) result.currencyType = product.currencyType;
      if (product.isSold) result.isSold = product.isSold;
      if (product.name) result.name = product.name;
      if (product.oldPrice) result.oldPrice = product.oldPrice;
      if (product.price) result.price = product.price;
      if (product.author) result.author = product.author;

      result.id = this.findMaxId(this.state.allProducts) + 1;
      return result;
    }
    return undefined;
  }

  private updateItem(product: IProduct) {
    const result = this.state.allProducts.map((block) => {
      if (block.id === product.id) {
        const blockCopy = { ...block };
        if (product.id) blockCopy.id = product.id;
        if (product.currencyType) blockCopy.currencyType = product.currencyType;
        if (product.isSold) blockCopy.isSold = product.isSold;
        if (product.name) blockCopy.name = product.name;
        if (product.oldPrice) blockCopy.oldPrice = product.oldPrice;
        if (product.price) blockCopy.price = product.price;
        if (product.author) blockCopy.author = product.author;
        return blockCopy;
      }
      return block;
    });

    return result;
  }

  private findMaxId(blocks: Array<IProduct>) {
    const arrayOfId = blocks.map((block) => block.id);
    const firstId = arrayOfId[0] !== undefined ? arrayOfId[0] : 0;
    const biggestId = arrayOfId.reduce((prevId, curId) => Math.max(prevId, curId), firstId);
    return biggestId;
  }

  private filterProductsByName(products: Array<IProduct>, filters: Array<string>) {
    let productsCopy = [...products];
    productsCopy = productsCopy.filter((product) => filters.includes(product.name));
    return productsCopy;
  }

  private sortProductsByName(products: Array<IProduct>, sorters: Array<string>) {
    let productsCopy = [...products];
    sorters.forEach((sorterName) => {
      const comparer = (objectA: IProduct, objectB: IProduct) => {
        if (objectA.name < objectB.name) {
          return -1;
        }
        if (objectA.name > objectB.name) {
          return 1;
        }
        return 0;
      };
      productsCopy = productsCopy.sort(comparer);
    });
    return productsCopy;
  }

  private obtainActiveProducts() {
    let products = [...this.state.allProducts];
    /* const filters = this.reducerManager.filtersReducer.state;

    if (filters.sorters.length !== 0) products = this.sortProducts(products, filters.sorters);
    if (filters.byCategory.length !== 0) products = this.filterProductsByCategory(products, filters.byCategory); */

    return products;
  }
}

export default ProductsReducer;
