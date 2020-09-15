import createItemAction from '../../storage/Products/actions/CreateItemAction';
import updateItemAction from '../../storage/Products/actions/UpdateItemAction';
import searchBarAction from '../../storage/SearchBar/actions/SearchBarAction';
import shoppingCartPopAction from '../../storage/ShoppingCart/actions/ShoppingCartPopAction';
import shoppingCartPushAction from '../../storage/ShoppingCart/actions/ShoppingCartPushAction';

const actions = {
  createItemAction,
  updateItemAction,
  searchBarAction,
  shoppingCartPushAction,
  shoppingCartPopAction,
};

export default actions;
