import IAction from "../../IAction";

interface ISearchBarAction extends IAction {
  type: string;
  text: string;
}

export default ISearchBarAction;