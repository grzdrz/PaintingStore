import IProductsState from "./Products/IProductsState";
import ISearchBarState from './SearchBar/ISearchBarState';

interface IReducedState {
  products: IProductsState;
  searchBar: ISearchBarState;
}

export default IReducedState;
