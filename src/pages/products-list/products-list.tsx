import React from 'react';
import { connect } from 'react-redux';
import ProductBlock from '../../components/product-block/product-block';
import IReducedState from '../../storage/IReducedState';
import IProductsState from '../../storage/Products/IProductsState';
import ISearchBarState from '../../storage/SearchBar/ISearchBarState';
import shoppingCartPopAction from '../../storage/ShoppingCart/actions/ShoppingCartPopAction';
import shoppingCartPushAction from '../../storage/ShoppingCart/actions/ShoppingCartPushAction';
import IShoppingCartState from '../../storage/ShoppingCart/IShoppingCartState';
import actions from './actions';
import './products-list.scss';

interface IProps {
  products: IProductsState,
  searchBar: ISearchBarState,
  shoppingCart: IShoppingCartState,
  shoppingCartPushAction: typeof shoppingCartPushAction,
  shoppingCartPopAction: typeof shoppingCartPopAction,
}

function ProductsList(props: IProps) {
  const {
    products,
    searchBar,
    shoppingCart,
    shoppingCartPushAction,
    shoppingCartPopAction,
  } = props;
  const activeProducts = searchBar.textPattern ? [...searchBar.matchedProducts] : [...products.allProducts];

  return (
    <div className='products-list'>
      <div className='products-list__container'>
        <p className='products-list__title'>Картины эпохи Возрождения</p>
        <ul className='products-list__list'>
          {activeProducts.map((product) => { // all -> active
            return (
              <li className='products-list__item' key={`products-list__item_${product.id}`}>
                <ProductBlock
                  product={product}
                  productsInCart={shoppingCart.productsId}
                  shoppingCartPushAction={shoppingCartPushAction}
                  shoppingCartPopAction={shoppingCartPopAction}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = function (state: IReducedState) {
  return state;
};
export default connect(mapStateToProps, actions)(ProductsList);
