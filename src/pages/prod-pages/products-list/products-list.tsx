import React from 'react';
import { connect } from 'react-redux';
import ProductBlock from '../../../components/product-block/product-block';
import buyingButtonAction from '../../../storage/BuyingButton/actions/BuyingButtonAction';
import IBuyingButtonState from '../../../storage/BuyingButton/IBuyingButtonState';
import IReducedState from '../../../storage/IReducedState';
import IProductsState from '../../../storage/Products/IProductsState';
import ISearchBarState from '../../../storage/SearchBar/ISearchBarState';
import actions from './actions';
import './products-list.scss';

interface IProps {
  products: IProductsState,
  searchBar: ISearchBarState,
  buyingButton: IBuyingButtonState,
  buyingProductAction: typeof buyingButtonAction,
}

function ProductsList(props: IProps) {
  const {
    products,
    searchBar,
    buyingButton,
    buyingProductAction,
  } = props;
  const activeProducts = searchBar.textPattern ? [...searchBar.matchedProducts] : [...products.allProducts];
  /* const productInCart = activeProducts.find((product) => {
    const hasProduct = buyingButton.productsId.includes(product.id);
    return hasProduct;
  });
  const inCart = productInCart ? true : false; */

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
                  productsInCart={buyingButton.productsId}
                  buyingProductAction={buyingProductAction}
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
