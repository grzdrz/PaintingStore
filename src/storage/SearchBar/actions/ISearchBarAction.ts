import IAction from "../../IAction";

interface ISearchBarAction extends IAction {
  type: string;
  textPattern: string;
}

export default ISearchBarAction;