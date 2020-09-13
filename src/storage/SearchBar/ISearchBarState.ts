import IProduct from "../Products/IProduct";

interface ISearchBarState {
  textPattern: string,
  matchedProducts: Array<IProduct>,
}

export default ISearchBarState;
