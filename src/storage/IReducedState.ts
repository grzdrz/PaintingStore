import IBuyingButtonState from "./BuyingButton/IBuyingButtonState";
import IProductsState from "./Products/IProductsState";
import ISearchBarState from './SearchBar/ISearchBarState';

interface IReducedState {
  products: IProductsState;
  searchBar: ISearchBarState;
  buyingButton: IBuyingButtonState;
}

export default IReducedState;
