import IAction from "../IAction";
import IProductsState from "../Products/IProductsState";
import Reducer from "../Reducer";
import ReducerManager from "../ReducerManager";
import ISearchBarAction from "./actions/ISearchBarAction";

const initialState: ISearchBarState = {
  text: '',
};

class SearchBarReducer extends Reducer<ISearchBarState> {
  constructor(reducerManager: ReducerManager, state: ISearchBarState = { ...initialState }) {
    super(reducerManager, state);
  }

  public reduce = (state = this.state, action: ISearchBarAction) => {
    this.state = { ...state };

    switch (action.type) {
      case 'FIND_ITEMS': {


        break;
      }
      default: {
        break;
      }
    }

    return this.state;
  }
}

export default SearchBarReducer;
