
import IProductsState from "./Products/IProductsState";
import ISearchBarState from './SearchBar/ISearchBarState';
import IShoppingCartState from "./ShoppingCart/IShoppingCartState";

interface IReducedState {
  products: IProductsState;
  searchBar: ISearchBarState;
  shoppingCart: IShoppingCartState;
}

export default IReducedState;
