import ISearchBarAction from "./ISearchBarAction";

function searchBarAction(textPattern: string): ISearchBarAction {
  return {
    type: 'FIND_ITEMS',
    textPattern,
  };
}

export default searchBarAction;
